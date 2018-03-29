var script = document.createElement('script');
script.type = 'text/javascript';
script.src = chrome.extension.getURL('myscript.js');
document.getElementsByTagName('head')[0].appendChild(script);
chrome.runtime.sendMessage({todo: "showPageAction"});



(function(window, $, undefined){  
  
    $('._5x46').append('<button id="watch-trailer"  style="margin-top:-5px" class="" onclick="buttonFunction()" ><span class="">fuck</button>');
    
  })(window, jQuery);
  $('body').on('DOMNodeInserted',function(e){
    var target = e.target; //inserted element;
    if ($(e.target).hasClass("mbm")){
      
      $(e.target).find('._5x46').append('<button id="watch-trailer" style="margin-top:-5px" class=""   window.location.href="www.google.com"   ><span class="">fuck</button>');
      
    }

});

