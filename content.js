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
  //find('span.fwb.fcg') can find the post person
  var ele = $(this)/*.find('.b_1m--tzv75p')*/.find('span.fsm.fwn.fcg').find('a').attr('href');
  if(ele)
    $(this).find('._3x-2').append('<button id="watch-trailer"  style="margin-top:-5px" class="" onclick="buttonFunction(\''+ele+'\')" ><span class="">fuck</button>');
});

//<div class="b_1m--tzv75p.u_1m--tzrkdc.clearfix"><div class="clearfix.t_1m--tzv65k">

$('body').on('DOMNodeInserted', function (e) {

  var target = e.target; //inserted element;
  if ($(e.target).hasClass("mbm")) {
    var ele = $(target)/*.find('.b_1m--tzv75p')*/.find('span.fsm.fwn.fcg').find('a').attr('href');
    if(ele)
    $(target).find('._3x-2').append('<button id="watch-trailer"  style="margin-top:-5px" class="" onclick="buttonFunction(\''+ele+'\')" ><span class="">fuck</button>');
  }

});
