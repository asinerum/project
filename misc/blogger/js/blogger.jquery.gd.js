//////////////////////////////////////////////////
//
// JQUERY REQUIRED
//
(function($)
{
  JQFUNCTIONS =
  {
    settings:
    {
      ajaxImage: 'loading.gif'
    },
    init: function()
    {
      $('button').live('click', function(e) {
        e.preventDefault();
        eval('JQFUNCTIONS.runFunc["'+$(this).attr("id")+'"]();');
      });
    },
     runFunc:
    {
      hideblogspotapi: function(){
        $('#blogspotapi-results').html('(Items are newest-first)');
      },
      blogspotapi: function(blogger_hostname){
        if(!blogger_hostname){blogger_hostname=window.location.hostname;}
        //numCommentPerPage=200
        var numShowedPosts = document.getElementById("blogspotapi-number").value;
        var numStartIndex = document.getElementById("blogspotapi-index").value;
        $('#blogspotapi-results').html('<img src="https://raw.githubusercontent.com/asinerum/project/master/images/loading.gif" style="float:left;" />');
        $.getJSON(
        "http://"+blogger_hostname+"/feeds/posts/summary?redirect=false&max-results="+numShowedPosts+"&start-index="+numStartIndex+"&alt=json-in-script&callback=?",
        {tags: "jquery,javascript", tagmode: "any", format: "json"},
        function(data){
          $('#blogspotapi-results').empty();
          var counter = 0;
          var results = '<div id="LatestPostsBlock" style="font-size: small;">';
          $.each(data.feed.entry, function(key,val){
            var hrefPost = '';
            var hrefCmnt = '';
            for(var i=0; i<val.link.length; i++){
              if(val.link[i].rel=='self'){hrefPost=val.link[i].href;};
              if(val.link[i].rel=='replies' && val.link[i].type=='application/atom+xml'){hrefCmnt=val.link[i].href;};
            }
            counter++;
            var numComments = val["thr$total"].$t;
            var pages = Math.ceil(numComments/numCommentPerPage);
            results += '<b>('+counter+')&nbsp;<a href="'+hrefPost+'" target="_blank">'+val.title.$t+'</a></b>&nbsp;<span style="font-size: x-small; color: #9FC5E8;"><i>'+numComments+'</i></span><br>';
            for(var j=0; j<pages; j++){
              results += counter+'.'+(j+1)+'&nbsp;<a href="'+hrefCmnt+'?max-results='+numCommentPerPage+'&start-index='+((numCommentPerPage*j)+1)+'" target="_blank">Comment page #'+(j+1)+'</a>'+'<br>';
            }
          });
          results += '</div>';
          $('#blogspotapi-results').html(results);
        });//<getJSON>
      },
      hideblogspotapi_page: function(){
        $('#blogspotapi-page-results').html('(Items are HTMLs)');
      },
      blogspotapi_page: function(blogger_hostname){
        if(!blogger_hostname){blogger_hostname=window.location.hostname;}
        //numCommentPerPage=200
        var numShowedPosts = document.getElementById("blogspotapi-page-number").value;
        var numStartIndex = document.getElementById("blogspotapi-page-index").value;
        $('#blogspotapi-page-results').html('<img src="https://raw.githubusercontent.com/asinerum/project/master/images/loading.gif" style="float:left;" />');
        $.getJSON(
        "http://"+blogger_hostname+"/feeds/posts/summary?redirect=false&max-results="+numShowedPosts+"&start-index="+numStartIndex+"&alt=json-in-script&callback=?",
        {tags: "jquery,javascript", tagmode: "any", format: "json"},
        function(data){
          $('#blogspotapi-page-results').empty();
          var counter = numStartIndex;
          var results = '<div id="LatestPostsBlock-Page" style="font-size: small;">';
          $.each(data.feed.entry, function(key,val){
            var hrefPost = '';
            for(var i=0; i<val.link.length; i++){
              if(val.link[i].rel=='alternate'){hrefPost=val.link[i].href;};
            }
            var numComments = val["thr$total"].$t;
            var pages = Math.ceil(numComments/numCommentPerPage);
            results += '<br><br><b>('+counter+')&nbsp;<a href="'+hrefPost+'" target="_blank">'+val.title.$t+'</a></b><br>';
            for(var j=0; j<pages; j++){
              results += '<a href="'+hrefPost+'?commentPage='+(j+1)+'">#'+(j+1)+'</a>'+'&nbsp;';
            }
            counter++;
          });
          results += '</div>';
          $('#blogspotapi-page-results').html(results);
        });//<getJSON>
      },
      hideblogspotapi_cmnts_results: function(){
        $('#cmnts-results').html('(Items are newest-first)');
      },
      blogspotapi_cmnts_results: function(blogger_hostname){
        if(!blogger_hostname){blogger_hostname=window.location.hostname;}
        $('#cmnts-results').html('<img src="https://raw.githubusercontent.com/asinerum/project/master/images/loading.gif" style="float:left;" />');
        var numShowedComments = 200;
        var numStartIndex = 1;
        $.getJSON(
        "http://"+blogger_hostname+"/feeds/comments/default?redirect=false&max-results="+numShowedComments+"&start-index="+numStartIndex+"&alt=json-in-script&callback=?",
        {tags: "jquery,javascript", tagmode: "any", format: "json"},
        function(data){
          $('#cmnts-results').empty();
          var ct = 0;
          var results = '';
          var cmTotal = data.feed.entry.length;
          $.each(data.feed.entry, function(key,val){
            var hrefPost = val["thr$in-reply-to"].href;
            var id = val.id.$t.split("post-")[1];
            var author = val.author[0].name.$t;
            var published = val.published.$t;
            var content = val.content.$t;
            var hrefLink = '';
            var authorurl = val.author[0].uri.$t;
            var authoravatar = val.author[0]["gd$image"].src;
            for(var i=0; i<val.link.length; i++){if(val.link[i].rel=='alternate'){hrefLink=val.link[i].href;}}
            if(hrefLink==''){hrefLink=hrefPost;}
            ////{hrefPost, id, author, published, content, hrefLink, authorurl, authoravatar}
            ct++;
            results += '<p>' + getStyledTitle(ct+'/'+cmTotal, author, authorurl, authoravatar, hrefLink, published) + '</p>';
            results += '<p>' + getStyledComment(authorurl, author, published, content) + '</p>';
          });
          $('#cmnts-results').html(results);
        });//<getJSON>
      },
      hideblogspotapi_author: function(){
        $('#cmnts-author-results').html('(Items are oldest-first)');
      },
      blogspotapi_author: function(blogger_hostname){
        if(!blogger_hostname){blogger_hostname=window.location.hostname;}
        var strAuthID = document.getElementById("blogspotapi-author-uri").value;
        var numMaxResult = document.getElementById("blogspotapi-author-number").value;
        var numStartIndex = document.getElementById("blogspotapi-author-index").value;
        $('#cmnts-author-results').html('<img src="https://raw.githubusercontent.com/asinerum/project/master/images/loading.gif" style="float:left;" />');
        $.getJSON(
        "http://"+blogger_hostname+"/feeds/comments/default?redirect=false&max-results="+numMaxResult+"&start-index="+numStartIndex+"&alt=json-in-script&callback=?",
        {tags: "jquery,javascript", tagmode: "any", format: "json"},
        function(data){
          $('#cmnts-author-results').empty();
          var numFound = 0;
          var foundComments = [];
          $.each(data.feed.entry, function(key,val){
            var author = val.author[0].name.$t;
            var authorurl = val.author[0].uri.$t;
            if(authorurl.match(RegExp(strAuthID,'gi')) || author.match(RegExp(strAuthID,'gi'))){
              var id = val.id.$t.split("post-")[1];
              var authoravatar = val.author[0]["gd$image"].src;
              var published = val.published.$t;
              var content = val.content.$t;
              var hrefPost = val["thr$in-reply-to"].href;
              var hrefLink = '';
              for(var i=0; i<val.link.length; i++){if(val.link[i].rel=='alternate'){hrefLink=val.link[i].href;}}
              if(hrefLink==''){hrefLink=hrefPost;}
              numFound++;
              var j = numFound-1;
              foundComments[j] = new Array();
              foundComments[j][0] = id;
              foundComments[j][1] = author;
              foundComments[j][2] = authorurl;
              foundComments[j][3] = authoravatar;
              foundComments[j][4] = published;
              foundComments[j][5] = content;
              foundComments[j][6] = hrefPost;
              foundComments[j][7] = hrefLink;
            }//CheckAuthorURI
          });//EachLoop:JsonData
          var results = "";
          if(foundComments.length>0){
            foundComments.reverse();
            for(var i=0; i<foundComments.length; i++){
              author = foundComments[i][1];
              authorurl = foundComments[i][2];
              authoravatar = foundComments[i][3];
              published = foundComments[i][4];
              content = foundComments[i][5];
              hrefLink = foundComments[i][7];
              ////
              results += '<p>' + getStyledTitle((i+1)+'/'+foundComments.length, author, authorurl, authoravatar, hrefLink, published) + '</p>';
              results += '<p>' + getStyledComment(authorurl, author, published, content) + '</p>';
            }
          }else{results="Comments not found at this index, try more";}
          $('#cmnts-author-results').html(results);
          document.getElementById("blogspotapi-author-index").value = Number(numStartIndex)+Number(numMaxResult);
        });//<getJSON>
      },
      hideflickrapi: function(){
        $('#flickrapi-results').html('(Items are newest-first)');
      },
      flickrapi: function(blogger_hostname){
        if(!blogger_hostname){blogger_hostname=window.location.hostname;}
        var numShowedComments = document.getElementById("flickrapi-number").value;
        var numStartIndex = document.getElementById("flickrapi-index").value;
        $('#flickrapi-results').html('<img src="https://raw.githubusercontent.com/asinerum/project/master/images/loading.gif" style="float:left;" />');
        $.getJSON(
        "http://"+blogger_hostname+"/feeds/comments/default?redirect=false&max-results="+numShowedComments+"&start-index="+numStartIndex+"&alt=json-in-script&callback=?",
        {tags: "jquery,javascript", tagmode: "any", format: "json"},
        function(data){
          $('#flickrapi-results').empty();
          var counter = 0;
          var title = "";
          var posts = {};
          $.each(data.feed.entry, function(key,val){
            //.html(JSON.stringify(val));
            var hrefPost = val["thr$in-reply-to"].href;
            var id = val.id.$t.split("post-")[1];
            var author = val.author[0].name.$t;
            var avatar = val.author[0]["gd$image"].src;
            var uri = val.author[0].uri.$t;
            var published = val.published.$t;
            var content = val.content.$t;
            var hrefLink = '';
            for(var i=0; i<val.link.length; i++){if(val.link[i].rel=='alternate'){hrefLink=val.link[i].href;}}
            if(hrefLink==''){hrefLink=hrefPost;} //DeletedContent
            if(!posts[hrefPost]){
              counter++;
              //// title = showListedPostHref(hrefPost).replace(/-/g, " ");
              title = hrefPost;
              posts[hrefPost] = [counter, title, new Array()];
            }
            posts[hrefPost][2].push(Array(hrefPost, id, author, published, content, hrefLink, avatar, uri));
          });
          var results_top = '<a name="TopCounterPat"/><div id="LatestCommentsBlock" style="font-size: large;">';
          results_top += '<p>' + numShowedComments + ' c&#7891;ng thu&#7897;c c&#225;c b&#224;i:</p>';
          results_top += '<p><span style="font-size: small;">';
          $.each(posts, function(key,val){
            results_top += val[0] + '. <a href="#CounterPat' + val[0] + '">' + val[1] + '</a>&nbsp;<span style="font-size: x-small; color: #9FC5E8;"><i>(' + getCounterPat(val[0]) + ')</i></span><br>';
          });
          results_top += '</span></p>';
          dataFullComments = {};
          var results_bottom = '';
          $.each(posts, function(key,val){
            counter = val[0];
            title = val[1];
            var pComments = val[2];
            var cmTotal = pComments.length;
            results_bottom += '<p><a name="CounterPat' + counter + '"/><h3>(' + counter + ') ' + title + '</h3></p>';
            $.each(pComments, function(i,item){
              var hrefPost = item[0];
              var id = item[1];
              var author = item[2];
              var published = item[3];
              var content = item[4];
              var hrefLink = item[5];
              var avatar = item[6];
              var uri = item[7];
              dataFullComments[id] = [uri, author, published, content, false];
              results_bottom += '<p><a href="' + hrefLink + '" target="_blank" title="Read more"><img src="' + avatar + '" width="24" height="24" border="0"/></a>&nbsp;<a href="javascript:void(0)" onclick="readFullComment(\'' + id + '\');" title="Read full comment"><b>' + author + '</b></a>&nbsp;<span style="font-size: x-small; color: #9FC5E8;"><i>(' + (i+1) + '/' + cmTotal + ')</i></span></p>';
              results_bottom += '<p><span id="cview-' + id + '">' + clearCustomTags(content.trim()) + '</span></p>';
              results_bottom += '<p><span style="font-size: small; color: #FF9900;">(' + showListedDate(published) + ')</span></p>';
            });
            results_top = results_top.replace(getCounterPat(counter), cmTotal);
          });
          results_bottom += '</div>';
          var results = results_top + results_bottom + "<br><hr>";
          $('#flickrapi-results').html(results);
          document.getElementById("flickrapi-index").value = Number(numStartIndex)+Number(numShowedComments);
        });//<getJSON>
      }//<flickrapi.function>
    }//<runFunc>
  }
})(jQuery);
//
//////////////////////////////////////////////////
//
function readFullComment(id){
  var cData = dataFullComments[id];
  if(cData){
    var uri = cData[0];
    var author = cData[1];
    var published = cData[2];
    var content = cData[3];
    var isFormated = cData[4];
    dataFullComments[id][4] = !isFormated;
    var text = "";
    if(isFormated){
      text = clearCustomTags(content.trim());
    }else{
      text = getStyledComment(uri, author, published, content.trim());
    }
    updateDivContent("cview-"+id, text);
  }
}
//
//////////////////////////////////////////////////
//
function getRecentCommentsFull(blogger_hostname,
csMaxResult, cMaxChar, cTooltipPat, cUseAvatar, cUseDeleted, rDivID){
  return getRecentComments(blogger_hostname,
  csMaxResult, cMaxChar, cTooltipPat, cUseAvatar, cUseDeleted, rDivID,
  true, true, 200, 26, 16,
  true);
}
//
// cTooltipPat: "[user] on [title] ([date])"
//
function getRecentComments(blogger_hostname,
csMaxResult, cMaxChar, cTooltipPat, cUseAvatar, cUseDeleted, rDivID,
bFullStyled, bFullStamped, numCmtPerPage, numAvaSize, numIcoSize,
bHideLoading){
  bFullStyled = bFullStyled || false;
  bFullStamped = bFullStamped || false;
  numCmtPerPage = numCmtPerPage || 200;
  numAvaSize = numAvaSize || 16;
  numIcoSize = numIcoSize || 10;
  bHideLoading = bHideLoading || false;
  blogger_hostname = blogger_hostname || window.location.hostname;
  if(!bHideLoading){
    var iLoading = '<img src="https://raw.githubusercontent.com/asinerum/project/master/images/loading.gif" />';
    //\\ $('#'+rDivID).html('<img src="https://raw.githubusercontent.com/asinerum/project/master/images/loading.gif" style="float:left;" />');
    document.getElementById(rDivID).innerHTML = iLoading;
  }
  ////\\\\
  var strPageParam = "commentPage";
  var strCmtAnchorHeader = "#c";
  var aComments = [];
  var aPosts = {};
  ////\\\\
  $.getJSON(
  "http://"+blogger_hostname+"/feeds/comments/default?redirect=false&max-results="+csMaxResult+"&start-index=1&alt=json-in-script&callback=?",
  {tags: "jquery,javascript", tagmode: "any", format: "json"},
  function(data){
    $.each(data.feed.entry, function(key,val){
      var id = val.id.$t.split("post-")[1]; //CommentID
      var blogID = val.id.$t.split("blog-")[1].split(".")[0];
      var postID = val["thr$in-reply-to"].ref.split("post-")[1];
      var hrefPost = val["thr$in-reply-to"].href;
      var uri = val.author[0].uri.$t;
      var author = val.author[0].name.$t;
      var avatar = val.author[0]["gd$image"].src;
      var published = val.published.$t;
      var content = val.content.$t;
      var hrefLink = ''; //Empty=Deleted
      var cpCount = 0; //InPostCmtCounter
      var onCount = 0; //PostCmtCount
      var onTitle = ""; //PostTitle
      for(var i=0; i<val.link.length; i++){if(val.link[i].rel=='alternate'){hrefLink=val.link[i].href;}}
      if(hrefLink||cUseDeleted){aComments.push(Array(id, blogID, postID, hrefPost, uri, author, avatar, published, content, hrefLink, cpCount, onCount, onTitle));}
    });
    var postCount = 0;
    var chkPostCount = 0;
    $.each(aComments, function(key,val){
      var postID = val[2];
      if(!aPosts[postID]){aPosts[postID]=true;postCount++;}
    });
    $.each(aPosts, function(postKey,postVal){
      chkPostCount++;
      $.getJSON(
      "http://"+blogger_hostname+"/feeds/"+postKey+"/comments/default?redirect=false&max-results="+csMaxResult+"&start-index=1&alt=json-in-script&callback=?",
      {tags: "jquery,javascript", tagmode: "any", format: "json"},
      function(data){
        var counter = 0;
        var onCount = data.feed.openSearch$totalResults.$t;
        var onTitle = data.feed.title.$t;
        $.each(data.feed.entry, function(key,val){
          counter++;
          var checkId = val.id.$t;
          for(var i=0; i<aComments.length; i++){
            if(checkId.match("post-"+aComments[i][0])){
              aComments[i][10] = counter;
              aComments[i][11] = onCount;
              aComments[i][12] = onTitle;
              break;
            }
          }
        });
        if(chkPostCount==postCount){
          var result = "";
          var lastPost = false;
          for(var i=0; i<aComments.length; i++){
            var id = aComments[i][0];
            var blogID = aComments[i][1];
            var postID = aComments[i][2];
            var hrefPost = aComments[i][3];
            var uri = aComments[i][4];
            var author = aComments[i][5];
            var avatar = aComments[i][6];
            var published = aComments[i][7];
            var content = aComments[i][8];
            var hrefLink = aComments[i][9];
            var cpCount = Number(aComments[i][10]);
            var onCount = Number(aComments[i][11]);
            var onTitle = aComments[i][12];
            if(isBL(uri,author,published)){continue;}
            if(!lastPost && onCount>0){lastPost=postID;}
            ////\\\\
            cpCount = onCount - cpCount + 1;
            if(onCount>0){var nPage=Math.ceil(cpCount/numCmtPerPage);} else {var nPage=exPageCmntPages[hrefPost.split('/')[4].split('.')[0]];}
            hrefPost = hrefPost + "?" + strPageParam + "=" + nPage + strCmtAnchorHeader + id;
            if(onCount<=0){var exTitle='<img src="'+urlIconPostC+'" width="'+numIcoSize+'"/>&nbsp;';}
            else if(lastPost!=postID){var exTitle='<img src="'+urlIconPostA+'" width="'+numIcoSize+'"/>&nbsp;';}
            else{var exTitle='';}
            //\\ else{var exTitle='<img src="'+urlIconPostB+'" width="'+numIcoSize+'"/>&nbsp;';}
            if(cUseAvatar){avatar='<a href="'+uri+'"><img src="'+avatar+'" width="'+numAvaSize+'" height="'+numAvaSize+'" border="0"/></a>&nbsp;';} else {avatar="";}
            if(!onTitle){
              //\\ onTitle = showListedPostHref(hrefPost);
              onTitle = hrefPost;
            }
            ////\\\\
            var sAuthor = bFullStyled ? '<span style="font-size: x-large;">' + author + '</span>' : '<u>' + author + '</u>';
            var sWindow = bFullStyled ? ' target="_blank" ' : '';
            var tooltip = cTooltipPat.replace('[user]',author).replace('[title]',onTitle).replace('[date]',showListedDate(published));
            var header = avatar + exTitle + '<a href="' + hrefPost + '" title="' + tooltip + '"' + sWindow + '>' + sAuthor + '</a>' + showVIP(uri, 1, numAvaSize, '&nbsp;', bFullStamped);
            if(bFullStyled){
              header = '<br/><br/>' + header;
              content = '<p>' + getStyledComment(uri, author, published, content) + '</p>';
            }else{
              content = clearCustomTags(content);
              content = content.replace(/<br[^>]*>/ig, " ");
              content = content.replace(/<\S[^>]*>/g, "");
              if(content.length>cMaxChar){
                content = content.substring(0, cMaxChar);
                var indexBreak = content.lastIndexOf(" ");
                content = content.substring(0, indexBreak)+'..';
              }
              content = '<br/>' + content + '<br/>';
            }
            ////\\\\
            var tPub = new Date(published.json2date());
            var tNow = new Date();
            var pMin = Math.ceil((tNow-tPub)/1000/60);
            var pHou = Math.floor(pMin/60);
            var pDay = Math.floor(pMin/60/24);
            var tShow = '';
            if(pMin<0){tShow = 'Long long';}
            else if(pMin<60){tShow = pMin + (pMin==1 ? ' min' : ' mins');}
            else if(pMin<1440){tShow = pHou + (pHou==1 ? ' hour' : ' hours');}
            else if(pMin<4320){tShow = pDay + (pDay==1 ? ' day' : ' days');}
            if(tShow!=''){
              var cCol = '#05A33D';
              if(tShow.match(/min/i)){cCol = '#F4400B';}
              else if(tShow.match(/hour/i)){cCol = '#FF9900';}
              tShow = '<font color="'+cCol+'">('+tShow+' ago)</font>';
            }
            var footer = tShow;
            result += '<div class="recent-comment-simple">'+header+content+footer+'</div>';
          }
          document.getElementById(rDivID).innerHTML = result;
        }
      });//<getJSON>
    });//LoopPosts
  });//<getJSON>
}
function getAuthorCmtCount(blogger_hostname, csMaxResult, csMinShow, scale, height, divID){
  if(!blogger_hostname){blogger_hostname=window.location.hostname;}
  //csMaxResult=1000cmts, csMinShow=10cmts, scale=2, height=10pcx
  var numCmtPerPage = 200;
  var aCmtCounts = {};
  var nLoad = Math.ceil(csMaxResult/numCmtPerPage);
  for(var i=0; i<nLoad; i++){
    var cIndex = (numCmtPerPage*i)+1;
    $.getJSON(
    "http://"+blogger_hostname+"/feeds/comments/default?redirect=false&max-results="+numCmtPerPage+"&start-index="+cIndex+"&alt=json-in-script&callback=?",
    {tags: "jquery,javascript", tagmode: "any", format: "json"},
    function(data){
      $.each(data.feed.entry, function(key,val){
        var author = val.author[0].name.$t;
        if(!aCmtCounts[author]){aCmtCounts[author]=1;}
        else{aCmtCounts[author]++;}
      });
      if(i>=nLoad-1){//FullLoaded
        cStats = sortObject(aCmtCounts, true, true);
        var result = '';
        $.each(cStats, function(key,val){
          if(val>csMinShow){
	    result += '<img src="https://lh4.googleusercontent.com/-mRXnbr50wbs/UN2N8XwO8CI/AAAAAAAACpM/YCIKlHlyKh8/s12/dot.gif" height="'+height+'" width="'+(val*scale)+'"/>&nbsp;<font color="brown">'+key+'</font>&nbsp;('+val+')<br/>';
          }
        });
        document.getElementById(divID).innerHTML = result;
      }
    });
  }
}
function getDailyCmtCount(blogger_hostname, csMaxResult, csDays, scale, height, divID){
  if(!blogger_hostname){blogger_hostname=window.location.hostname;}
  //csMaxResult=2000cmts, csDays=5days, scale=1, height=10pcx
  var numCmtPerPage = 200;
  var aCmtCounts = {};
  var dd = new Date();
  aCmtCounts[dd.toJDStr()] = 0;
  for(var i=0; i<csDays; i++){aCmtCounts[new Date(dd.addDays(-1)).toJDStr()] = 0;}
  var nLoad = Math.ceil(csMaxResult/numCmtPerPage);
  for(var i=0; i<nLoad; i++){
    var cIndex = (numCmtPerPage*i)+1;
    $.getJSON(
    "http://"+blogger_hostname+"/feeds/comments/default?redirect=false&max-results="+numCmtPerPage+"&start-index="+cIndex+"&alt=json-in-script&callback=?",
    {tags: "jquery,javascript", tagmode: "any", format: "json"},
    function(data){
      $.each(data.feed.entry, function(key,val){
        var JD = val.published.$t.split('T')[0];
        if(aCmtCounts[JD]>=0){aCmtCounts[JD]++;}
      });
      if(i>=nLoad-1){//FullLoaded
        var count = 0;
        $.each(aCmtCounts, function(key,val){if(val>0){count++;}});
        var result = '';
        var dayCount = 0;
        $.each(aCmtCounts, function(key,val){
          dayCount++;
          if(val>0 && dayCount<count){//IgoreLastResult
            result += '<img src="https://lh4.googleusercontent.com/-mRXnbr50wbs/UN2N8XwO8CI/AAAAAAAACpM/YCIKlHlyKh8/s12/dot.gif" height="'+height+'" width="'+(val*scale)+'"/>&nbsp;<font color="brown">'+key+'</font>&nbsp;('+val+')<br/>';
          }
        });
        document.getElementById(divID).innerHTML = result;
      }
    });
  }
}
//
//////////////////////////////////////////////////
//
function showArchiveOption(){
  var thisday = new Date();
  var thisyear = thisday.getFullYear();
  var startyear = 2008;
  for(var i=thisyear; i>=startyear; i--){
    document.write('<input type="image" src="http://asinerum-gae.appspot.com/static/icon_go.gif" onclick="getArchiveIndex('+i+');"/>\r\n'+i+'<br/>');
    document.write('<div class="bwa-archive" id="divArchive'+i+'"></div><br/>');
  }
}
function getArchiveIndex(year){
  /// var window_location_hostname = 'an-hoang-trung-tuong-2014.blogspot.com';
  var window_location_hostname = window.location.hostname;
  var timezone = '07:00';
  var published_min = year+'-01-01T00:00:00%2B'+timezone;
  var published_max = year+'-12-31T23:59:59%2B'+timezone;
  var divArchive = '#divArchive'+year;
  $(divArchive).html('<img src="https://asinerum-gae.appspot.com/static/icon_loading.gif">');
  $.getJSON(
  'http://'+window_location_hostname+'/feeds/posts/summary?redirect=false&published-min='+published_min+'&published-max='+published_max+'&max-results=200&start-index=1&alt=json-in-script&callback=?',
  {tags: 'jquery,javascript', tagmode: 'any', format: 'json'},
  function(data){
    var archive = '<br/>';
    var posts = data.feed.entry.length;
    $.each(data.feed.entry, function(key,val){
      var hrefPost = '';
      for(var i=0; i<val.link.length; i++){
        if(val.link[i].rel=='alternate'){hrefPost=val.link[i].href;};
      }
      var published = val.published.$t.split('T')[0];
      var title = val.title.$t;
      var label = val.category[0].term;
      var author = val.author[0].name.$t;
      archive += '{'+posts+'} <a target="_blank" href="'+hrefPost+'">'+title+'</a><br/><span style="color: #FF9900;">'+published+' '+label+'&nbsp;<a href="http://'+window_location_hostname+'/search/label/'+label+'">&raquo;</a></span><br/>';
      posts--;
    });
    $(divArchive).html(archive);
  });
}
//
//////////////////////////////////////////////////
//
jQuery(document).ready(function($){
  JQFUNCTIONS.init();
});
//
//////////////////////////////////////////////////