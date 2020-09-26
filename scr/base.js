////////////////////////////////////////////////////////////
const LEFT={
mainnet:{ncid:1,addr:'0x4244f169be509aa6f0a49e537d1bd89800451264',hash:'0x3754245163677f324edd1173f5ef453bce5f86dbce4f4f52a84fd98ffa0f1dd1',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0xf8c308CF496Bf9323B671b485F555882a3b4d9E7',hash:'0xe9d6c1f5b3a7f0e297349a011f64bd04ef89d961d6fc08ba3d185821249ae59d',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0x3D6C8E2C2ae17726386231f99169C9d69a20F104',hash:'0x5b12d71d74038533f6461e9438a77bad5211fb7da1a299cf20948428a9a3ec30',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
localhost:{ncid:1579432490134,addr:'0x09a564464c68f57438a758e5c542B22875e8BEbe',hash:'0x5e078d8464923e8227fcd161f97d09f904c39b8981ca616ada451f2ad52c2552',rpcs:'http://localhost:8545/',bcls:'public',scan:''}};
////////////////////////////////////////////////////////////
const NEMT={
mainnet:{ncid:1,addr:'',hash:'',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x3D6C8E2C2ae17726386231f99169C9d69a20F104',hash:'0x0bf18f0780882431aa0ddd5a6929d6654a5dbe00b7ba2dc6aef1849442856770',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0x45EbbFb3b3DFeb2e1DeD3429C4E04aA31B18a9e1',hash:'0x0a298e1e745ca09513d62908ef60cdf843cf7213f33a134770574a5b235c9a9a',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
localhost:{ncid:1579432490134,addr:'0xBD43D9161CdEe6A2b85003D41D0d38240D7a79AF',hash:'0xe669ba51f41e8bd2a525aa0b65f7e041352940834b35204dc0b194f08c4b9544',rpcs:'http://localhost:8545/',bcls:'public',scan:''}};
////////////////////////////////////////////////////////////
const GEMT={
mainnet:{ncid:1,addr:'',hash:'',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x70538eF05E51CdA13E7Cc393A550838eB137688E',hash:'0x17c98761e4122b545bbd8459fcd5d76ce55f19fdf9819f6347cb9ebac146cc68',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0xB2f5036F69E05B030688Ce065a98fD0e6cF3f40a',hash:'0x106de1840dccc8c6cd158bf6a976ba0007dd31ea0d62e479aad162b036bb867e',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
localhost:{ncid:1579432490134,addr:'0xa8091125B33fa3051bb69ddE40501Ab39D812931',hash:'0x06ea1d002bc897fd608dc91c7a25bbc6b5eab4827d53ba912eff1970102d9661',rpcs:'http://localhost:8545/',bcls:'public',scan:''}};
////////////////////////////////////////////////////////////
const FEMT={
mainnet:{ncid:1,addr:'',hash:'',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x45EbbFb3b3DFeb2e1DeD3429C4E04aA31B18a9e1',hash:'0xcdaa4b22fa7487daad7f49c5f7daed2f41e2442cc0ad52405a931631ddb6e8a4',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0x3E86E647FC2BE17266071f8047b8B1c755D589fe',hash:'0xa6983f99fc86c1d55a3f022f465d083c3d31872db2be35a8b0062f2314664b87',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
localhost:{ncid:1579432490134,addr:'0xC0D5920cf22A7f0d999eCd59eD3a5E651AfD6bB8',hash:'0xfa2d5a9b1d61b90be7e3ce507f38de13424013b12afbbe89c5dec1f43c976534',rpcs:'http://localhost:8545/',bcls:'public',scan:''}};
////////////////////////////////////////////////////////////
const XUTENG={
mainnet:{ncid:1,addr:'0x872Bc37697f45526fc0C960E19654c8714dB6957',hash:'0x1e7ae86d7fd7cba08377c641a50ff38ccbeefa50f78a369613483abdfc88f8ab',rpcs:'https://mainnet.rpc.fiews.io/v1/free',bcls:'private',scan:'https://etherscan.io/token/'},
rinkeby:{ncid:4,addr:'0x021e3Ddf28C84B15e5Ab6269da72ec9b816993D7',hash:'0x4402c9b1f4beb9768d10509244440a521c93b7f3bc24e43b17999a166227986d',rpcs:'https://rinkeby.rpc.fiews.io/v1/free',bcls:'team',scan:'https://rinkeby.etherscan.io/token/'},
ropsten:{ncid:3,addr:'0x9F57B97a6723b1620A6360af33B28d006806EC0d',hash:'0x73dba80fff9871330489f6b665861a76211dd90668b1d4578c3ede5493534d1c',rpcs:'https://ropsten.rpc.fiews.io/v1/free',bcls:'group',scan:'https://ropsten.etherscan.io/token/'},
localhost:{ncid:1579432490134,addr:'0x78b787bC341baC70030d81e90FD61c3D2C8386bE',hash:'0x631c0cf96bc7c0d52362f59e0b57f17b437667c96d56ea4e790c99a16cf83530',rpcs:'http://localhost:8545/',bcls:'public',scan:''}};
////////////////////////////////////////////////////////////