let loading = false;

function findImg(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var jsonUrl = JSON.stringify(url);
        alert(jsonUrl);
        loading = true;
        let loader = `<div class="boxLoading"></div>`;
        document.getElementsByTagName('button')[0].innerHTML = loader;
        fetch('/hello', {
            method: 'POST',
            body: jsonUrl
            })
        }).then(function (response) {
            return response.text();
        }).then(function (text) {
            document.getElementsByTagName('button')[0].innerHTML = "done";
            alert('POST response: ' + text);
        });

};


document.addEventListener("DOMContentLoaded", function(){
    scanBtn = document.getElementsByTagName('button')[0];
    scanBtn.addEventListener('click', findImg);
  });
