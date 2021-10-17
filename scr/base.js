////////////////////////////////////////////////////////////
const BXCHAINS={/*scan:/address/;api:/addrs/*/
bitcoin:{version:0x00,pkprefix:0x80,coin:'BTC',rpcs:'',scan:'https://live.blockcypher.com/btc/',api:'https://api.blockcypher.com/v1/btc/main/',push:'https://live.blockcypher.com/btc/pushtx'},
testnet:{version:0x6F,pkprefix:0xEF,coin:'TEST',rpcs:'',scan:'https://live.blockcypher.com/btc-testnet/',api:'https://api.blockcypher.com/v1/btc/test3/',push:'https://live.blockcypher.com/btc-testnet/pushtx'},
dogecoin:{version:0x1E,pkprefix:0x9E,coin:'DOGE',rpcs:'',scan:'https://live.blockcypher.com/doge/',api:'https://api.blockcypher.com/v1/doge/main/',push:'https://live.blockcypher.com/doge/pushtx'},
dashcoin:{version:0x4C,pkprefix:0xCC,coin:'DASH',rpcs:'',scan:'https://live.blockcypher.com/dash/',api:'https://api.blockcypher.com/v1/dash/main/',push:'https://live.blockcypher.com/dash/pushtx'},
litecoin:{version:0x30,pkprefix:0xB0,coin:'LTC',rpcs:'',scan:'https://live.blockcypher.com/ltc/',api:'https://api.blockcypher.com/v1/ltc/main/',push:'https://live.blockcypher.com/ltc/pushtx'},
};
////////////////////////////////////////////////////////////
const EXCHAINS={
mainnet:{coin:'ETH',ncid:1,rpcs:'',scan:'https://etherscan.io/',api:'https://api.etherscan.io/api?',push:'https://etherscan.io/pushtx'},
rinkeby:{coin:'RIN',ncid:4,rpcs:'',scan:'https://rinkeby.etherscan.io/',api:'https://api-rinkeby.etherscan.io/api?',push:'https://rinkeby.etherscan.io/pushtx'},
ropsten:{coin:'ROP',ncid:3,rpcs:'',scan:'https://ropsten.etherscan.io/',api:'https://api-ropsten.etherscan.io/api?',push:'https://ropsten.etherscan.io/pushtx'},
binance:{coin:'BNB',ncid:56,rpcs:'https://bsc-dataseed.binance.org/',scan:'https://www.bscscan.com/',api:'https://api.bscscan.com/api?',push:'https://bscscan.com/pushtx'},
classic:{coin:'ETC',ncid:61,rpcs:'https://www.ethercluster.com/etc/',scan:'https://etcblockexplorer.com/',api:'',push:''},
};
////////////////////////////////////////////////////////////
const USDC={
mainnet:{ncid:1,addr:'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',rpcs:'https://bsc-dataseed.binance.org/',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'',rpcs:'https://www.ethercluster.com/etc/',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const USDT={
mainnet:{ncid:1,addr:'0xdac17f958d2ee523a2206206994597c13d831ec7',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0x55d398326f99059ff775485246999027b3197955',rpcs:'https://bsc-dataseed.binance.org/',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'',rpcs:'https://www.ethercluster.com/etc/',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const EXET={
mainnet:{ncid:1,addr:'0x28e5fe0ad29597dc290c055eef59c4f582a7a056',hash:'0x3334fb84cfb2977e743a6c0b54b4a10e2f457b0773e2ba13cce2b4d4c23de367',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0xE9d7FDDF9F36BD1cD2a77B31a91cD069ef012Ab0',hash:'0x91b258a158a68f8f995c7ef3a1447bd2476b5aabd5f822faede996390681bfd3',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0xd10488C78a0c46BE21aF749e0c0F102AF9D0d926',hash:'0x46ce74e52333d2fd4af58f4f825cccd9cdf187a8af462b79f519b7d4a0cc848c',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0xDEA0c8bAF81975876F4AF9FC2a1fC4F3A67e039B',hash:'0xbfee2c155e1ff224bdcab10fe8c492ba8fef5cf98c0d770ec07e0d2165c6da09',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'0x18C7F74cA7C4b9DAf0cCe931e7eF0c0BA9788576',hash:'0x3aec175a0cad6bb05b6aa087872cb456da0a87dd85327ea78daed8191c6e8d47',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const LEFT={
mainnet:{ncid:1,addr:'0x4244f169be509aa6f0a49e537d1bd89800451264',hash:'0x3754245163677f324edd1173f5ef453bce5f86dbce4f4f52a84fd98ffa0f1dd1',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0xf8c308CF496Bf9323B671b485F555882a3b4d9E7',hash:'0xe9d6c1f5b3a7f0e297349a011f64bd04ef89d961d6fc08ba3d185821249ae59d',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0x3D6C8E2C2ae17726386231f99169C9d69a20F104',hash:'0x5b12d71d74038533f6461e9438a77bad5211fb7da1a299cf20948428a9a3ec30',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0x050010e67858E4B71f6D79359ad950e614863e0d',hash:'0x06d526444424671aeff0d257ee1254bd4a2cda96ee73af965678415dd5372df7',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'0xDEA0c8bAF81975876F4AF9FC2a1fC4F3A67e039B',hash:'0xb3df5f5695a4c0bf5b33dc86ec95d5db504d2031916a4f14e9483603e5381189',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const NEMT={
mainnet:{ncid:1,addr:'0x208871E7f29C0C0e131Dc275f1FCfc9e73C2b06e',hash:'0xe7a06b31a4ea68e0611fc28bd6a176d1179b15a4ac4a056430ff2c89bd80700b',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x3D6C8E2C2ae17726386231f99169C9d69a20F104',hash:'0x0bf18f0780882431aa0ddd5a6929d6654a5dbe00b7ba2dc6aef1849442856770',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0x45EbbFb3b3DFeb2e1DeD3429C4E04aA31B18a9e1',hash:'0x0a298e1e745ca09513d62908ef60cdf843cf7213f33a134770574a5b235c9a9a',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0xE4Dd3e84CC0464D0E4eb65a13D70367Dc0F03730',hash:'0x6cf6371991c55b04f0d299527c60834d47addd4fd6b8296e3702cd300f3ba561',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},//V2
classic:{ncid:61,addr:'0x050010e67858E4B71f6D79359ad950e614863e0d',hash:'0xe63a60272577195cf05bbef7a30b736597e4255ff34288d55aa80d58f8fee610',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const GEMT={
mainnet:{ncid:1,addr:'0x4f8e54e2e840561e5aa8a296ad5f7b0ae18e6eff',hash:'0xadf8c72399b53b3486b665798b6599109a7c6ed33593d65c0354504d0bac92c8',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x70538eF05E51CdA13E7Cc393A550838eB137688E',hash:'0x17c98761e4122b545bbd8459fcd5d76ce55f19fdf9819f6347cb9ebac146cc68',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0xB2f5036F69E05B030688Ce065a98fD0e6cF3f40a',hash:'0x106de1840dccc8c6cd158bf6a976ba0007dd31ea0d62e479aad162b036bb867e',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0xFABd0b52fA0b096254e3B420523192638e1B28fC',hash:'0x0a15c6fd5406bd9cc2115796fbf72c9215a1073f31efb7ea7e1c7358ab839ea0',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},//V2
classic:{ncid:61,addr:'0xc9dDF5d5adBA8711F106953B97987B02F8EAe5e4',hash:'0xad8c60417f5266e28906fdc6a5b2dc050abfe75a999623153589fbd2a0d721a4',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const FEMT={
mainnet:{ncid:1,addr:'0x17634BDcC40c6Bad899D4bB0d825641ec8370f1D',hash:'0xc386bd3cd946c0b5f454d94ec671ba2fd33840889445fb165c158c13ebe9b328',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x45EbbFb3b3DFeb2e1DeD3429C4E04aA31B18a9e1',hash:'0xcdaa4b22fa7487daad7f49c5f7daed2f41e2442cc0ad52405a931631ddb6e8a4',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0x3E86E647FC2BE17266071f8047b8B1c755D589fe',hash:'0xa6983f99fc86c1d55a3f022f465d083c3d31872db2be35a8b0062f2314664b87',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0xd827007Dda5AdEC1548171945d639ac156CfAd59',hash:'0xe991dc63c5317ccb3eb9c7cc05ecfe7ea1f820cf8955ad593b222d1a528026e4',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'0x872Bc37697f45526fc0C960E19654c8714dB6957',hash:'0xd941ac6e3d21cbdb102c093c07df0d33d7eefa9fc581eaaf07f394bed0ec2f97',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////
const XUTENG={
mainnet:{ncid:1,addr:'0x872Bc37697f45526fc0C960E19654c8714dB6957',hash:'0x1e7ae86d7fd7cba08377c641a50ff38ccbeefa50f78a369613483abdfc88f8ab',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x021e3Ddf28C84B15e5Ab6269da72ec9b816993D7',hash:'0x4402c9b1f4beb9768d10509244440a521c93b7f3bc24e43b17999a166227986d',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0x9F57B97a6723b1620A6360af33B28d006806EC0d',hash:'0x73dba80fff9871330489f6b665861a76211dd90668b1d4578c3ede5493534d1c',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
binance:{ncid:56,addr:'0x1a2944F9FE6adD404F9A1Ee0E12be5c8671ea224',hash:'0x7eae323a5c3f05f049237199e34a84e466bbc5d8faec59be9ef644ff05d2f4da',rpcs:'https://bsc-dataseed.binance.org/',bcls:'private',scan:'https://www.bscscan.com/token/'},
classic:{ncid:61,addr:'0xd827007Dda5AdEC1548171945d639ac156CfAd59',hash:'0x66dbbd972497dd0183b291f4ccd17de6159ba95ecdef65d636f41da3f5771e74',rpcs:'https://www.ethercluster.com/etc/',bcls:'private',scan:'https://etcblockexplorer.com/token/'},
};
////////////////////////////////////////////////////////////