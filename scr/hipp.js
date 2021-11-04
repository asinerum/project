////////////////////////////////////////////////////////////
const PROGMINRATE = 3;
const PROGMAXRATE = 200;
////////////////////////////////////////////////////////////
const MBALANCE = 'balanceOf';
const MPROGGET = 'programs';
const MPROGINV = 'invests';
const MPROGPAY = 'invest';
const MPROGRAM = 'program';
const MPROGSTP = 'close';
const MPROGWDR = 'withdraw';
const YEARSECONDS = 365*24*60*60;
////////////////////////////////////////////////////////////
let _days = 'days';
let _martMoney = 'NEMT9';
let _progMoney = 'GEMT9';
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
let _errClear = `"RedeemNotAllowed"`;
let _errDepos = `"TokensNotEnough"`;
let _errIdNot = `"IdNotAvailable"`;
let _errInput = `"InputNotValid"`;
let _errInvst = `"InvestNotAllowed"`;
let _errItNot = `"ItemDoesNotExist"`;
let _errOwner = `"ActionNotAllowed"`;
let _errValue = `"ItemHasNoValue"`;
////////////////////////////////////////////////////////////
let _warnPrgDraw = `You are about to half redeem this one`;
let _warnPrgIdno = `Program ID must be a positive integer`;
let _warnPrgInit = `Deposit amounts must be larger than 0`;
let _warnPrgNOwn = `You are not the owner of this program`;
let _warnPrgRate = `APR must be between ${PROGMINRATE}-${PROGMAXRATE}%`;
let _warnPrgStop = `You are deciding to stop this program`;
////////////////////////////////////////////////////////////
LABELS.en._button_DefiProgDraw = `HALF REDEEM`;
LABELS.en._button_DefiProgGain = `REDEEM`;
LABELS.en._button_DefiProgJoin = `INVEST`;
LABELS.en._button_DefiProgOpen = `CREATE PROGRAM`;
LABELS.en._button_DefiProgStop = `STOP PROGRAM`;
LABELS.en._label_DefiProgAge = `Age`;
LABELS.en._label_DefiProgAgi = `My investment age`;
LABELS.en._label_DefiProgAmt = `My invested sum`;
LABELS.en._label_DefiProgAPR = `APR {%}`;
LABELS.en._label_DefiProgOwn = `Owner`;
LABELS.en._label_DefiProgSum = `Balance`;
LABELS.en._label_investor = `INVESTOR'S PANEL`;
LABELS.en._label_programer = `PROGRAMER'S PANEL`;
////////////////////////////////////////////////////////////