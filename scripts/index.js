
/*
window.onload = function(){

  let pass = window.prompt("Please Enter Password");
  while(true){
    if(pass === "time"){
      break;
    }
    else{    
      pass = window.prompt("Wrong PW, Please Re-enter Password");
    }
  }
}
*/

function changeBackground(oriBackgroundImg, hoverBackgroundImg, flag){
    let el = document.querySelector(flag);
    let sec = "0.7s";
    el.addEventListener("mouseover", addHoverBackground);
    el.addEventListener("mouseout", addOutBackground);

    function addHoverBackground(){
        el.style.background = "url('" + hoverBackgroundImg + "') no-repeat center";
        el.style.backgroundSize = "cover";
        el.style.transition = sec;
    }

    function addOutBackground(){
        el.style.background = "url('"+oriBackgroundImg+"') no-repeat center";
        el.style.backgroundSize = "cover";
        el.style.transition = sec;
    }
}

let img_org_first = "./../images/628/1.jpg";
let img_hover_first = "./../images/628/7.jpg";
let flag_first = ".first-back";
changeBackground(img_org_first,img_hover_first, flag_first);
let img_org_sec = "./../images/629/4.jpg";
let img_hover_sec = "./../images/629/5.jpg";
let flag_sec = ".second-back";
changeBackground(img_org_sec,img_hover_sec, flag_sec);
let img_org_third = "./../images/630/3.jpg";
let img_hover_third = "./../images/630/18.jpg";
let flag_third = ".third-back";
changeBackground(img_org_third,img_hover_third, flag_third);
