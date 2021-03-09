/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/@polkadot/client-polkadot@0.8.13/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";var createRuntime=require("@polkadot/client-runtime"),l=require("@polkadot/util/logger")("polkadot"),createBlockDb=require("./dbBlock"),createStateDb=require("./dbState"),initGenesis=require("./genesis"),createExecutor=require("./executor");module.exports=function(e,t,r,c){var i=createRuntime(t,r),o=createBlockDb(c),n=createStateDb(i.environment.db),a={blockDb:o,config:e,chain:t,l:l,runtime:i,stateDb:n},u=createExecutor(a),s=initGenesis(a),b=n.system;return{blocks:o,config:t,executor:u,genesis:s,state:{getBlockHash:b.getBlockHash,getNonce:b.getNonce}}};
//# sourceMappingURL=/sm/353108ca220cabe2da8e2d82ea077c611a7f0de13c72f778660f7fe557afa0f8.map