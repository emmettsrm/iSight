

function findImg(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var jsonUrl = JSON.stringify(url);
        alert(jsonUrl);
        fetch('/hello', {
            method: 'POST',
            body: jsonUrl
            })
        }).then(function (response) {
            return response.text();
        }).then(function (text) {
            alert('POST response: ' + text);
        });

};


document.addEventListener("DOMContentLoaded", function(){
    scanBtn = document.getElementsByTagName('button')[0];
    scanBtn.addEventListener('click', findImg);
  });
