// ローカルストレージが設定されていない場合は初期化する。
if (localStorage['icon'] === undefined) {
  localStorage['icon'] = 'off';
}

// 起動時にローカルストレージの値を見てアイコンを設定する。
chrome.browserAction.setIcon({path:"img/icon_"+localStorage['icon']+".png"});
if(localStorage['icon']==="on"){
  chrome.browserAction.setBadgeText({text : localStorage['icon'].toUpperCase()});
}else{
  chrome.browserAction.setBadgeText({text : ""});
}

//メッセージリスナー
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request === "icon") {
      sendResponse(localStorage['icon']);
    }
});

// アイコンがクリックされた場合、ローカルストレージを変更して、アイコンも変更する。
chrome.browserAction.onClicked.addListener(function(tab) {
  if (localStorage['icon'] === 'off') {
    localStorage['icon'] = 'on'
    //window.showOGImage()
  } else {
    localStorage['icon'] = 'off'
  }
  chrome.browserAction.setIcon({path:"img/icon_"+localStorage['icon']+".png"});
  if(localStorage['icon']==="on"){
    chrome.browserAction.setBadgeText({text : localStorage['icon'].toUpperCase()});
  }else{
    chrome.browserAction.setBadgeText({text : ""});
  }

});
