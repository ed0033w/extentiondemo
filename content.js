var script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('myscript.js');
document.getElementsByTagName('head')[0].appendChild(script);


$('.mbm').each(function(){
  var ele = $(this).find('._5pcp').find('span.fsm.fwn.fcg').find('a').attr('href');
  if(ele)
    $(this).find('._5x46').append('<button id="watch-trailer"  style="margin-top:-5px" class="" onclick="buttonFunction(\''+ele+'\')" ><span class="">fuck</button>');
});

$('body').on('DOMNodeInserted', function (e) {
  var target = e.target; //inserted element;
  if ($(e.target).hasClass("mbm")) {
    var ele = $(target).find('._5pcp').find('span.fsm.fwn.fcg').find('a').attr('href');
    if(ele)
    $(target).find('._5x46').append('<button id="watch-trailer"  style="margin-top:-5px" class="" onclick="buttonFunction(\''+ele+'\')" ><span class="">fuck</button>');
  }

});
