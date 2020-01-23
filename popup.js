let changeColor = document.getElementById('scan-button');

console.log("js file")

changeColor.onclick = function(element) {
    console.log(window.location.href)
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };