

function findImg(){
    alert("button works")
}

document.addEventListener("DOMContentLoaded", function(){
    scanBtn = document.getElementsByTagName('button');
    alert(scanBtn)
    scanBtn.addEventListener('click', findImg);
  });
