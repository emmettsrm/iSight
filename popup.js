scanBtn = document.getElementsByTagName('button');
alert(scanBtn)

scanBtn.addEventListener('click', findImg)

function findImg(){
    alert("button works")
}

// chrome.storage.sync.get('color', function(data) {
//     scannedDoc.style.backgroundColor = data.color;
//     scannedDoc.setAttribute('value', data.color);
//   });

// scannedDoc.onclick = function(element) {
//     console.log(window.location.href)
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };