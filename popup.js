

function findImg(){
    alert("button works")
}

document.addEventListener("DOMContentLoaded", function(){
    scanBtn = document.getElementsByTagName('button')[0];
    alert(scanBtn)
    scanBtn.addEventListener('click', findImg);
  });
