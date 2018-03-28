chrome.runtime.sendMessage({todo: "showPageAction"});

(function(window, $, undefined){  

    $('._5x46').append('<br><br><span class="btnWrap mltBtn mltBtn-s60"><a id="watch-trailer" href="javascript:void(0);" style="margin-top:-5px" class="svf-button svfb-silver addlk evo-btn svf-button-inq save2add"><span class="inr">Watch Trailer</span></a></span>');
  
  })(window, jQuery);
  $('body').on('DOMNodeInserted',function(e){
    var target = e.target; //inserted element;
    if ($(e.target).hasClass("mbm")){
      
      $(e.target).find('._5x46').append('<br><br><span class="btnWrap mltBtn mltBtn-s60"><a id="watch-trailer" href="javascript:void(0);" style="margin-top:-5px" class="svf-button svfb-silver addlk evo-btn svf-button-inq save2add"><span class="inr">Watch Trailer</span></a></span>');
    }

});