////////////////////////////////////////////////////////////
const Menu=function(element){self=this;
 element.onclick=function(e){setAction(e,self,ACTION,BUTACT)};
 element.onchange=function(e){setAction(e,self,CHANGE,DATACT)};
 self.onSetFee=function(){promm_setFee();}
 self.onEthXut=function(){promm_sendeth2xut();}
 self.onXutXut=function(){promm_transfer2xut();}
 self.onSysReg=function(){promm_regs2sys(0,0);}
 self.onSetBuy=function(){promm_userSetBuy();}
 self.onDisBuy=function(){promm_userStopBuy(0);}
 self.onSetSel=function(){promm_userSetSell();;}
 self.onDisSel=function(){promm_userStopSell(0);}
 self.onBuyOfr=function(){promm_buyFromSeller();}
 self.onSelReq=function(){promm_sellToBuyer();}
 self.onGoUser=function(){getUserData(gv(_user),getDocType(0));}
 self.onGetBuy=function(){getOwnRequest(g2(_buyPostNum));}
 self.onGetSel=function(){getOwnOffer(g2(_sellPostNum));}
 self.onGetOfr=function(){getUserOffer(gv(_sellerAddress),g2(_sellerPostNum));}
 self.onGetReq=function(){getUserRequest(gv(_buyerAddress),g2(_buyerPostNum));}
 self.goXutGet=function(){dv(_sendThis,(g2(_xutThis)/s2n(sellTpe)));}
 self.goEthGet=function(){dv(_ethThis,(g2(_transThis)/s2n(buyTpe)));}
 self.goEthSet=function(){dv(_eth2pay,(g2(_xut2buy)/g2(_buyrate)+s2n(typePriceEth)));}
 self.goXutSet=function(){dv(_eth2recv,((g2(_xut2sell)-s2n(typePriceXut))/g2(_sellrate)));}
 self.goXutBuy=function(){dv(_eth2send,(g2(_xut2gain)/gn(_sellingTpe)));}
 self.goXutSel=function(){dv(_eth2gain,(g2(_xut2send)/gn(_buyingTpe)));}
 self.goUtcGet=function(){getUts('year','month','day','hour','minute','_uts','_utstring');}
 self.onBipeDecode=function(){BipeDecode('_keystore_status_bipe')};
 self.onV3ksDecode=function(){V3ksDecode('_keystore_status')};
 self.onAuthKstDec=function(){author_getAccount();}
 self.onAuthAccNew=function(){author_newAccount();}
 self.onAuthAccImp=function(){author_oldAccount();}
 self.onAuthAccExp=function(){author_PrivateKey();}
 self.onAuthSigSig=function(){do_signmess(0);}
 self.onAuthSigVer=function(){do_smverify(0);}
 self.onAuthPayEth=function(){do_sendeth();}
 self.onAuthPayXut=function(){do_transfer();}
 self.onAuthEthXut=function(){do_sendeth2xut('_help_buy','mm_buy');}
 self.onAuthXutXut=function(){do_transfer2xut('_help_sell','mm_sell');}
 self.onAuthSetFee=function(){author_setFee('mm_setFee');}
 self.onAuthSysReg=function(){author_regs2sys('_help_register');}
 self.onAuthSetBuy=function(){author_userSetBuy('_help_tobuy','mm_userSetBuy');}
 self.onAuthDisBuy=function(){author_userStopBuy('_help_buying','mm_userStopBuy');}
 self.onAuthSetSel=function(){author_userSetSell('_help_tosell','mm_userSetSell');}
 self.onAuthDisSel=function(){author_userStopSell('_help_selling','mm_userStopSell');}
 self.onAuthBuyOfr=function(){author_buyFromSeller('_help_buyfrom','mm_buyFromSeller');}
 self.onAuthSelReq=function(){author_sellToBuyer('_help_sellto','mm_sellToBuyer');}
 self.onAuthCpyKst=function(){tcopy(_keystore,hi_alert_kstcopy);}
 self.onAuthCpyKey=function(){tcopy(_newprivate,hi_alert_kstcopy);}
 self.onAuthCpyExp=function(){tcopy(_expprivate,hi_alert_kstcopy);}
 self.onAuthCpySig=function(){tcopy(_signature,hi_alert_kstcopy);}
 self.onAuthCokGet=function(){user_getCookie();}
 self.onAuthCokSet=function(){user_setCookie();}
 self.onAuthCokDel=function(){user_delCookie();}
 self.goAuthNetPut=function(){selectNet(gv(_network));}
 self.goAuthNetFix=function(){selectNet(network);}
 self.goAuthGasWei=function(){txgwei=g2(_txgwei);}
 self.goAuthGasMax=function(){maxgas=g2(_maxgas);}
 self.goRawBxValue=function(){db('change',gv('exp_btc'));}
 self.goRawExToken=function(){PROXIES[0].setApiKey(gv('token'),network)}
 self.goRawBxToken=function(){BROXIES[0].setApiKey(gv('token'),network)}
 self.goRawBxChain=function(){switchBtc(gv(_network));swapBtcId(network)}
 self.goRawTxChain=function(){switchNet(gv(_network));getGwei()}
 self.goRawNetwork=function(){switchNet(gv(_network));}
 self.onGameResult=function(){reLotter(console.log);}
 self.onGameTxPlay=function(){gamePlay(window.txLottoGame);}
 self.onGameTxSend=function(){gameSend(window.txLottoGame);}
 self.onUserGetPro=function(){deaddrMyProfile(sender,'_profile');}
 self.onUserGetDom=function(){dwDomainWithFee(sender,'_domain','_domfee');}
 self.onUserSetPro=function(){createMyProfile(gv('proname'),gv('protext'),gv('prostyle'));}
 self.onUserSetDom=function(){createOneDomain(gv('domname'),{ip:gv('domip'),note:gv('domref')},g2('dometh'),function(e,r){if(e)dw('mm_setDomain',ERROR+e)},'mm_setDomain');}
 self.onUserDomReg=function(){createOneDomain(gv('domain'),{ip:gv('dip'),note:gv('dnote')},g2('regeth'),function(e,r){if(e)dw('_domain_status',ERROR+e)},'_domain_status');}
 self.onUserDocSet=function(){createSimpleDoc(gv('docform'),gn('_uts'),g2('xutMin'),g2('xutMax'),g2('doctype'),{name:gv('docdat')},gv('rewards').split(COMMA),'_doc_hash','_doc_status');}
 self.onGameDocSet=function(){createSimpleDoc(gv('docform'),gn('_uts'),g2('xutMin'),g2('xutMax'),0,{name:gv('docdat')},genArray('rewards'),'_doc_hash','_doc_status');}
 self.onGameDocLet=function(){createSimpleRef(gv('docform'),gn('_uts'),g2('ethMin'),g2('ethMax'),TYPES.gaming,{name:gv('docdat'),pay:'eth'},genArray('rewards'),0,BLANK,null,null,BLANK,BLANK,BLANK,BLANK,'_doc_hash');}
 self.onUserPayXut=function(){xutengRemitFor(gv('xutTo'),g2('xut'),gv('xutNote'),console.log,'_userxut_status',false);}
 self.onUserPayEth=function(){ethereumRemitFor(gv('to'),g2('eth'),gv('ethNote'),console.log,'_usereth_status',false);}
 self.onUserTxView=function(){dwTxHashContent(gv('txhash'),'_txaddress','_txnote','_txdata',function(e,data){dv('user',data?data.txAuthor:BLANK);menu.onUserGoUser()})}
 self.onUserGoUser=function(){getAliasData(gv(_user),1,function(addr){dw('_userWallet',addr);deaddrMyProfile(addr,'_userProfile');deaddrMyDomains(addr,'_userDomain')})}
 self.onUserAaAddr=function(){if(avalid(gv('_aowner')))return(alert(ERROR));mm_ping(toHash(gv('alias').toLowerCase()),g2('atype'));}
 self.onUserAAlias=function(){dwAddrAliasInfo(gv('alias'),'_ahash','_aowner','_address');}
 self.onUserDomain=function(){dwDomainRegInfo(gv('domain'),'_downer','_dexp','dip','dnote');}
 self.onBipeAccNew=function(){bipNewAccount('_account_status','new_btc','new_eth','new_key','new_hex','new_web');}
 self.onBipEncrypt=function(){bipOldAccount('_encrypt_status','old_key','enc_pwd','old_btc','old_eth','enc_bip','old_web');}
 self.onBipDecrypt=function(){bipKeyDecrypt('_decrypt_status','dec_bip','dec_pwd','exp_btc','exp_eth','exp_key','exp_hex','exp_web');}
 self.onBipeUnlock=function(){bipKeyDecrypt('_keystore_status','keystore','password','100','wallet','200','300');}
 self.onBip2AccNew=function(){bipSolNewAddr('_account_status','new_sol','new_key');}
 self.onBip2Encrpt=function(){bipSolOldAddr('_encrypt_status','old_key','enc_pwd','old_sol','enc_bip');}
 self.onBip2Decrpt=function(){bipSolDecAddr('_decrypt_status','dec_bip','dec_pwd','exp_sol','exp_key');}
 self.onBip2Unlock=function(){bipSolDecrypt('_keystore_status','keystore','password','wallet','_sols');}
 self.onAuthPaySol=function(){bipSolTransfer('_sendeth_status','to','sol','_sols');}
 self.onBip3AccNew=function(){bipAlgoNewAddr('_account_status','new_algo','new_key');}
 self.onBip3Encrpt=function(){bipAlgoOldAddr('_encrypt_status','old_key','enc_pwd','old_algo','enc_bip');}
 self.onBip3Decrpt=function(){bipAlgoDecAddr('_decrypt_status','dec_bip','dec_pwd','exp_algo','exp_key');}
 self.onBip3Unlock=function(){bipAlgoDecrypt('_keystore_status','keystore','password','wallet','_algos','rpcs','apikey','idxs');}
 self.onAuthPayAgr=function(){bipAlgoTransfer('_sendeth_status','to','algo','_algos','note');}
 self.onAuthRefAgr=function(){bipAlgoRefresh('_algos');}
 self.onRawTxDoBtc=function(){dbm(['txdata','txlink'],EMPTY);swapBtcId(gv(_network));if(noLogin())return;rawSetBtcTx(gv('exp_btc'),newaccount.key,gv('to'),gv('btc'),gv('network'),gv('fee'),'_txdata_status','txdata')}
 self.onRawPureBtc=function(){dbm(['txdata','txlink'],EMPTY);swapBtcId(gv(_network));if(noLogin())return;rawPopBtcTx(gv('input'),gv('exp_btc'),newaccount.key,gv('to'),gv('btc'),gv('network'),gv('fee'),'_txdata_status','txdata')}
 self.onRawTxDoEth=function(){dbm(['txdata','txlink'],EMPTY);if(noLogin())return;rawPayEther(gv('exp_eth'),window.newaccount.hex,gv(_sendTo),gv(_sendVal),gv(_smessage),g2(_txgwei),g2(_maxgas),'_txdata_status','txdata')}
 self.onRawPureEth=function(){dbm(['txdata','txlink'],EMPTY);if(noLogin())return;rawGenEther(gv('exp_eth'),window.newaccount.hex,gv(_sendTo),gv(_sendVal),gv(_smessage),g2(_txgwei),g2(_maxgas),g2('nonce'),'_txdata_status','txdata')}
 self.onRawPushEth=function(){self.goRawExToken();dv('txlink',PROXIES[0].sendRawTransaction(gv('txdata'),network))}
 self.onRawPushBtc=function(){self.goRawBxToken();dv('txlink',BROXIES[0].sendRawTransaction(gv('txdata'),network))}
 self.onRawCopyHex=function(){tcopy('txdata',hi_alert_kstcopy);}
 self.onRawCopyApi=function(){tcopy('txlink',hi_alert_kstcopy);}
 self.goUserRedXut=function(a){a=gv('xutTo');if(avalid(a))return(dv('xutTarget',a));xutengUserRedirect(a,function(e,r){dv('xutTarget',r)})}
 self.goUserRedEth=function(a){a=gv('to');if(avalid(a))return(dv('ethTarget',a));xutengUserRedirect(a,function(e,r){dv('ethTarget',r)})}
 self.goUserGoUser=self.onUserGoUser;
 self.goUserDomain=self.onUserDomain;
 self.goUserAAlias=self.onUserAAlias;
 self.onAuthGoUser=self.onGoUser;
 self.onAuthGetBuy=self.onGetBuy;
 self.onAuthGetSel=self.onGetSel;
 self.onAuthGetOfr=self.onGetOfr;
 self.onAuthGetReq=self.onGetReq;
 self.onClearInput=clearTags;
 //TokenMiningDefinitions
 self.onDefiHackProgJoinMine=function(){defiHackProgJoinMine('form_status','pro_token','pro_id_mine');}
 self.onDefiHackProgJoin=function(){defiHackProgJoin('form_status','pro_token','pro_id');}
 self.onDefiHackProgLoad=function(){defiHackProgLoad('form_status','pro_token','pro_amt','pro_sum');}
 self.goDefiHackProgIdno=function(){checkPositiveInt('pro_id',_warnPrgIdno);}
 self.goDefiHackProgIdnoMine=function(){checkPositiveInt('pro_id_mine',_warnPrgIdno);}
 self.goDefiHackProgLoad=function(){checkTokenAllowed('pro_token',_warnPrgCoin);self.onDefiHackProgLoad()}
 self.onDefiDigLoad=function(){defiDigLoad('dig_token','dig_amt','dig_sum','dig_mine','dig_rate');}
 self.onDefiDigJoin=function(){defiDigJoin('dig_keystore','dig_passcode','dig_address');}
 self.goDefiDigLoad=self.onDefiDigLoad;
 self.onDefiDigNonce=function(){defiDigNonce('dig_nonce');}
 self.onDefiDigMine=function(){defiDigMine('dig_wait','form_status');}
 self.onDefiDigSend=function(){defiDigSend('dig_in_nonce','form_status');}
 //GemtTokenDefinitions
 self.onDefiProgramProgDraw=function(){confirmPositiveInt('pro_program_id',_warnPrgDraw);defiProgramProgStop('form_status','pro_program_id',true)}
 self.onDefiProgramProgDrawRaw=function(){confirmPositiveInt('pro_program_id',_warnPrgDraw);defiProgramProgStopRaw('form_status','pro_program_id',true)}
 self.onDefiProgramProgOpen=function(){defiProgramProgOpen('form_status','pro_program_id','pro_program_apr','pro_program_gemt');}
 self.onDefiProgramProgOpenRaw=function(){defiProgramProgOpenRaw('form_status','pro_program_id','pro_program_apr','pro_program_gemt');}
 self.onDefiProgramProgRead=function(){defiProgramProgRead('form_status','pro_program_id','pro_program_apr','pro_program_gemt');}
 self.onDefiProgramProgStop=function(){confirmPositiveInt('pro_program_id',_warnPrgStop);defiProgramProgStop('form_status','pro_program_id',false)}
 self.onDefiProgramProgStopRaw=function(){confirmPositiveInt('pro_program_id',_warnPrgStop);defiProgramProgStopRaw('form_status','pro_program_id',false)}
 self.goDefiProgramProgIdno=function(){checkPositiveInt('pro_program_id',_warnPrgIdno);self.onDefiProgramProgRead()}
 self.goDefiProgramProgInit=function(){checkPositiveNum('pro_program_gemt',_warnPrgInit);}
 self.goDefiProgramProgRate=function(){checkNumsInRange('pro_program_apr',_warnPrgRate,PROGMINRATE,PROGMAXRATE);}
 self.onDefiProgramProgReId=function(){defiProgramProgRead('form_status','pro_invest_id','pro_invest_apr','pro_invest_sum','pro_invest_age','pro_invest_own','pro_invest_amt','pro_invest_agi');}
 self.onDefiProgramProgJoin=function(){defiProgramProgJoin('form_status','pro_invest_gemt');}
 self.onDefiProgramProgJoinRaw=function(){defiProgramProgJoinRaw('form_status','pro_invest_gemt');}
 self.onDefiProgramProgGain=function(){defiProgramProgGain('form_status','pro_invest_id');}
 self.onDefiProgramProgGainRaw=function(){defiProgramProgGainRaw('form_status','pro_invest_id');}
 self.goDefiProgramProgInst=function(){checkPositiveNum('pro_invest_gemt',_warnPrgInit);}
 self.goDefiProgramProgReId=self.onDefiProgramProgReId;
 self.goDefiGameLodeNumStr=function(){checkLodeNumsStr('lode_numstr',_warnPrgData);}
 self.goDefiGameLodeAmount=function(){checkPositiveNum('lode_amount',_warnPrgInit);}
 self.goDefiGameLodeLoad=function(){self.onDefiGameLodeLoad();}
 self.onDefiGameLodeLoad=function(){defiGameLodeLoad('form_status','lode_money','pro_amt');}
 self.onDefiGameLodeJoin=function(){defiGameLodeJoin('form_status','lode_type','lode_money','lode_numstr','lode_amount');}
 self.onDefiGameLodeJoinRaw=function(){defiGameLodeJoinRaw('form_status','lode_type','lode_money','lode_numstr','lode_amount');}
 self.goDefiGemtPayLoad=function(){defiGameLodeLoad('form_status','pay_money','pro_amt');}
 self.goDefiGemtPayTxhRef=function(){checkTxHash('pay_ref',_warnDatHash);}
 self.goDefiGemtPayAddrTo=function(){checkAddress('pay_to',_warnDatAddr);}
 self.goDefiGemtPayAmount=function(){checkPositiveNum('pay_amount',_warnPrgInit);}
 self.onDefiGemtPayWithRef=function(){defiGemtPayWithRef('form_status','pay_ref','pay_to','pay_amount','pay_note','pay_money');}
 self.onDefiGemtPayWithRefRaw=function(){defiGemtPayWithRefRaw('form_status','pay_ref','pay_to','pay_amount','pay_note','pay_money');}
 self.onDefiGemtPayLoad=function(){self.goDefiGemtPayLoad();}
 //TokenBuyingDefinitions
 self.onDefiProgJoin=function(){defiProgJoin('form_status','pro_buy_gemt');}
 self.onDefiProgReId=function(){defiProgRead('form_status','pro_buy_id','pro_apr','pro_age','pro_sum','pro_own');}
 self.goDefiProgInit=function(){checkPositiveNum('pro_buy_gemt',_warnPrgInit);}
 self.goDefiProgInst=self.goDefiProgInit;
 self.goDefiProgReId=self.onDefiProgReId;
 //TokenSellingDefinitions
 self.onDefiProsJoin=function(){defiProgJoin('form_status','pro_sell_gemt');}
 self.onDefiProsReId=function(){defiProgRead('form_status','pro_sell_id','pro_apr','pro_age','pro_sum','pro_own');}
 self.goDefiProsGemt=function(){checkPositiveNum('pro_sell_gemt',_warnPrgInit);db('pro_sell_conv',n2s(gv('pro_sell_gemt').t2e(gv('pro_apr')),6))}
 self.goDefiProsConv=function(){checkPositiveNum('pro_sell_conv',_warnPrgInit);db('pro_sell_gemt',n2s(gv('pro_sell_conv').e2t(gv('pro_apr')),6))}
 self.goDefiProsReId=self.onDefiProsReId;
 //TokenOfferingDefinitions
 self.onDefiOfferOpen=function(){defiProgOpen('form_status','pro_offer_id','pro_offer_apr','pro_offer_age','pro_offer_gemt');}
 self.onDefiOfferRead=function(){defiProgRead('form_status','pro_offer_id','pro_offer_apr','pro_offer_age','pro_offer_gemt');}
 self.onDefiOfferStop=function(){confirmPositiveInt('pro_offer_id',_warnPrgStop);defiProgStop('form_status','pro_offer_id')}
 self.goDefiOfferIdno=function(){checkPositiveInt('pro_offer_id',_warnPrgIdno);self.onDefiOfferRead()}
 self.goDefiOfferRate=function(){checkPositiveNum('pro_offer_apr',_warnPrgPrix);db('pro_offer_rev',n2s(1/s2n(gv('pro_offer_apr')),6))}
 self.goDefiOfferRvrt=function(){checkPositiveNum('pro_offer_rev',_warnPrgPrvt);db('pro_offer_apr',n2s(1/s2n(gv('pro_offer_rev')),6))}
 self.goDefiOfferSAge=function(){checkPositiveOr0('pro_offer_age',_warnPrgSAge);}
 self.goDefiOfferInit=function(){checkPositiveNum('pro_offer_gemt',_warnPrgInit);}
 //TokenOrderingDefinitions
 self.onDefiOrderOpen=function(){defiProgOpen('form_status','pro_order_id','pro_order_apr','pro_order_age','pro_order_gemt');}
 self.onDefiOrderRecv=function(){defiProgRead('form_status','pro_order_id','pro_order_apr','pro_order_age','pro_order_conv');}
 self.onDefiOrderStop=function(){confirmPositiveInt('pro_order_id',_warnPrgStop);defiProgStop('form_status','pro_order_id')}
 self.goDefiOrderIdno=function(){checkPositiveInt('pro_order_id',_warnPrgIdno);self.onDefiOrderRecv()}
 self.goDefiOrderRate=function(){checkPositiveNum('pro_order_apr',_warnPrgPrix);db('pro_order_rev',n2s(1/s2n(gv('pro_order_apr')),6))}
 self.goDefiOrderRvrt=function(){checkPositiveNum('pro_order_rev',_warnPrgPrvt);db('pro_order_apr',n2s(1/s2n(gv('pro_order_rev')),6))}
 self.goDefiOrderSAge=function(){checkPositiveOr0('pro_order_age',_warnPrgSAge);}
 self.goDefiOrderGemt=function(){checkPositiveNum('pro_order_gemt',_warnPrgInit);db('pro_order_conv',n2s(gv('pro_order_gemt').t2e(gv('pro_order_apr')),6))}
 self.goDefiOrderConv=function(){checkPositiveNum('pro_order_conv',_warnPrgInit);db('pro_order_gemt',n2s(gv('pro_order_conv').e2t(gv('pro_order_apr')),6))}
 //Mobile:Buy/Sell/Offer/Order
 self.onDefiProgJoinRaw=function(){defiProgJoinRaw('form_status','pro_buy_gemt');}//BUYTOKEN=false
 self.onDefiProsJoinRaw=function(){defiProgJoinRaw('form_status','pro_sell_gemt');}//BUYTOKEN=true
 self.onDefiOfferOpenRaw=function(){defiProgOpenRaw('form_status','pro_offer_id','pro_offer_apr','pro_offer_age','pro_offer_gemt');}//BUYTOKEN=false
 self.onDefiOfferStopRaw=function(){confirmPositiveInt('pro_offer_id',_warnPrgStop);defiProgStopRaw('form_status','pro_offer_id')}//BUYTOKEN=false
 self.onDefiOrderOpenRaw=function(){defiProgOpenRaw('form_status','pro_order_id','pro_order_apr','pro_order_age','pro_order_gemt');}//BUYTOKEN=true
 self.onDefiOrderStopRaw=function(){confirmPositiveInt('pro_order_id',_warnPrgStop);defiProgStopRaw('form_status','pro_order_id')}//BUYTOKEN=true
};//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////