////////////////////////////////////////////////////////////
const AUTHDOC='doc';
const PUBNOTE='pub';
const DONALET='don';
const AUCTION='bid';
const SELLING='sel';
const PRIVATE='pte';
const DEPOSIT='dep';
const BETTING='bet';
////////////////////////////////////////////////////////////
const MODELS={
doc:{id:AUTHDOC,type:TYPES.draft,name:'official document'},
pub:{id:PUBNOTE,type:0,name:'public document'},
don:{id:DONALET,type:TYPES.donation,name:'donation letter'},
bid:{id:AUCTION,type:TYPES.bid_selling,name:'auction listing'},
sel:{id:SELLING,type:TYPES.selling,name:'sale listing'},
pte:{id:PRIVATE,type:TYPES.invoice,name:'private sale'},
dep:{id:DEPOSIT,type:TYPES.deposit_slip,name:'deposit slip'},
bet:{id:BETTING,type:TYPES.betting,name:'bet listing'}};
////////////////////////////////////////////////////////////