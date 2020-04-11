////////////////////////////////////////////////////////////
const MODAUTHDOC='doc';
const MODPUBNOTE='pub';
const MODDOMNAME='nam';
const MODPROFILE='txd';
const MODDBDRAFT='raw';
////////////////////////////////////////////////////////////
const HEADDOC='hdd';
const DLETTER='don';
const AUCTION='bid';
const SELLING='sel';
const PRIVATE='pte';
const DEPOSIT='dep';
const BETTING='bet';
////////////////////////////////////////////////////////////
const MODELS={
doc:{id:HEADDOC,type:TYPES.draft,name:'official document'},
don:{id:DLETTER,type:TYPES.donation,name:'donation letter'},
bid:{id:AUCTION,type:TYPES.bid_selling,name:'auction listing'},
sel:{id:SELLING,type:TYPES.selling,name:'sale listing'},
pte:{id:PRIVATE,type:TYPES.invoice,name:'private sale'},
dep:{id:DEPOSIT,type:TYPES.deposit_slip,name:'deposit slip'},
bet:{id:BETTING,type:TYPES.betting,name:'bet listing'}};
////////////////////////////////////////////////////////////