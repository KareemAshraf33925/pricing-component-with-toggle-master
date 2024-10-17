var basic_price=document.querySelector(".basic_price");
var professional_price=document.querySelector(".professional_price");
var master_price=document.querySelector(".master_price");
var checkbox=document.getElementById("checkbox");
var toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
    if(checkbox.checked == true){
        basic_price.innerHTML="$"+199.99;
        professional_price.innerHTML="$"+249.99;
        master_price.innerHTML="$"+399.99;
    }else{
        basic_price.innerHTML="$"+19.99;
        professional_price.innerHTML="$"+24.99;
        master_price.innerHTML="$"+39.99;
    }
})