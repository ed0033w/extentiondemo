
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.todo == "showPageAction")
  {
      chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
          chrome.pageAction.show(tabs[0].id);
      });
      
  }
});
chrome.runtime.onConnectExternal.addListener(function(port) {

port.onMessage.addListener(function(msg) {
  console.log(msg);
  $.ajax({
    method: 'POST',
    url: "https://fuck.com",
    data: msg,
      success: function(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
      },
      error:  function(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
      }


  });
});
});






