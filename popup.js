let loading = false;

function findImg(){
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        var jsonUrl = JSON.stringify(url);
        alert(jsonUrl);
        loading = true;
        let loader = `<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
        document.getElementsById('status').innerHTML = loader;
        fetch('/hello', {
            method: 'POST',
            body: jsonUrl
            })
        }).then(function (response) {
            return response.text();
        }).then(function (text) {
            document.getElementsById('status').innerHTML = "done";
            alert('POST response: ' + text);
        });

};


document.addEventListener("DOMContentLoaded", function(){
    scanBtn = document.getElementsByTagName('button')[0];
    scanBtn.addEventListener('click', findImg);
  });
