function getDomainFromUrl(url){
     var host = "null";
     if(typeof url == "undefined" || null == url)
          url = window.location.href;
     var regex = /.*\:\/\/([^\/]*).*/;
     var match = url.match(regex);
     if(typeof match != "undefined" && null != match)
          host = match[1];
     return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
     if(getDomainFromUrl(tab.url).toLowerCase()=="wootalk.today"){
          chrome.pageAction.show(tabId);
     }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
console.log("background page ready");

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null,
                           {code:"$('input[type=file]').trigger('click')"});
});