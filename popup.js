

function findImg(){
    alert(window.location.href)
}

document.addEventListener("DOMContentLoaded", function(){
    scanBtn = document.getElementsByTagName('button')[0];
    scanBtn.addEventListener('click', findImg);
  });
