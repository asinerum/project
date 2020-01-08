////////////////////////////////////////////////////////////
const author_getAccount=function(){showLoad('_keystore_status');setTimeout(function(){getAccount(null);},2000);};
const author_ClrPrivate=function(){db(_newprivate,rem_ncprivatekey);db(_oldprivate,rem_imprivatekey);db(_expprivate,rem_exprivatekey);db(_newaddress,rem_createnewkey);};
////////////////////////////////////////////////////////////
const author_newAccount=function(){if(!confirm(hi_prompt_setpwd))return;;netkeys[senderId]=newAccount(gv(_password),_newaddress,_newprivate,_keystore,0);if(!netkeys[senderId])return;alert(hi_alert_savepwd);author_getAccount();};
const author_oldAccount=function(){if(!confirm(hi_prompt_setpwd))return;;netkeys[senderId]=oldAccount(gv(_password),_oldaddress,_oldprivate,_keystore,0);if(!netkeys[senderId])return;alert(hi_alert_imptkey);author_getAccount();author_ClrPrivate();};
const author_PrivateKey=function(){author_ClrPrivate();setTimeout(function(){getAccount(null);dv(_expprivate,senderPte);},2000);alert(hi_alert_savepwd);};
////////////////////////////////////////////////////////////