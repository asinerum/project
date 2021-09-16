////////////////////////////////////////////////////////////
const hi_alert_data = 'WRONG INPUT DATA';
const hi_prompt_fee = 'GAS COST ESTIMATION';
const hi_prompt_chk = 'PASSWORD MUST CONTAIN AT LEAST 6 LOWERCASE/UPPERCASE/NUMERIC CHARACTERS';
const hi_prompt_pwd = 'PLEASE TYPE "OK" AND YOUR PASSWORD"S FIRST LETTER';
const hi_prompt_err = 'SOMETHING WENT WRONG PLEASE CHECK YOUR BALANCE';
const hi_prompt_rct = 'TRANSACTION HAS BEEN MADE BUT GETS NO RECEIPT';
////////////////////////////////////////////////////////////
const hi_alert_nologin = 'YOU HAVE NOT UNLOCKED YOUR ACCOUNT';
const hi_alert_nonereg = 'YOU ARE EXPIRED USER OR YOU ARE NOT REGISTERED';
const hi_alert_userban = 'YOU HAVE BEEN BANNED BY SYSTEM ADMIN/MODERATOR';
const hi_alert_usernot = 'YOU ARE NOT ALLOWED TO PERFORM THIS ACTION';
////////////////////////////////////////////////////////////
const hi_alert_notbuys = 'TOKEN BUYING NOT ALLOWED AT THIS TIME';
const hi_alert_notexch = 'TOKEN EXCHANGE NOT ALLOWED AT THIS TIME';
const hi_alert_notsell = 'TOKEN SELLING NOT ALLOWED AT THIS TIME';
const hi_alert_nottran = 'TOKEN TRANSFER NOT ALLOWED AT THIS TIME';
////////////////////////////////////////////////////////////
const hi_alert_notregs = 'YOU ARE REGISTERED USER PLEASE CLICK OK TO CONTINUE';
const hi_alert_yestran = 'PLEASE STOP TOKEN TRANSFER ALLOWANCE';
////////////////////////////////////////////////////////////
const hi_alert_address = 'ADDRESS INVALID';
const hi_alert_badpair = 'VALUE PAIR INVALID';
const hi_alert_balance = 'AMOUNT INVALID OR BALANCE NOT ENOUGH';
const hi_alert_lessval = 'AMOUNT INVALID';
const hi_alert_moreval = 'BALANCE NOT ENOUGH';
const hi_alert_noether = 'YOU HAVE NO ETHERS TO MAKE TRANSACTIONS';
////////////////////////////////////////////////////////////
const hi_alert_ethfund = 'ETH-PAY-FUND NOT ENOUGH OR AMOUNT INVALID';
const hi_alert_xutfund = 'XUT-MAX-BUY VOLUME EXCEEDED OR AMOUNT INVALID';
////////////////////////////////////////////////////////////
const hi_alert_lessamt = 'AMOUNT IS LESS THAN SYSTEM FEE';
const hi_alert_moreamt = 'AMOUNT IS HIGHER THAN YOUR BALANCE';
const hi_alert_nocheck = 'CHECKS FAILED PLEASE TRY LATER';
const hi_alert_noindex = 'ITEM INDEX IS OUT OF BOND';
////////////////////////////////////////////////////////////
const hi_alert_kstcopy = 'THE TEXT WAS COPIED';
////////////////////////////////////////////////////////////
﻿////////////////////////////////////////////////////////////
const hi_prompt_setpwd = 'PLEASE ENTER AND KEEP A PASSWORD TO CREATE AND UNLOCK YOUR ACCOUNT';
const hi_prompt_impkey = 'YOU ARE ABOUT TO IMPORT AN EXISTING ACCOUNT WITH ITS PRIVATE KEY';
////////////////////////////////////////////////////////////
const hi_alert_savepwd = 'PLEASE KEEP YOUR PRIVATE KEY AND PASSWORD ABSOLUTELY SECRET FROM ANYBODY';
const hi_alert_savekey = 'DON"T FORGET TO SAVE YOUR KEYSTORE FOR FUTURE USE';
const hi_alert_imptkey = 'ACCOUNT HAS BEEN IMPORTED PLEASE SAVE YOUR KEYSTORE';
////////////////////////////////////////////////////////////
const rem_createnewkey = 'ETHEREUM ADDRESS';
const rem_ncprivatekey = '';
const rem_imprivatekey = '';
const rem_exprivatekey = '';
////////////////////////////////////////////////////////////
﻿////////////////////////////////////////////////////////////
const hi_warn_authorsdoc = 'Warning: a document stores partial content outside blockchains';
const hi_warn_publicnote = 'Warning: a note costs much less but cannot attach money button';
const hi_warn_addrdomain = 'Warning: a domain has its expiry date that requires paying fee';
const hi_warn_pubprofile = 'Warning: a user public profile cannot be modified once created';
const hi_warn_obdraftdoc = 'Warning: a draft stores its whole content outside blockchains';
////////////////////////////////////////////////////////////
const hi_alert_nocookies = 'THERE IS NO DATA STORED IN COOKIES';
const hi_alert_cookieset = 'THE DATA IS BEING STORED IN COOKIES';
const hi_alert_cookiedel = 'THE DATA HAS BEEN REMOVED FROM COOKIES';
////////////////////////////////////////////////////////////
﻿////////////////////////////////////////////////////////////
const CANCELED='CANCELED\t';
const CHECKED='CHECKED\t';
const DONE='DONE\t';
const ERROR='ERROR\t';
const FAILED='FAILED\t';
const FOUND='FOUND\t';
const INVALID='INVALID\t';
const OK='OK\t';
const UNCHECKED='UNCHECKED\t';
const UNKNOWN='UNKNOWN\t';
const ALERTS={en:{CANCELED,CHECKED,DONE,ERROR,FAILED,FOUND,INVALID,OK,UNCHECKED,UNKNOWN}};
////////////////////////////////////////////////////////////
const DOCGASPRICE='<a href="https://asinerum.github.io/project/doc/ethereum/gasprice" target="_blank">GAS PRICE</a>';
const DOCGASLIMIT='<a href="https://asinerum.github.io/project/doc/ethereum/gaslimit" target="_blank">GAS LIMIT</a>';
const DOCETXNONCE='<a href="https://asinerum.github.io/project/doc/ethereum/nonce" target="_blank">TX NONCE</a>';
const DOCBTCINPUT='<a href="https://asinerum.github.io/project/doc/bitcoin/inputs" target="_blank">INPUT DATA</a>';
const DOCBTCTXFEE='<a href="https://asinerum.github.io/project/doc/bitcoin/fee" target="_blank">FEE</a>';
////////////////////////////////////////////////////////////
const CAPCLASSCOIN='<span class="coin">COIN</span>';
const CAPNODISCLOS='<span class="textwarn">without disclosing</span>';
const CAPBIP38EKEY='<span class="textwarn">bip38 encrypted key</span>';
const LNKITLICENSE='<a href="https://asinerum.github.io/project/LICENSE" target="_blank">MIT LICENSE</a>';
const LNKBTCPUSHTX='<a href="https://www.blockchain.com/btc/pushtx" target="_blank">broadcasting services</a>';
const LNKETHPUSHTX='<a href="https://etherscan.io/pushtx" target="_blank">broadcasting services</a>';
const LNKGITWALLET='<a href="https://asinerum.github.io/project/wallet" target="_blank">github repository</a>';
const LNKBTCWALLET='<a href="https://api.blockcypher.com/v1/btc/main/addrs/1CXsNnd148Dv7Nj9p4oTBYkVJ8NDvghac5" target="_blank">transaction input</a>';
const LNKETHWALLET='<a href="https://etherscan.io/address/0x537ca62B4c232af1ef82294BE771B824cCc078Ff" target="_blank">transactions listing</a>';
const LNKETHGASFEE='<a href="https://etherscan.io/gastracker" target="_blank">transaction cost</a>';
const LNKUSERNONCE='<a href="https://kb.myetherwallet.com/en/transactions/what-is-nonce" target="_blank">transaction nonce</a>';
const LNKEXOFFLINE='<a href="https://asinerum.github.io/project/raweth">offline approach</a>';
const LNKBXOFFLINE='<a href="https://asinerum.github.io/project/rawbit">offline approach</a>';
const NOTEEXGASFEE='EXCLUDING GAS FEE';
////////////////////////////////////////////////////////////
const LABELS={en:{
_button_AuthAccExp: `EXPORT PRIVATE KEY`,
_button_AuthAccImp: `IMPORT PRIVATE KEY`,
_button_AuthAccNew: `CREATE NEW`,
_button_AuthCokDel: `DEL COOKIE/`,
_button_AuthCokGet: `GET COOKIE/`,
_button_AuthCokSet: `SET COOKIE/`,
_button_AuthCpyKst: `COPY THIS/`,
_button_AuthCpyExp: `COPY THIS KEY`,
_button_AuthCpyKey: `COPY THIS KEY`,
_button_AuthCpySig: `COPY THIS SIGNATURE`,
_button_AuthKstDec: `UNLOCK`,
_button_AuthPayBnb: `SEND BNB`,
_button_AuthPayEtc: `SEND ETC`,
_button_AuthPayEth: `SEND ${CAPCLASSCOIN}`,
_button_AuthPayXut: `SEND XUT`,
_button_AuthSigSig: `SIGN`,
_button_AuthSigVer: `VERIFY`,
_button_BipDecrypt: `DECRYPT`,
_button_BipEncrypt: `ENCRYPT`,
_button_BipeAccNew: `CREATE`,
_button_BuyOfr: `BUY NOW`,
_button_DisBuy: `STOP THIS REQUEST`,
_button_DisSel: `STOP THIS OFFER`,
_button_EthXut: `BUY NOW`,
_button_GameDocSet: `PUBLISH`,
_button_GameGoUser: `OWNER ADDRESS`,
_button_GameResult: `GAME RESULT`,
_button_GameTxAddr: `GAME ADDRESS`,
_button_GameTxPlay: `PAY TO PLAY`,
_button_GameTxView: `GAME HASH`,
_button_GetBuy: `BUYING REQUEST#`,
_button_GetOfr: `SELLER OFFER#`,
_button_GetReq: `BUYER REQUEST#`,
_button_GetSel: `SELLING OFFER#`,
_button_GoUser: `USER ADDRESS`,
_button_RawCopyApi: `COPY PROXY LINK`,
_button_RawCopyCmd: `COPY CURL COMMAND`,
_button_RawCopyHex: `COPY HEX DATA`,
_button_RawPushBtc: `GET CURL COMMAND`,
_button_RawPushEth: `GET PROXY LINK`,
_button_RawTxDoEth: `GENERATE TXHEX`,
_button_SelReq: `SELL NOW`,
_button_SetBuy: `POST THIS REQUEST`,
_button_SetFee: `SET MEMBER FEE`,
_button_SetSel: `POST THIS OFFER`,
_button_SysReg: `PAY TO REGISTER`,
_button_UserAaAddr: `ASSIGN`,
_button_UserAAlias: `ADDRESS ALIAS`,
_button_UserDocSet: `POST`,
_button_UserDomain: `DOMAIN NAME`,
_button_UserDomReg: `REGISTER`,
_button_UserGetDom: `GET DOMAIN`,
_button_UserGetPro: `GET PROFILE`,
_button_UserGoUser: `ADDRESS OR ALIAS`,
_button_UserPayEth: `SEND ${CAPCLASSCOIN}`,
_button_UserPayXut: `SEND XUT`,
_button_UserSetDom: `SET DOMAIN`,
_button_UserSetPro: `SET PROFILE`,
_button_UserTxView: `TRANSACTION HASH`,
_button_XutXut: `SELL NOW`,
_header_account: `CREATING OR IMPORTING A PRIVATE KEY`,
_header_alias: `ASSIGNING AN ADDRESS ALIAS`,
_header_allow: `XUTENG TOKEN TRANSFER PERMISSION`,
_header_author: `USER INFORMATION AND STATS`,
_header_BipAccount: `CREATING A PERMANENT ACCOUNT`,
_header_BipDecrypt: `DECRYPTING AN ENCRYPTED KEY`,
_header_BipEncrypt: `ENCRYPTING AN ORIGINAL PRIVATE KEY`,
_header_BipProject: `APPLICATION DESCRIPTION`,
_header_BipUnlock: `SELECTING NETWORK AND DECRYPTING KEYSTORE`,
_header_BipDecode: `UNLOCKING PAPER WALLET`,
_header_BipPrereq: `BEFORE YOU BEGIN`,
_header_BipTarget: `APPLICATION MISSION`,
_header_RawTxData: `GENERATING TRANSACTION DATA`,
_header_RawTxInput: `ENTERING TRANSACTION INPUTS`,
_header_buy: `DIRECTLY BUYING XUTENG TOKENS FROM SYSTEM FUND`,
_header_buyfrom: `BUYING XUTENG TOKENS FROM ANOTHER USER`,
_header_buying: `REVIEWING A BUYING REQUEST`,
_header_copyright: `(C)2019 ASINERUM INTERNATIONAL PROJECT`,
_header_cost: `${CAPCLASSCOIN} TRANSACTION COST`,
_header_costBnb: `BNB TRANSACTION COST`,
_header_costEtc: `ETC TRANSACTION COST`,
_header_doc: `POSTING A VALUED DOCUMENT`,
_header_docgame: `PUBLISHING A XUTENG GAME`,
_header_domain: `REGISTERING A DOMAIN NAME`,
_header_game: `GAME INFORMATION`,
_header_gamer: `GAME OWNER INFORMATION AND STATS`,
_header_keystore: `SELECTING NETWORK AND UNLOCKING KEYSTORE`,
_header_profile: `PERSONAL PROFILE AND DOMAIN`,
_header_rate: `XUTENG TOKEN OFFICIAL EXCHANGE RATE`,
_header_register: `REGISTERING AS A LEVELED USER`,
_header_review: `REVIEWING A TRANSACTION`,
_header_reviewgame: `REVIEWING A PUBLISHED GAME`,
_header_sell: `DIRECTLY SELLING XUTENG TOKENS TO SYSTEM FUND`,
_header_selling: `REVIEWING A SELLING OFFER`,
_header_sellto: `SELLING XUTENG TOKENS TO ANOTHER USER`,
_header_sender: `PERSONAL INFORMATION AND STATS`,
_header_sendeth: `PERSONAL ${CAPCLASSCOIN} BALANCE`,
_header_sendBnb: `PERSONAL BNB BALANCE`,
_header_sendEtc: `PERSONAL ETC BALANCE`,
_header_sign: `SIGNING AND VERIFYING A MESSAGE`,
_header_stats: `XUTENG TOKEN MARKETPLACE STATS`,
_header_system: `XUTENG TOKEN SYSTEM OVERVIEWS`,
_header_tobuy: `REQUESTING TO BUY XUTENG TOKENS`,
_header_tosell: `OFFERING TO SELL XUTENG TOKENS`,
_header_transfer: `PERSONAL XUTENG BALANCE`,
_header_user: `ANOTHER USER INFORMATION AND STATS`,
_header_usereth: `SENDING ${CAPCLASSCOIN} WITH NOTE`,
_header_userxut: `SENDING XUTENG WITH NOTE`,
_label_AllowToBuy: `USER CAN BUY`,
_label_AllowToSel: `USER CAN SELL`,
_label_AllowToTrs: `USER TRANSFER`,
_label_AllowToTrx: `USER EXCHANGE`,
_label_AuthAccKey: `NEW PRIVATE KEY`,
_label_AuthAdrBnb: `BNB RECEIVER`,
_label_AuthAdrEtc: `ETC RECEIVER`,
_label_AuthAdrEth: `${CAPCLASSCOIN} RECEIVER`,
_label_AuthAdrXut: `XUT RECEIVER`,
_label_AuthGasMax: `${DOCGASLIMIT}`,
_label_AuthGasWei: `${DOCGASPRICE}`,
_label_AuthKstNet: `NETWORK`,
_label_AuthKstPwd: `PASSWORD`,
_label_AuthKstRpc: `RPC SERVER`,
_label_AuthKstore: `V3 KEYSTORE`,
_label_AuthorAddr: `ETHEREUM WALLET`,
_label_AuthSigMsg: `MESSAGE`,
_label_AuthSigUsr: `SIGNATORY ADDRESS`,
_label_AuthSumBnb: `BNB BALANCE`,
_label_AuthSumEtc: `ETC BALANCE`,
_label_AuthSumEth: `${CAPCLASSCOIN} BALANCE`,
_label_AuthSumXut: `XUT BALANCE`,
_label_BipAdAbout: `ABOUT`,
_label_BipAdPrBtc: `BTC DONATION`,
_label_BipAdPrEth: `ETH & BNB DONATION`,
_label_BipAdPrLtc: `LTC DONATION`,
_label_BipAdPrDsh: `DASH DONATION`,
_label_BipAdPrDog: `DOGE DONATION`,
_label_BipAdRight: `COPYRIGHT`,
_label_BipAdUsage: `USAGE`,
_label_BipCaution: `CAUTION`,
_label_BipeAccBtc: `BITCOIN WALLET`,
_label_BipeAccEth: `ETHEREUM WALLET`,
_label_BipeAccHex: `ETH PRIVATE KEY`,
_label_BipeAccKey: `BTC PRIVATE KEY`,
_label_BipeDecBip: `BIP38 ENCRYPTED KEY`,
_label_BipeDecPwd: `PASSCODE TO DECRYPT`,
_label_BipeEncBip: `BIP38 ENCRYPTED KEY`,
_label_BipeEncPwd: `PASSCODE TO ENCRYPT`,
_label_BipeExpBtc: `BITCOIN WALLET`,
_label_BipeExpEth: `ETHEREUM WALLET`,
_label_BipeExpHex: `ETH PRIVATE KEY`,
_label_BipeExpKey: `BTC PRIVATE KEY`,
_label_BipeOldBtc: `BITCOIN WALLET`,
_label_BipeOldEth: `ETHEREUM WALLET`,
_label_BipeOldKey: `BTC/ETH PRIVATE KEY`,
_label_BipPrereqHead: `!`,
_label_BipTargetHead: `!`,
_label_BipWarning: `WARNING`,
_label_Buying0Xut: `YOUR XUT BALANCE`,
_label_Buying1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Buying2Adr: `SELLER ADDRESS`,
_label_Buying4Tpe: `EXCHANGE RATE`,
_label_Buying5Dep: `SELLER DEPOSIT`,
_label_Buying6Num: `SYSTEM COUNT`,
_label_Buying7Get: `XUT TO BUY`,
_label_Buying8Pay: `${CAPCLASSCOIN} TO PAY`,
_label_Counts0Buy: `REQUESTS TO BUY`,
_label_Counts1Sel: `OFFERS TO SELL`,
_label_GameDocDat: `GAME HEADER`,
_label_GameDocMax: `MAXIMUM BET`,
_label_GameDocMin: `MINIMUM BET`,
_label_GameDocFrm: `GAME FORMAT`,
_label_GameDocRew: `ODDS/REWARDS`,
_label_GameDocUtc: `GAME CLOSING TIME`,
_label_GameDocUts: `GAME TIMESTAMP`,
_label_GameTxAddr: `GAME ADDRESS`,
_label_GameTxData: `GAME DATA`,
_label_GameTxHash: `GAME HASH`,
_label_GameTxInfo: `SPECIAL INFO`,
_label_GameTxNote: `SYSTEM WARNING`,
_label_GameTxOArr: `PLAY OPTIONS`,
_label_GameTxOpts: `PLAY OPTION`,
_label_Ofrsel0Xut: `YOUR XUT BALANCE`,
_label_Ofrsel1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Ofrsel1Tpe: `EXCHANGE RATE`,
_label_Ofrsel2Cnt: `POSTED OFFERS`,
_label_Ofrsel2Dep: `XUT DEPOSITED`,
_label_Ofrsel3Fee: `POSTING FEE`,
_label_Ofrsel4Ask: `EXPECTED RATE`,
_label_Ofrsel5Pay: `XUT TO DEPOSIT`,
_label_Ofrsel6Rec: `${CAPCLASSCOIN} TO RECEIVE`,
_label_RawBxCAddr: `CHANGE ADDRESS`,
_label_RawBxChain: `BITCOIN CHAIN ID`,
_label_RawBxInput: `ACCOUNT ${DOCBTCINPUT}`,
_label_RawBxPrice: `TRANSACTION ${DOCBTCTXFEE}`,
_label_RawTxChain: `ETHEREUM CHAIN ID`,
_label_RawTxEther: `AMOUNT TO BE SENT`,
_label_RawTxLimit: `${DOCGASLIMIT} USAGE`,
_label_RawTxNonce: `ACCOUNT ${DOCETXNONCE}`,
_label_RawTxOpMsg: `MESSAGE: OPTIONAL`,
_label_RawTxPrice: `${DOCGASPRICE} IN GWEI`,
_label_RawTxRecvr: `RECIPIENT ADDRESS`,
_label_RawTxToken: `BCYPHER API TOKEN`,
_label_Reqbuy0Xut: `YOUR XUT BALANCE`,
_label_Reqbuy1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Reqbuy1Tpe: `EXCHANGE RATE`,
_label_Reqbuy2Cnt: `POSTED REQUESTS`,
_label_Reqbuy2Dep: `${CAPCLASSCOIN} DEPOSITED`,
_label_Reqbuy3Fee: `POSTING FEE`,
_label_Reqbuy4Ask: `EXPECTED RATE`,
_label_Reqbuy5Rec: `XUT TO RECEIVE`,
_label_Reqbuy6Pay: `${CAPCLASSCOIN} TO DEPOSIT`,
_label_Seling0Xut: `YOUR XUT BALANCE`,
_label_Seling1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Seling2Adr: `BUYER ADDRESS`,
_label_Seling4Tpe: `EXCHANGE RATE`,
_label_Seling5Dep: `BUYER DEPOSIT`,
_label_Seling6Num: `SYSTEM COUNT`,
_label_Seling7Pay: `XUT TO SELL`,
_label_Seling8Get: `${CAPCLASSCOIN} TO GET`,
_label_Sender0Buy: `REQUESTS TO BUY`,
_label_Sender1Sel: `OFFERS TO SELL`,
_label_Sender2Msg: `MESSAGES`,
_label_Sender3Rol: `ROLE`,
_label_Sender4Rnk: `RANK`,
_label_Sender5Lvl: `LEVEL`,
_label_Sender6Mem: `MEMBERS`,
_label_Sender7Fee: `MEMBER FEE`,
_label_Sys0TpeSel: `SELLING RATE`,
_label_Sys1TpeBuy: `BUYING RATE`,
_label_Sysbuy0Xut: `YOUR XUT BALANCE`,
_label_Sysbuy1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Sysbuy2Tpe: `EXCHANGE RATE`,
_label_Sysbuy3Max: `XUT MAX BUY`,
_label_Sysbuy4Get: `XUT TO BUY`,
_label_Sysbuy5Pay: `${CAPCLASSCOIN} TO PAY`,
_label_Sysreg0Xut: `YOUR XUT BALANCE`,
_label_Sysreg1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Sysreg2Lvl: `YOUR CURRENT LEVEL`,
_label_Sysreg3Exp: `EXPIRATION TIME`,
_label_Sysreg4Fee: `REGISTER FEE`,
_label_Sysreg5Amt: `REGISTER AMOUNT`,
_label_Syssel0Xut: `YOUR XUT BALANCE`,
_label_Syssel1Eth: `YOUR ${CAPCLASSCOIN} BALANCE`,
_label_Syssel2Tpe: `EXCHANGE RATE`,
_label_Syssel3Max: `${CAPCLASSCOIN} PAY FUND`,
_label_Syssel4Pay: `XUT TO SELL`,
_label_Syssel5Get: `${CAPCLASSCOIN} TO GET`,
_label_Tok0IdName: `NAME`,
_label_Tok1Symbol: `SYMBOL`,
_label_Tok2Supply: `TOTAL SUPPLY`,
_label_Tok3SysXut: `TOKENS FOR SALE`,
_label_Tok4SysEth: `${CAPCLASSCOIN} BALANCE`,
_label_UserAaAddr: `ASSIGNED ADDRESS`,
_label_UserAaHash: `ALIAS HASH`,
_label_UserAaTxhs: `ACTION HASH`,
_label_UserAaType: `ADDRESS TYPE`,
_label_UserAaUser: `OWNER`,
_label_UserDocDat: `NAME OR HEADER`,
_label_UserDocFrm: `DOC FORM`,
_label_UserDocMax: `MAX DEPOSIT`,
_label_UserDocMin: `MIN DEPOSIT`,
_label_UserDocRew: `REWARDS`,
_label_UserDocTyp: `DOC TYPE`,
_label_UserDocUtc: `DOCUMENT TIME`,
_label_UserDocUts: `DOC TIMESTAMP`,
_label_UserDomain: `DOMAIN NAME`,
_label_UserDomEth: `${CAPCLASSCOIN} TO PAY`,
_label_UserDomIpa: `IP`,
_label_UserDomRef: `NOTE`,
_label_UserDrAddr: `IP`,
_label_UserDrExpt: `EXPIRATION`,
_label_UserDrNote: `NOTE`,
_label_UserDrUser: `OWNER`,
_label_UserExAddr: `OWNER WALLET`,
_label_UserExFile: `USER PROFILE`,
_label_UserExHome: `USER DOMAIN`,
_label_UserPsName: `SCREEN NAME`,
_label_UserPsText: `FILE`,
_label_UserPstyle: `STYLE`,
_label_UserRefEth: `NOTE TO RECEIVER`,
_label_UserRefXut: `NOTE TO RECEIVER`,
_label_UserTgtXut: `RECEIVER WALLET`,
_label_UserTgtEth: `RECEIVER WALLET`,
_label_UserTxAddr: `STORAGE ADDRESS`,
_label_UserTxData: `SENDER DATA`,
_label_UserTxNote: `SENDER NOTE`,
_label_Wallet1Xut: `XUT BALANCE`,
_label_Wallet2Eth: `${CAPCLASSCOIN} BALANCE`,
_label_Wallet3Req: `REQUESTS TO BUY`,
_label_Wallet4Ofr: `OFFERS TO SELL`,
_label_Wallet5Rol: `ROLE`,
_label_Wallet6Rnk: `RANK`,
_label_Wallet7Lvl: `LEVEL`,
_label_Wallet8Mem: `MEMBERS`,
_label_Wallet9Fee: `MEMBER FEE`,
_note_BipAccount: `BE SURE THAT NOBODY CAN SEE YOUR SCREEN THEN CLICK CREATE`,
_note_BipAdAbout: `CLIENT SIDE PAPER WALLET GENERATOR`,
_note_BipAdRight: `FREE TO USE UNDER ${LNKITLICENSE}`,
_note_BipAdUsage: `PAGES SHOULD BE SAVED AND SEEN OFFLINE`,
_note_BipCaution: `PRIVATE KEYS MUST BE KEPT SAFE AND SECRET`,
_note_BipEncrypt: `TIPS: ENCRYPTED KEY SHOULD BE PRINTED TO PAPER`,
_note_BipBxAbout: `OFFLINE BITCOIN RAW TRANSACTION GENERATOR`,
_note_BipExAbout: `OFFLINE ETHEREUM RAW TRANSACTION GENERATOR`,
_note_BipTxAbout: `INDEPENDENT RAW TRANSACTION GENERATOR`,
_note_BipWarning: `PASSCODE CAN BE NEITHER RESTORED NOR RESET`,
_note_BuyOfr: `${NOTEEXGASFEE}`,
_note_DisBuy: `${NOTEEXGASFEE}`,
_note_DisSel: `${NOTEEXGASFEE}`,
_note_EthXut: `${NOTEEXGASFEE}`,
_note_BtcAbout: `This applet has been created for bitcoin professionals to send bitcoins [with change amount sent back to sender] from their paper wallet to another wallet ${CAPNODISCLOS} the wallet's private key by generating transaction's raw data and push it over bitcoin network using free ${LNKBTCPUSHTX};`,
_note_EthAbout: `This applet has been created for ethereum professionals to send ethers or erc-tokens from their paper wallet to another wallet ${CAPNODISCLOS} the wallet's private key by generating transaction's raw data and push it over ethereum network using free ${LNKETHPUSHTX};`,
_note_BtcBegin: `First, you do be sure that you have your own paper wallet already with its ${CAPBIP38EKEY} and the very decrypting passcode; In case of having none, you are suggested to try our tool at ${LNKGITWALLET};<br/>Second, a stable internet connection is required to get ${LNKBTCWALLET}, otherwise you may take the ${LNKBXOFFLINE};`,
_note_EthBegin: `First, you do be sure that you have your own paper wallet already with its ${CAPBIP38EKEY} and the very decrypting passcode; In case of having none, you are suggested to try our tool at ${LNKGITWALLET};<br/>A stable internet connection is required to get ${LNKETHGASFEE} and ${LNKUSERNONCE}, otherwise you may take the ${LNKEXOFFLINE};`,
_note_GameDocSet: `${NOTEEXGASFEE}`,
_note_GameTxNote: `THIS GAME IS OWNED AND MANAGED BY ITS VERY OWNER<br/>SO PEOPLE PLEASE BE AWARE OF SCAMMING BEHAVIOURS`,
_note_SelReq: `${NOTEEXGASFEE}`,
_note_SetBuy: `${NOTEEXGASFEE}`,
_note_SetSel: `${NOTEEXGASFEE}`,
_note_SysReg: `${NOTEEXGASFEE}`,
_note_UserAaAddr: `${NOTEEXGASFEE}`,
_note_UserDocSet: `${NOTEEXGASFEE}`,
_note_UserDomReg: `${NOTEEXGASFEE}, USERS ONLY`,
_note_UserSetDom: `${NOTEEXGASFEE}`,
_note_UserSetPro: `${NOTEEXGASFEE}`,
_note_XutXut: `${NOTEEXGASFEE}`,
}}//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const hi_alert_metamasks = 'YOU NEED METAMASK PLUGIN TO RUN THIS APP';
const hi_alert_ismainnet = 'THE MAIN ETHEREUM NETWORK IS BEING CONNECTED';
const hi_alert_nomainnet = 'PLEASE SWITCH TO THE MAIN NETWORK USING METAMASK PLUGIN';
const hi_alert_accdenied = 'YOU HAVE DENIED CONNECTION TO ETHEREUM NETWORK VIA METAMASK';
const hi_alert_checkcost = 'PLEASE CHECK THE GAS BEFORE CONFIRMING TRANSACTION';
const hi_alert_netchange = 'ETHEREUM NETWORK HAS JUST BEEN CHANGED';
////////////////////////////////////////////////////////////
