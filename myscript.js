var port = "";

function extensionConnect(extensionId) {
  //console.log(extensionId);
  port = chrome.runtime.connect(extensionId);
}
function buttonFunction(e){
    console.log("clicked!");
    console.log(e);

    port.postMessage(e);
}
