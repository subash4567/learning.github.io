let navbar=document.getElementById("sidebar");
let open=document.getElementById("open");
open.onclick=()=>{
   if(navbar.style.height==="0px"){
       navbar.style.height="300px";
     

   }else{
       navbar.style.height="0px";
   }
}