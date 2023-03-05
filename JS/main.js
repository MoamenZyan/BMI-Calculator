

//function to round up the bmi 

function roundToTwo(num) {
	return + (Math.round(num + "e+6")  + "e-2");
}

//making result function

let btn=document.querySelector(".result_btn");
let reset=document.querySelector("[type='reset']");
btn.onclick=function(){

  //declaring inputs value
  
let x =document.querySelector("[name = 'age']").value;
  let y =document.querySelector("[name = 'weight']").value;
  let z =document.querySelector("[name = 'height']").value;
  //if one of the fields is empty
  result="NaN";
  if(x ==="" || y==="" || z===""){
    document.querySelector(".title").textContent=" complete the form please !";
    document.querySelector(".bmi").textContent="";
  }else{
  result= (parseInt(y)/(parseInt(z)*parseInt(z)));
  }
    
  

  document.querySelector(".bmi").textContent=roundToTwo(result).toFixed(1);
  

  //bmi categorie
  
  if(result<0.00185){
    document.querySelector(".title").textContent = "You Are UnderWeight";
  }else if(result<0.00249){
    document.querySelector(".title").textContent=" You Are Normal";
  }else if(result<0.00299){
    document.querySelector(".title").textContent=" You Are OverWeight";
  }else if(result<0.00349){
    document.querySelector(".title").textContent=" You Are Obese";
  }else if(result>0.00349)
  document.querySelector(".title").textContent=" You Are Extreme Obese";
}

//making reset fucntion

reset.onclick=function (){
  document.querySelector(".bmi").textContent="";
  document.querySelector(".title").textContent="";
}