window.onscroll = function() {btt()};

let phone=document.getElementById("phone")
let cam1=document.getElementById("cam1")
let cam2=document.getElementById("cam2")
let front=document.getElementById("front")
let back=document.getElementById("back")
let logo_img=document.getElementById("logo_img")
let logo=document.getElementById("logoimg")
let header=document.getElementById("header")
  function btt() {
  if (document.body.scrollTop > 20|| document.documentElement.scrollTop > 20)

   {header.style.boxShadow="3px 8px 15px -11px black";}
  else{
    header.style.boxShadow="none"
  }

  if (document.body.scrollTop > 120|| document.documentElement.scrollTop > 120){
     header.classList.add("change_header")
    logo.style.transform="rotate(360deg)"
    logo_img.classList.add("move_logo_img")
  }
  else{
    header.classList.remove("change_header")
   logo.style.transform="rotate(0deg)"
   logo_img.classList.remove("move_logo_img")
  }

 if (document.body.scrollTop > 40|| document.documentElement.scrollTop > 40){
  front.classList.add("move_front")
  back.classList.add("move_back")
  }
  else{
    front.classList.remove("move_front")
    back.classList.remove("move_back")
    }
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550){ 
     cam1.classList.add("move_cam1")
     cam2.classList.add("move_cam2")
  }
  else{
    cam1.classList.remove("move_cam1")
    cam2.classList.remove("move_cam2")
  }
if (document.body.scrollTop > 1050|| document.documentElement.scrollTop > 1050){
    phone.classList.add("phone_animation")
  }
else{
  phone.classList.remove("phone_animation")
}
  }

  //================== burger icon and burger menu function

 let label=document.getElementById("label")  
 let burger_menu=document.getElementById("burger_menu") 
 label.addEventListener("click", function(){
      label.classList.toggle("active")
      burger_menu.classList.toggle("move_burger_menu")
 })
 
 

            
