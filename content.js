var script = document.createElement('script');
script.onload = function() {
  setTimeout(function() {
    let id = chrome.runtime.id;
    // console.log(id);
    location.href=`javascript:extensionConnect("${id}"); void 0`;
  }, 1000);
}
script.type = 'text/javascript';
script.src = chrome.extension.getURL('myscript.js');

document.getElementsByTagName('head')[0].appendChild(script);
chrome.runtime.sendMessage({todo:"showPageAction"});

$('.mbm').each(function(){

  var ele = $(this).find('._5pcp').find('span.fsm.fwn.fcg').find('a').attr('href');
  
  if(ele)
    $(this).find('.t_qdpyotemq').append('<button id="watch-trailer"  style="margin-top:-5px" class="" onclick="buttonFunction(\''+ele+'\')" ><span class="">fuck</button>');
});

$('body').on('DOMNodeInserted', function (e) {

  var target = e.target; //inserted element;
  if ($(e.target).hasClass("mbm")) {
    var ele = $(target).find('._5pcp').find('span.fsm.fwn.fcg').find('a').attr('href');
    if(ele)
    $(target).find('.t_qdpyotemq').append('<button id="watch-trailer"  style="margin-top:-5px" class="" onclick="buttonFunction(\''+ele+'\')" ><span class="">fuck</button>');
  }

});
