chrome.runtime.onInstalled.addListener(function() {
 chrome.contextMenus.create({
      id: 'aa',
      title: 'Karl Marx',
      type: 'normal',
      contexts: ['selection'],
    });

});
