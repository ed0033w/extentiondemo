var port = "";

function extensionConnect(extensionId) {
  //console.log(extensionId);
  port = chrome.runtime.connect(extensionId);
}
function buttonFunction(e,voter){
    
    alert("使用者:"+voter+"\n投票文章連結:"+"www.facebook.com"+e+"\n感謝您的投票!!");
    //$(".vote-button").attr( "disabled", "disabled" );
    
    console.log("clicked!");
    console.log(e);
    console.log(voter);
    var info = {
      username: voter,
      link: e
    }
    port.postMessage(info);
}
// FB那邊的