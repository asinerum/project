////////////////////////////////////////////////////////////
window.menu.onSfetEncrypt=function(){db('enc_bip',sfet.aes.encrypt(gv('enc_pwd'),gv('old_key')));}
window.menu.onSfetDecrypt=function(){db('exp_key',sfet.aes.decrypt(gv('dec_pwd'),gv('dec_bip')));}
////////////////////////////////////////////////////////////