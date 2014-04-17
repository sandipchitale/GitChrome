chrome.app.runtime.onLaunched.addListener(function() {
     chrome.app.window.create('gitchrome.html', {
         'width' : 1000,
         'height' : 500
     });
}); 