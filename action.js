chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ 'url': 'https://github.com/vivirenremoto/play-remake' });
});

