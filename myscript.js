var port = "";

function extensionConnect(extensionId) {
  //console.log(extensionId);
  port = chrome.runtime.connect(extensionId);
}
function buttonFunction(e,voter){
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