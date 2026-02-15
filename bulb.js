var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var flag = 0;

btn.addEventListener('click',function(){
    if(flag===0){
    bulb.style.backgroundColor="Yellow";
    btn.innerHTML="OFF"
    flag=1;
    console.log("ON");
    }
    else {
       bulb.style.backgroundColor="Grey";
    btn.innerHTML="ON"
    flag=0; 
    console.log("OFF");
    }
})