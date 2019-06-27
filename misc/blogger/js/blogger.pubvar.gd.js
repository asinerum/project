//////////////////////////////////////////////////
//
////
// var DEF_HIDE_STAMPS = TRUE; //Comment-archive
// var DEF_HIDE_STAMPS = FALSE;
// var DEF_HIDE_COUNTS = FALSE;
////
//
var DEF_IMG_WIDTH = 480;
var DEF_IMG_HEIGHT = 270;
//
var CommentsCounter = 0;
var numCommentPerPage = 200;
var sDefAllowedTagList = "<br><b><i><a>";
var sMoreAllowedTagList = "<p><img><font><span><div><u><li><ol><ul><sup><sup><blockquote><hr>";
var autoResizeCommentFont = true;
var nFontSizeMax = 6;
var nFontSizeMin = 3;
//
var numIndexVip1 = 20;
var numIndexVip2 = 50;
var urlVip1Avatar = 'http://asinerum-gae.appspot.com/static/is_vip02.jpg';
var urlVip2Avatar = 'http://asinerum-gae.appspot.com/static/is_vip03.jpg';
var urlVip3Avatar = 'http://asinerum-gae.appspot.com/static/is_vip04.gif';
//
// Ext-pages-defines:
var exPageCmntPages = {};
var exPageNames = [];
//
// Paginating:
var numEntryComment = 0; //Data-post
var numEntryCommentFeed = 0; //JSON-Feeder
var numEntryCommentRecount = 0; //Onfly-count
var numCommentPage = 1;
var strPagination = '';
var strEntryURL = '';
var strPostURL = '';
var strPostID = '';
var strBlogID = '';
//
// Comment-authors:
var urlIdAvatars = {};
var iCommentSmileys = {};
//
// Comment-containers:
var dataFullComments = {};
var idTextareaCommentPost = 'comment-body';
//
// Comment-format:
var UserBLs = [];
var UserVIPs = [];
var isVipAuthor = false;
var isBLAuthor = false;
var rsBLAuthor = false;
var isStyleItalic = false;
var isStyleBold = false;
var isStyleBGC = false;
//
// Comment-consts:
var numRecentComments = 25;
var maxCommentChars = 175;
var useAvatar = false;
var urlAnoAvatar = 'http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&s=16';
var urlIconPostA = 'http://asinerum-gae.appspot.com/static/im_star3.gif';
var urlIconPostB = 'http://asinerum-gae.appspot.com/static/im_star2.gif';
var urlIconPostC = 'http://asinerum-gae.appspot.com/static/im_star1.gif';
//
// Stamps-n-cards:
urlIdAvatars['00'] = ['http://asinerum-gae.appspot.com/static/i_quanbua2.gif', 'L&#227;nht&#7909; t&#224;nb&#7841;o manh&#273;&#7897;ng'];
urlIdAvatars['th'] = ['http://asinerum-gae.appspot.com/static/i_tinhhoa.gif', 'Tinhhoa phongnh&#227; baola'];
urlIdAvatars['vs'] = ['http://asinerum-gae.appspot.com/static/i_vangson.gif', 'V&#224;ngson m&#7855;t s&#7855;c m&#244;ng to &#273;&#249;i tr&#242;n'];
urlIdAvatars['bn'] = ['http://asinerum-gae.appspot.com/static/i_bannong.gif', 'B&#7847;nn&#244;ng m&#7891;m &#273;&#7887; c&#7855;n nhanh'];
urlIdAvatars['jh'] = ['http://asinerum-gae.appspot.com/static/i_jahoi.gif', 'C&#225;cm&#225;c gi&#224;h&#243;i, c&#7845;m th&#7857;ng m&#224;y tr&#234;u'];
urlIdAvatars['tt'] = ['http://asinerum-gae.appspot.com/static/i_tintin.gif', 'Tintin ch&#432;a m&#7845;t trinh &#273;&#226;u'];
urlIdAvatars['db'] = ['http://asinerum-gae.appspot.com/static/i_daibang.gif', '&#272;&#7841;ib&#224;ng b&#7909;ng c&#243;c d&#225;i m&#232;o tai d&#417;i'];
urlIdAvatars['mt'] = ['http://asinerum-gae.appspot.com/static/i_momthoi.gif', 'M&#245;m th&#7889;i, bam su&#7889;t b&#7843;y ng&#224;y'];
urlIdAvatars['oq'] = ['http://asinerum-gae.appspot.com/static/i_ocquat.gif', '&#211;c qu&#7845;t, kh&#244;n nh&#7845;t Qu&#225;n n&#224;y con &#417;i'];
urlIdAvatars['ld'] = ['http://asinerum-gae.appspot.com/static/i_liudan.gif', 'L&#7921;u&#273;&#7841;n gi&#7853;t ch&#7889;t qu&#259;ng ngay'];
urlIdAvatars['td'] = ['http://asinerum-gae.appspot.com/static/i_thandit.gif', 'Th&#7847;n &#273;&#7883;t, ch&#417;i kh&#233;o, v&#259;n hay, c&#7863;c d&#224;i'];
urlIdAvatars['vc'] = ['http://asinerum-gae.appspot.com/static/i_daubo.gif', '&#272;&#7847;u b&#242;, b&#7843;oth&#7911; thi&#234;nt&#224;i'];
urlIdAvatars['sl'] = ['http://asinerum-gae.appspot.com/static/i_salong.gif', 'Sal&#244;ng th&#225;nh g&#250;c mi&#7879;tm&#224;i l&#224; &#273;&#226;y'];
urlIdAvatars['lx'] = ['http://asinerum-gae.appspot.com/static/i_loxo.gif', 'L&#242;xo b&#7853;t m&#227;i kh&#244;ng ngu&#244;i'];
urlIdAvatars['eo'] = ['http://asinerum-gae.appspot.com/static/i_echop.gif', '&#7870;ch ng&#7891;i &#273;&#225;y gi&#7871;ng, bi&#7871;t &#273;&#7901;i n&#224;o ngon'];
urlIdAvatars['cs'] = ['http://asinerum-gae.appspot.com/static/i_casau.gif', 'C&#225;s&#7845;u m&#7863;t x&#7845;u v&#227;i l&#7891;n'];
urlIdAvatars['xl'] = ['http://asinerum-gae.appspot.com/static/i_xilip.gif', 'Xil&#237;p h&#7891;ng t&#237;m cho ch&#224;ng hai-phai'];
urlIdAvatars['oc'] = ['http://asinerum-gae.appspot.com/static/i_ongcu.gif', 'Anh C&#7909; r&#259;ng b&#7921;a r&#226;u th&#432;a'];
urlIdAvatars['ol'] = ['http://asinerum-gae.appspot.com/static/i_ongle.gif', 'Anh Le ph&#225;tx&#237;t r&#226;u nh&#432; qu&#7843; m&#236;n'];
urlIdAvatars['om'] = ['http://asinerum-gae.appspot.com/static/i_ongmao.gif', 'Anh Mao r&#226;u c&#7841;o s&#7841;ch tr&#417;n'];
urlIdAvatars['on'] = ['http://asinerum-gae.appspot.com/static/i_ongnin.gif', 'Anh Nin r&#226;u m&#7885;c tr&#249;m quanh quai h&#224;m'];
urlIdAvatars['bc'] = ['http://asinerum-gae.appspot.com/static/i_boncau.gif', 'X&#237; b&#7879;t, n&#244;n kh&#7841;c khai m&#249;'];
urlIdAvatars['cd'] = ['http://asinerum-gae.appspot.com/static/i_chuidit.gif', 'Gi&#7845;y l&#244;, nh&#245;n &#273;&#225;m ph&#242; qu&#234; m&#7899;i d&#249;ng'];
urlIdAvatars['tb'] = ['http://asinerum-gae.appspot.com/static/i_taobon.gif', 'T&#225;ob&#243;n t&#7915; s&#225;ng t&#7899;i &#273;&#234;m'];
urlIdAvatars['tv'] = ['http://asinerum-gae.appspot.com/static/i_tinvit.gif', 'Chuy&#234;n tung tin v&#7883;t, &#7843;o h&#417;n loa ph&#432;&#7901;ng'];
urlIdAvatars['tz'] = ['http://asinerum-gae.appspot.com/static/i_tongzat.gif', 'Em to&#7885;c: M&#7865;o, M&#225;n, T&#224;y, M&#432;&#7901;ng'];
//
// Comment-href:
exPageNames[0] = ['ban-hang', 'Mua-ban', 'Bookstore'];
exPageNames[1] = ['tu-van-kinh-doanh', 'Tuvan kinhdoanh', 'Business Consulting'];
exPageNames[2] = ['tu-van-cong-nghe', 'Tuvan congnghe', 'Technology Consulting'];
exPageNames[3] = ['tu-van-giao-duc', 'Tuvan giaoduc', 'Education Consulting'];
exPageNames[4] = ['tu-van-phap-ly', 'Tuvan phaply', 'Law Consulting'];
exPageNames[5] = ['tu-van-van-xa', 'Tuvan vanxa', 'Culture Consulting'];
exPageNames[6] = ['tu-van-suc-khoe', 'Tuvan suckhoe', 'Health Consulting'];
exPageNames[7] = ['tu-van-gia-inh', 'Tuvan giadinh', 'Life Consulting'];
exPageNames[8] = ['tu-van-tam-linh', 'Tuvan tamlinh', 'Spirit Consulting'];
exPageNames[9] = ['tu-van-choi', 'Tuvan anchoi', 'Entertainment Consulting'];
exPageNames[10] = ['index-mucluc', 'Mucluc Bua', 'Shit Index'];
exPageNames[11] = ['resources', 'Tainguyen Bua', 'Shit Resources'];
exPageNames[12] = ['comment-archive', 'Luutru Bua', 'Shit Archive'];
exPageNames[13] = ['thamgia-paid-box', 'Thamgia Paibox', 'Join Paibox'];
exPageNames[14] = ['thamgia-fast-mba', 'Thamgia Fast MBA', 'Join Fast MBA'];
exPageNames[15] = ['thamgia-fast-flp', 'Thamgia Fast FLP', 'Join Fast FLP'];
exPageNames[16] = ['meo-comment', 'Meo comment', 'Comment Tricks'];
exPageNames[17] = ['bam-box', 'Bam', 'Bam Box'];
exPageNames[18] = ['web-games', 'Game', 'Web Games'];
exPageNames[19] = ['comments-quickview', 'CommentView & Chat', 'CommentView & Chat'];
//
// Comment-smiley:
iCommentSmileys['*dance*'] = ['<img src="http://asinerum-gae.appspot.com/emoticon/dance.gif" border="0"/>'];
iCommentSmileys['*fun*'] = ['<img src="http://asinerum-gae.appspot.com/emoticon/fun.gif" border="0"/>'];
iCommentSmileys['*hit*'] = ['<img src="http://asinerum-gae.appspot.com/emoticon/hit.gif" border="0"/>'];
iCommentSmileys['*hug*'] = ['<img src="http://asinerum-gae.appspot.com/emoticon/hug.gif" border="0"/>'];
iCommentSmileys['*kiss*'] = ['<img src="http://asinerum-gae.appspot.com/emoticon/kiss.gif" border="0"/>'];
iCommentSmileys['*laugh*'] = ['<img src="http://asinerum-gae.appspot.com/emoticon/laugh.gif" border="0"/>'];
iCommentSmileys['[(o)]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/21.gif" border="0"/>'];
iCommentSmileys['[(-)]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/10.gif" border="0"/>'];
iCommentSmileys['[:O:]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/42.gif" border="0"/>'];
iCommentSmileys['[:O.]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/24.gif" border="0"/>'];
iCommentSmileys['[.O:]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/100.gif" border="0"/>'];
iCommentSmileys['[.O.]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/5.gif" border="0"/>'];
iCommentSmileys['[o-o]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/26.gif" border="0"/>'];
iCommentSmileys['[Ovv]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/103.gif" border="0"/>'];
iCommentSmileys['[vOv]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/77.gif" border="0"/>'];
iCommentSmileys['[;]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/53.gif" border="0"/>'];
iCommentSmileys['[:]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/60.gif" border="0"/>'];
iCommentSmileys['[*]'] = ['<img src="http://l.yimg.com/hb/i/vn/blog/i/icon/16/79.gif" border="0"/>'];
//
//////////////////////////////////////////////////