var port = chrome.runtime.connect("obegcjnoangfgddbdkhnogkibphnifgb");

function buttonFunction(e){
    console.log("clicked!");
    console.log(e);

    port.postMessage(e);
}
