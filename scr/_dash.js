/*
Copyright (c) 2011 Stefan Thomas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


//https://raw.github.com/bitcoinjs/bitcoinjs-lib/1a7fc9d063f864058809d06ef4542af40be3558f/src/bitcoin.js
(function (exports) {
  var Dashcoin = exports;
})(
  'object' === typeof module ? module.exports : (window.Dashcoin = {})
);


//https://raw.github.com/bitcoinjs/bitcoinjs-lib/c952aaeb3ee472e3776655b8ea07299ebed702c7/src/base58.js
(function (Dashcoin) {
  Dashcoin.Base58 = {
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
    validRegex: /^[1-9A-HJ-NP-Za-km-z]+$/,
    base: BigInteger.valueOf(58),

    /**
    * Convert a byte array to a base58-encoded string.
    *
    * Written by Mike Hearn.
    *   Copyright (c) 2011 Google Inc.
    *
    * Ported to JavaScript by Stefan Thomas.
    */
    encode: function (input) {
      var bi = BigInteger.fromByteArrayUnsigned(input);
      var chars = [];

      while (bi.compareTo(B58.base) >= 0) {
        var mod = bi.mod(B58.base);
        chars.unshift(B58.alphabet[mod.intValue()]);
        bi = bi.subtract(mod).divide(B58.base);
      }
      chars.unshift(B58.alphabet[bi.intValue()]);

      // Convert leading zeros too.
      for (var i = 0; i < input.length; i++) {
        if (input[i] == 0x00) {
          chars.unshift(B58.alphabet[0]);
        } else break;
      }

      return chars.join('');
    },

    /**
    * Convert a base58-encoded string to a byte array.
    *
    * Written by Mike Hearn.
    *   Copyright (c) 2011 Google Inc.
    *
    * Ported to JavaScript by Stefan Thomas.
    */
    decode: function (input) {
      var bi = BigInteger.valueOf(0);
      var leadingZerosNum = 0;
      for (var i = input.length - 1; i >= 0; i--) {
        var alphaIndex = B58.alphabet.indexOf(input[i]);
        if (alphaIndex < 0) {
          throw "Invalid character";
        }
        bi = bi.add(BigInteger.valueOf(alphaIndex)
                .multiply(B58.base.pow(input.length - 1 - i)));

        // This counts leading zero bytes
        if (input[i] == "1") leadingZerosNum++;
        else leadingZerosNum = 0;
      }
      var bytes = bi.toByteArrayUnsigned();

      // Add leading zeros
      while (leadingZerosNum-- > 0) bytes.unshift(0);

      return bytes;
    }
  };

  var B58 = Dashcoin.Base58;
})(
  'undefined' != typeof Dashcoin ? Dashcoin : module.exports
);


//https://raw.github.com/bitcoinjs/bitcoinjs-lib/09e8c6e184d6501a0c2c59d73ca64db5c0d3eb95/src/address.js
Dashcoin.Address = function (bytes) {
  if ("string" == typeof bytes) {
    bytes = Dashcoin.Address.decodeString(bytes);
  }
  this.hash = bytes;
  this.version = Dashcoin.Address.networkVersion;
};

Dashcoin.Address.networkVersion = 0x4C; // mainnet

/**
* Serialize this object as a standard Dashcoin address.
*
* Returns the address as a base58-encoded string in the standardized format.
*/
Dashcoin.Address.prototype.toString = function () {
  // Get a copy of the hash
  var hash = this.hash.slice(0);

  // Version
  hash.unshift(this.version);
  var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });
  var bytes = hash.concat(checksum.slice(0, 4));
  return Dashcoin.Base58.encode(bytes);
};

Dashcoin.Address.prototype.getHashBase64 = function () {
  return Crypto.util.bytesToBase64(this.hash);
};

/**
* Parse a Dashcoin address contained in a string.
*/
Dashcoin.Address.decodeString = function (string) {
  var bytes = Dashcoin.Base58.decode(string);
  var hash = bytes.slice(0, 21);
  var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });

  if (checksum[0] != bytes[21] ||
      checksum[1] != bytes[22] ||
      checksum[2] != bytes[23] ||
      checksum[3] != bytes[24]) {
    throw "Checksum validation failed!";
  }

  var version = hash.shift();

  if (version != 0) {
    throw "Version " + version + " not supported!";
  }

  return hash;
};


//https://raw.github.com/bitcoinjs/bitcoinjs-lib/e90780d3d3b8fc0d027d2bcb38b80479902f223e/src/ecdsa.js
Dashcoin.ECDSA = (function () {
  var ecparams = EllipticCurve.getSECCurveByName("secp256k1");
  var rng = new SecureRandom();

  var P_OVER_FOUR = null;

  function implShamirsTrick(P, k, Q, l) {
    var m = Math.max(k.bitLength(), l.bitLength());
    var Z = P.add2D(Q);
    var R = P.curve.getInfinity();

    for (var i = m - 1; i >= 0; --i) {
      R = R.twice2D();

      R.z = BigInteger.ONE;

      if (k.testBit(i)) {
        if (l.testBit(i)) {
          R = R.add2D(Z);
        } else {
          R = R.add2D(P);
        }
      } else {
        if (l.testBit(i)) {
          R = R.add2D(Q);
        }
      }
    }

    return R;
  };

  var ECDSA = {
    getBigRandom: function (limit) {
      return new BigInteger(limit.bitLength(), rng)
        .mod(limit.subtract(BigInteger.ONE))
        .add(BigInteger.ONE);
    },
    sign: function (hash, priv) {
      var d = priv;
      var n = ecparams.getN();
      var e = BigInteger.fromByteArrayUnsigned(hash);

      do {
        var k = ECDSA.getBigRandom(n);
        var G = ecparams.getG();
        var Q = G.multiply(k);
        var r = Q.getX().toBigInteger().mod(n);
      } while (r.compareTo(BigInteger.ZERO) <= 0);

      var s = k.modInverse(n).multiply(e.add(d.multiply(r))).mod(n);

      return ECDSA.serializeSig(r, s);
    },

    verify: function (hash, sig, pubkey) {
      var r, s;
      if (Dashcoin.Util.isArray(sig)) {
        var obj = ECDSA.parseSig(sig);
        r = obj.r;
        s = obj.s;
      } else if ("object" === typeof sig && sig.r && sig.s) {
        r = sig.r;
        s = sig.s;
      } else {
        throw "Invalid value for signature";
      }

      var Q;
      if (pubkey instanceof ec.PointFp) {
        Q = pubkey;
      } else if (Dashcoin.Util.isArray(pubkey)) {
        Q = EllipticCurve.PointFp.decodeFrom(ecparams.getCurve(), pubkey);
      } else {
        throw "Invalid format for pubkey value, must be byte array or ec.PointFp";
      }
      var e = BigInteger.fromByteArrayUnsigned(hash);

      return ECDSA.verifyRaw(e, r, s, Q);
    },

    verifyRaw: function (e, r, s, Q) {
      var n = ecparams.getN();
      var G = ecparams.getG();

      if (r.compareTo(BigInteger.ONE) < 0 ||
          r.compareTo(n) >= 0)
        return false;

      if (s.compareTo(BigInteger.ONE) < 0 ||
          s.compareTo(n) >= 0)
        return false;

      var c = s.modInverse(n);

      var u1 = e.multiply(c).mod(n);
      var u2 = r.multiply(c).mod(n);

      // TODO(!!!): For some reason Shamir's trick isn't working with
      // signed message verification!? Probably an implementation
      // error!
      //var point = implShamirsTrick(G, u1, Q, u2);
      var point = G.multiply(u1).add(Q.multiply(u2));

      var v = point.getX().toBigInteger().mod(n);

      return v.equals(r);
    },

    /**
    * Serialize a signature into DER format.
    *
    * Takes two BigIntegers representing r and s and returns a byte array.
    */
    serializeSig: function (r, s) {
      var rBa = r.toByteArraySigned();
      var sBa = s.toByteArraySigned();

      var sequence = [];
      sequence.push(0x02); // INTEGER
      sequence.push(rBa.length);
      sequence = sequence.concat(rBa);

      sequence.push(0x02); // INTEGER
      sequence.push(sBa.length);
      sequence = sequence.concat(sBa);

      sequence.unshift(sequence.length);
      sequence.unshift(0x30); // SEQUENCE

      return sequence;
    },

    /**
    * Parses a byte array containing a DER-encoded signature.
    *
    * This function will return an object of the form:
    * 
    * {
    *   r: BigInteger,
    *   s: BigInteger
    * }
    */
    parseSig: function (sig) {
      var cursor;
      if (sig[0] != 0x30)
        throw new Error("Signature not a valid DERSequence");

      cursor = 2;
      if (sig[cursor] != 0x02)
        throw new Error("First element in signature must be a DERInteger"); ;
      var rBa = sig.slice(cursor + 2, cursor + 2 + sig[cursor + 1]);

      cursor += 2 + sig[cursor + 1];
      if (sig[cursor] != 0x02)
        throw new Error("Second element in signature must be a DERInteger");
      var sBa = sig.slice(cursor + 2, cursor + 2 + sig[cursor + 1]);

      cursor += 2 + sig[cursor + 1];

      //if (cursor != sig.length)
      //  throw new Error("Extra bytes in signature");

      var r = BigInteger.fromByteArrayUnsigned(rBa);
      var s = BigInteger.fromByteArrayUnsigned(sBa);

      return { r: r, s: s };
    },

    parseSigCompact: function (sig) {
      if (sig.length !== 65) {
        throw "Signature has the wrong length";
      }

      // Signature is prefixed with a type byte storing three bits of
      // information.
      var i = sig[0] - 27;
      if (i < 0 || i > 7) {
        throw "Invalid signature type";
      }

      var n = ecparams.getN();
      var r = BigInteger.fromByteArrayUnsigned(sig.slice(1, 33)).mod(n);
      var s = BigInteger.fromByteArrayUnsigned(sig.slice(33, 65)).mod(n);

      return { r: r, s: s, i: i };
    },

    /**
    * Recover a public key from a signature.
    *
    * See SEC 1: Elliptic Curve Cryptography, section 4.1.6, "Public
    * Key Recovery Operation".
    *
    * http://www.secg.org/download/aid-780/sec1-v2.pdf
    */
    recoverPubKey: function (r, s, hash, i) {
      // The recovery parameter i has two bits.
      i = i & 3;

      // The less significant bit specifies whether the y coordinate
      // of the compressed point is even or not.
      var isYEven = i & 1;

      // The more significant bit specifies whether we should use the
      // first or second candidate key.
      var isSecondKey = i >> 1;

      var n = ecparams.getN();
      var G = ecparams.getG();
      var curve = ecparams.getCurve();
      var p = curve.getQ();
      var a = curve.getA().toBigInteger();
      var b = curve.getB().toBigInteger();

      // We precalculate (p + 1) / 4 where p is if the field order
      if (!P_OVER_FOUR) {
        P_OVER_FOUR = p.add(BigInteger.ONE).divide(BigInteger.valueOf(4));
      }

      // 1.1 Compute x
      var x = isSecondKey ? r.add(n) : r;

      // 1.3 Convert x to point
      var alpha = x.multiply(x).multiply(x).add(a.multiply(x)).add(b).mod(p);
      var beta = alpha.modPow(P_OVER_FOUR, p);

      var xorOdd = beta.isEven() ? (i % 2) : ((i + 1) % 2);
      // If beta is even, but y isn't or vice versa, then convert it,
      // otherwise we're done and y == beta.
      var y = (beta.isEven() ? !isYEven : isYEven) ? beta : p.subtract(beta);

      // 1.4 Check that nR is at infinity
      var R = new EllipticCurve.PointFp(curve,
                            curve.fromBigInteger(x),
                            curve.fromBigInteger(y));
      R.validate();

      // 1.5 Compute e from M
      var e = BigInteger.fromByteArrayUnsigned(hash);
      var eNeg = BigInteger.ZERO.subtract(e).mod(n);

      // 1.6 Compute Q = r^-1 (sR - eG)
      var rInv = r.modInverse(n);
      var Q = implShamirsTrick(R, s, G, eNeg).multiply(rInv);

      Q.validate();
      if (!ECDSA.verifyRaw(e, r, s, Q)) {
        throw "Pubkey recovery unsuccessful";
      }

      var pubKey = new Dashcoin.ECKey();
      pubKey.pub = Q;
      return pubKey;
    },

    /**
    * Calculate pubkey extraction parameter.
    *
    * When extracting a pubkey from a signature, we have to
    * distinguish four different cases. Rather than putting this
    * burden on the verifier, Dashcoin includes a 2-bit value with the
    * signature.
    *
    * This function simply tries all four cases and returns the value
    * that resulted in a successful pubkey recovery.
    */
    calcPubkeyRecoveryParam: function (address, r, s, hash) {
      for (var i = 0; i < 4; i++) {
        try {
          var pubkey = Dashcoin.ECDSA.recoverPubKey(r, s, hash, i);
          if (pubkey.getDashcoinAddress().toString() == address) {
            return i;
          }
        } catch (e) { }
      }
      throw "Unable to find valid recovery factor";
    }
  };

  return ECDSA;
})();


Dashcoin.KeyPool = (function () {
  var KeyPool = function () {
    this.keyArray = [];

    this.push = function (item) {
      if (item == null || item.priv == null) return;
      var doAdd = true;
      // prevent duplicates from being added to the array
      for (var index in this.keyArray) {
        var currentItem = this.keyArray[index];
        if (currentItem != null && currentItem.priv != null && item.getDashcoinAddress() == currentItem.getDashcoinAddress()) {
          doAdd = false;
          break;
        }
      }
      if (doAdd) this.keyArray.push(item);
    };

    this.reset = function () {
      this.keyArray = [];
    };

    this.getArray = function () {
      // copy array
      return this.keyArray.slice(0);
    };

    this.setArray = function (ka) {
      this.keyArray = ka;
    };

    this.length = function () {
      return this.keyArray.length;
    };

    this.toString = function () {
      var keyPoolString = "# = " + this.length() + "\n";
      var pool = this.getArray();
      for (var index in pool) {
        var item = pool[index];
        if (Dashcoin.Util.hasMethods(item, 'getDashcoinAddress', 'toString')) {
          if (item != null) {
            keyPoolString += "\"" + item.getDashcoinAddress() + "\"" + ", \"" + item.toString("wif") + "\"\n";
          }
        }
      }

      return keyPoolString;
    };

    return this;
  };

  return new KeyPool();
})();

Dashcoin.Bip38Key = (function () {
  var Bip38 = function (address, encryptedKey) {
    this.address = address;
    this.priv = encryptedKey;
  };

  Bip38.prototype.getDashcoinAddress = function () {
    return this.address;
  };

  Bip38.prototype.toString = function () {
    return this.priv;
  };

  return Bip38;
})();

//https://raw.github.com/pointbiz/bitcoinjs-lib/9b2f94a028a7bc9bed94e0722563e9ff1d8e8db8/src/eckey.js
Dashcoin.ECKey = (function () {
  var ECDSA = Dashcoin.ECDSA;
  var KeyPool = Dashcoin.KeyPool;
  var ecparams = EllipticCurve.getSECCurveByName("secp256k1");

  var ECKey = function (input) {
    if (!input) {
      // Generate new key
      var n = ecparams.getN();
      this.priv = ECDSA.getBigRandom(n);
    } else if (input instanceof BigInteger) {
      // Input is a private key value
      this.priv = input;
    } else if (Dashcoin.Util.isArray(input)) {
      // Prepend zero byte to prevent interpretation as negative integer
      this.priv = BigInteger.fromByteArrayUnsigned(input);
    } else if ("string" == typeof input) {
      var bytes = null;
      try{
        if (ECKey.isWalletImportFormat(input)) {
          bytes = ECKey.decodeWalletImportFormat(input);
        } else if (ECKey.isCompressedWalletImportFormat(input)) {
          bytes = ECKey.decodeCompressedWalletImportFormat(input);
          this.compressed = true;
        } else if (ECKey.isMiniFormat(input)) {
          bytes = Crypto.SHA256(input, { asBytes: true });
        } else if (ECKey.isHexFormat(input)) {
          bytes = Crypto.util.hexToBytes(input);
        } else if (ECKey.isBase64Format(input)) {
          bytes = Crypto.util.base64ToBytes(input);
        }
      } catch (exc1) {
        this.setError(exc1);
      }

      if (ECKey.isBase6Format(input)) {
        this.priv = new BigInteger(input, 6);
      } else if (bytes == null || bytes.length != 32) {
        this.priv = null;
      } else {
        // Prepend zero byte to prevent interpretation as negative integer
        this.priv = BigInteger.fromByteArrayUnsigned(bytes);
      }
    }

    this.compressed = (this.compressed == undefined) ? !!ECKey.compressByDefault : this.compressed;
    try {
      // check not zero
      if (this.priv != null && BigInteger.ZERO.compareTo(this.priv) == 0) this.setError("Error: BigInteger equal to zero.");
      // valid range [0x1, 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364140])
      var hexKeyRangeLimit = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364140";
      var rangeLimitBytes = Crypto.util.hexToBytes(hexKeyRangeLimit);
      var limitBigInt = BigInteger.fromByteArrayUnsigned(rangeLimitBytes);
      if (this.priv != null && limitBigInt.compareTo(this.priv) < 0) this.setError("Error: BigInteger outside of curve range.")

      if (this.priv != null) {
        KeyPool.push(this);
      }
    } catch (exc2) {
      this.setError(exc2);
    }
  };

  ECKey.privateKeyPrefix = 0xCC; // mainnet 0xCC    testnet 0xEF

  /**
  * Whether public keys should be returned compressed by default.
  */
  ECKey.compressByDefault = false;

  /**
  * Set whether the public key should be returned compressed or not.
  */
  ECKey.prototype.setError = function (err) {
    this.error = err;
    this.priv = null;
    return this;
  };

  /**
  * Set whether the public key should be returned compressed or not.
  */
  ECKey.prototype.setCompressed = function (v) {
    this.compressed = !!v;
    if (this.pubPoint) this.pubPoint.compressed = this.compressed;
    return this;
  };

  /*
  * Return public key as a byte array in DER encoding
  */
  ECKey.prototype.getPub = function () {
    if (this.compressed) {
      if (this.pubComp) return this.pubComp;
      return this.pubComp = this.getPubPoint().getEncoded(1);
    } else {
      if (this.pubUncomp) return this.pubUncomp;
      return this.pubUncomp = this.getPubPoint().getEncoded(0);
    }
  };

  /**
  * Return public point as ECPoint object.
  */
  ECKey.prototype.getPubPoint = function () {
    if (!this.pubPoint) {
      this.pubPoint = ecparams.getG().multiply(this.priv);
      this.pubPoint.compressed = this.compressed;
    }
    return this.pubPoint;
  };

  ECKey.prototype.getPubKeyHex = function () {
    if (this.compressed) {
      if (this.pubKeyHexComp) return this.pubKeyHexComp;
      return this.pubKeyHexComp = Crypto.util.bytesToHex(this.getPub()).toString().toUpperCase();
    } else {
      if (this.pubKeyHexUncomp) return this.pubKeyHexUncomp;
      return this.pubKeyHexUncomp = Crypto.util.bytesToHex(this.getPub()).toString().toUpperCase();
    }
  };

  /**
  * Get the pubKeyHash for this key.
  *
  * This is calculated as RIPE160(SHA256([encoded pubkey])) and returned as
  * a byte array.
  */
  ECKey.prototype.getPubKeyHash = function () {
    if (this.compressed) {
      if (this.pubKeyHashComp) return this.pubKeyHashComp;
      return this.pubKeyHashComp = Dashcoin.Util.sha256ripe160(this.getPub());
    } else {
      if (this.pubKeyHashUncomp) return this.pubKeyHashUncomp;
      return this.pubKeyHashUncomp = Dashcoin.Util.sha256ripe160(this.getPub());
    }
  };

  ECKey.prototype.getDashcoinAddress = function () {
    var hash = this.getPubKeyHash();
    var addr = new Dashcoin.Address(hash);
    return addr.toString();
  };

  /*
  * Takes a public point as a hex string or byte array
  */
  ECKey.prototype.setPub = function (pub) {
    // byte array
    if (Dashcoin.Util.isArray(pub)) {
      pub = Crypto.util.bytesToHex(pub).toString().toUpperCase();
    }
    var ecPoint = ecparams.getCurve().decodePointHex(pub);
    this.setCompressed(ecPoint.compressed);
    this.pubPoint = ecPoint;
    return this;
  };

  // Sipa Private Key Wallet Import Format 
  ECKey.prototype.getDashcoinWalletImportFormat = function () {
    var bytes = this.getDashcoinPrivateKeyByteArray();
    if (bytes == null) return "";
    bytes.unshift(ECKey.privateKeyPrefix); // prepend 0x80 byte
    if (this.compressed) bytes.push(0x01); // append 0x01 byte for compressed format
    var checksum = Crypto.SHA256(Crypto.SHA256(bytes, { asBytes: true }), { asBytes: true });
    bytes = bytes.concat(checksum.slice(0, 4));
    var privWif = Dashcoin.Base58.encode(bytes);
    return privWif;
  };

  // Private Key Hex Format 
  ECKey.prototype.getDashcoinHexFormat = function () {
    return Crypto.util.bytesToHex(this.getDashcoinPrivateKeyByteArray()).toString().toUpperCase();
  };

  // Private Key Base64 Format 
  ECKey.prototype.getDashcoinBase64Format = function () {
    return Crypto.util.bytesToBase64(this.getDashcoinPrivateKeyByteArray());
  };

  ECKey.prototype.getDashcoinPrivateKeyByteArray = function () {
    if (this.priv == null) return null;
    // Get a copy of private key as a byte array
    var bytes = this.priv.toByteArrayUnsigned();
    // zero pad if private key is less than 32 bytes 
    while (bytes.length < 32) bytes.unshift(0x00);
    return bytes;
  };

  ECKey.prototype.toString = function (format) {
    format = format || "";
    if (format.toString().toLowerCase() == "base64" || format.toString().toLowerCase() == "b64") {
      return this.getDashcoinBase64Format();
    }
    // Wallet Import Format
    else if (format.toString().toLowerCase() == "wif") {
      return this.getDashcoinWalletImportFormat();
    }
    else {
      return this.getDashcoinHexFormat();
    }
  };

  ECKey.prototype.sign = function (hash) {
    return ECDSA.sign(hash, this.priv);
  };

  ECKey.prototype.verify = function (hash, sig) {
    return ECDSA.verify(hash, sig, this.getPub());
  };

  /**
  * Parse a wallet import format private key contained in a string.
  */
  ECKey.decodeWalletImportFormat = function (privStr) {
    var bytes = Dashcoin.Base58.decode(privStr);
    var hash = bytes.slice(0, 33);
    var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });
    if (checksum[0] != bytes[33] ||
          checksum[1] != bytes[34] ||
          checksum[2] != bytes[35] ||
          checksum[3] != bytes[36]) {
      throw "Checksum validation failed!";
    }
    var version = hash.shift();
    if (version != ECKey.privateKeyPrefix) {
      throw "Version " + version + " not supported!";
    }
    return hash;
  };

  /**
  * Parse a compressed wallet import format private key contained in a string.
  */
  ECKey.decodeCompressedWalletImportFormat = function (privStr) {
    var bytes = Dashcoin.Base58.decode(privStr);
    var hash = bytes.slice(0, 34);
    var checksum = Crypto.SHA256(Crypto.SHA256(hash, { asBytes: true }), { asBytes: true });
    if (checksum[0] != bytes[34] ||
          checksum[1] != bytes[35] ||
          checksum[2] != bytes[36] ||
          checksum[3] != bytes[37]) {
      throw "Checksum validation failed!";
    }
    var version = hash.shift();
    if (version != ECKey.privateKeyPrefix) {
      throw "Version " + version + " not supported!";
    }
    hash.pop();
    return hash;
  };

  // 64 characters [0-9A-F]
  ECKey.isHexFormat = function (key) {
    key = key.toString();
    return /^[A-Fa-f0-9]{64}$/.test(key);
  };

  // 51 characters base58, always starts with a '7'
  ECKey.isWalletImportFormat = function (key) {
    key = key.toString();
    return (ECKey.privateKeyPrefix == 0xCC) ?
              (/^7[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$/.test(key)) :
              (/^9[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$/.test(key));
  };

  // 52 characters base58
  ECKey.isCompressedWalletImportFormat = function (key) {
    key = key.toString();
    return (ECKey.privateKeyPrefix == 0xCC) ?
              (/^X[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$/.test(key)) :
              (/^c[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$/.test(key));
  };

  // 44 characters
  ECKey.isBase64Format = function (key) {
    key = key.toString();
    return (/^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=+\/]{44}$/.test(key));
  };

  // 99 characters, 1=1, if using dice convert 6 to 0
  ECKey.isBase6Format = function (key) {
    key = key.toString();
    return (/^[012345]{99}$/.test(key));
  };

  // 22, 26 or 30 characters, always starts with an 'S'
  ECKey.isMiniFormat = function (key) {
    key = key.toString();
    var validChars22 = /^S[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{21}$/.test(key);
    var validChars26 = /^S[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{25}$/.test(key);
    var validChars30 = /^S[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}$/.test(key);
    var testBytes = Crypto.SHA256(key + "?", { asBytes: true });

    return ((testBytes[0] === 0x00 || testBytes[0] === 0x01) && (validChars22 || validChars26 || validChars30));
  };

  return ECKey;
})();


//https://raw.github.com/bitcoinjs/bitcoinjs-lib/09e8c6e184d6501a0c2c59d73ca64db5c0d3eb95/src/util.js
// Dashcoin utility functions
Dashcoin.Util = {
  /**
  * Cross-browser compatibility version of Array.isArray.
  */
  isArray: Array.isArray || function (o) {
    return Object.prototype.toString.call(o) === '[object Array]';
  },
  /**
  * Create an array of a certain length filled with a specific value.
  */
  makeFilledArray: function (len, val) {
    var array = [];
    var i = 0;
    while (i < len) {
      array[i++] = val;
    }
    return array;
  },
  /**
  * Turn an integer into a "var_int".
  *
  * "var_int" is a variable length integer used by Dashcoin's binary format.
  *
  * Returns a byte array.
  */
  numToVarInt: function (i) {
    if (i < 0xfd) {
      // unsigned char
      return [i];
    } else if (i <= 1 << 16) {
      // unsigned short (LE)
      return [0xfd, i >>> 8, i & 255];
    } else if (i <= 1 << 32) {
      // unsigned int (LE)
      return [0xfe].concat(Crypto.util.wordsToBytes([i]));
    } else {
      // unsigned long long (LE)
      return [0xff].concat(Crypto.util.wordsToBytes([i >>> 32, i]));
    }
  },
  /**
  * Parse a Dashcoin value byte array, returning a BigInteger.
  */
  valueToBigInt: function (valueBuffer) {
    if (valueBuffer instanceof BigInteger) return valueBuffer;

    // Prepend zero byte to prevent interpretation as negative integer
    return BigInteger.fromByteArrayUnsigned(valueBuffer);
  },
  /**
  * Format a Dashcoin value as a string.
  *
  * Takes a BigInteger or byte-array and returns that amount of Dashcoins in a
  * nice standard formatting.
  *
  * Examples:
  * 12.3555
  * 0.1234
  * 900.99998888
  * 34.00
  */
  formatValue: function (valueBuffer) {
    var value = this.valueToBigInt(valueBuffer).toString();
    var integerPart = value.length > 8 ? value.substr(0, value.length - 8) : '0';
    var decimalPart = value.length > 8 ? value.substr(value.length - 8) : value;
    while (decimalPart.length < 8) decimalPart = "0" + decimalPart;
    decimalPart = decimalPart.replace(/0*$/, '');
    while (decimalPart.length < 2) decimalPart += "0";
    return integerPart + "." + decimalPart;
  },
  /**
  * Parse a floating point string as a Dashcoin value.
  *
  * Keep in mind that parsing user input is messy. You should always display
  * the parsed value back to the user to make sure we understood his input
  * correctly.
  */
  parseValue: function (valueString) {
    // TODO: Detect other number formats (e.g. comma as decimal separator)
    var valueComp = valueString.split('.');
    var integralPart = valueComp[0];
    var fractionalPart = valueComp[1] || "0";
    while (fractionalPart.length < 8) fractionalPart += "0";
    fractionalPart = fractionalPart.replace(/^0+/g, '');
    var value = BigInteger.valueOf(parseInt(integralPart));
    value = value.multiply(BigInteger.valueOf(100000000));
    value = value.add(BigInteger.valueOf(parseInt(fractionalPart)));
    return value;
  },
  /**
  * Calculate RIPEMD160(SHA256(data)).
  *
  * Takes an arbitrary byte array as inputs and returns the hash as a byte
  * array.
  */
  sha256ripe160: function (data) {
    return Crypto.RIPEMD160(Crypto.SHA256(data, { asBytes: true }), { asBytes: true });
  },
  // double sha256
  dsha256: function (data) {
    return Crypto.SHA256(Crypto.SHA256(data, { asBytes: true }), { asBytes: true });
  },
  // duck typing method
  hasMethods: function(obj /*, method list as strings */){
    var i = 1, methodName;
    while((methodName = arguments[i++])){
      if(typeof obj[methodName] != 'function') {
        return false;
      }
    }
    return true;
  }
};
