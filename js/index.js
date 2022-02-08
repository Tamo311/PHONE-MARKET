// --------------- select all input for focus border animation

let input=document.querySelectorAll("input")

input.forEach((item)=>{
    item.addEventListener("keyup",()=>{
        item.setAttribute("value", item.value)
    })
})

///================== function  show & hide password  value 

let check_password=document.querySelectorAll(".password")
let show_passw=document.querySelectorAll(`.show_password`)
let hide_passw=document.querySelectorAll(".hide_password")

for(let i=0; i<check_password.length;i++){
   check_password[i].addEventListener("keypress",()=>{
         hide_passw[i].style.display="block"
         show_passw[i].style.display="none"
         check_password[i].type="password"
    })
}
for(let i=0; i<hide_passw.length;i++){
    hide_passw[i].addEventListener("click",()=>{
        show_passw[i].style.display="block"
        hide_passw[i].style.display="none"
        check_password[i].type="text"
    })
}
for(let i=0; i<show_passw.length;i++){
    show_passw[i].addEventListener("click",()=>{
        show_passw[i].style.display="none"
        hide_passw[i].style.display="block"
        check_password[i].type="password"
    })
}

///======================= show registration form

let registration=document.getElementById("registration")
let container=document.getElementById("container")
let show_reg_form=document.getElementById("show_reg_form")
show_reg_form.addEventListener("click", ()=>{
    container.style.transform="scale(.8)"
    container.style.filter="blur(5px)"
   registration.style.display="block"
})

// ===================== registration form validation function

let form=document.getElementById("reg_form")
let user=document.getElementById("userName")
let age=document.getElementById("age")
let email=document.getElementById("email")
let password=document.getElementById("password")
let confirm_password=document.getElementById("confirm_password")
   let span1=document.getElementById("name_warning")
   let span2=document.getElementById("age_warning")
   let span3=document.getElementById("email_warning")
   let span4=document.getElementById("passw_warning")
   let span5=document.getElementById("conf_passw_warning")
 
   let arr=[]
   let counter=1
form.addEventListener("submit",validation) 

function validation(e){
     e.preventDefault()
    let mystatus=false
//----------- check input name
    if( user.value ===""){
        span1.style.opacity="1"
        mystatus=false
    }
    else{
        span1.style.opacity="0"
         mystatus=true
    }
//--------------------check input age   
     if(age.value===""){
        span2.style.opacity="1"
        mystatus=false
    }
    else{
        span2.style.opacity="0"
    }
//---------------check input email 
 let x=email.value 
 let A_position=x.indexOf("@")
 let dot_position=x.lastIndexOf(".") 

    if(email.value===""){
        span3.style.opacity="1"
        mystatus=false
    }
    else if (A_position<1 || dot_position<A_position+2 || dot_position+2>=x.length){
        span3.style.opacity="1"
        span3.innerHTML=`<i class="fas fa-exclamation-circle" ></i> valid email must contain "@", "." `
        mystatus=false
    }
    else{
        span3.style.opacity="0"
    }
//------------check input password
    if(password.value===""){
        span4.style.opacity="1"
        mystatus=false
    }
    else if(password.value.length<8){
        span4.style.opacity="1"
        span4.innerHTML=`<i class="fas fa-exclamation-circle" ></i> must contain at least 8 symbols `
        mystatus=false
    }
    else{
        span4.style.opacity="0"
    }
//------------check input confirm password
     if(confirm_password.value===""){
        span5.style.opacity="1"
        mystatus=false
    }
    else if(confirm_password.value!==password.value){
        span5.style.opacity="1"
        span5.innerHTML=`<i class="fas fa-exclamation-circle" ></i> password doesn't match `
        mystatus=false
    }
    else{
        span5.style.opacity="0"
    }
    // if succsessfully complate validation appear succsess div 
   if( mystatus==true){
    document.getElementById("loading").style.display="flex"
    setTimeout(loadingSuccsess, 5000)

 //----------------- save input information in local storage ---------------
        let user_info={
            id:counter++,
            user_email:email.value,
            user_password:password.value,
            }
            arr.push(user_info)
            localStorage.setItem('user', JSON.stringify(arr))
   }
   else{  
    document.getElementById("succsess").style.display="none" 
    document.getElementById("loading").style.display="none"
   }
     return mystatus  
   }

  function loadingSuccsess(){
    document.getElementById("succsess").style.display="block"
    document.getElementById("loading").style.display="none"
  }


// ------------------login form validation function-------------------

let user_email=document.getElementById("user_email")
let user_password=document.getElementById("user_password")
let password_span=document.getElementById("password_span")
let email_span=document.getElementById("email_span")
function loginValidation(){
    let mystatus=false
    //------------------  get information from local storage
     let userInfo=JSON.parse(localStorage.getItem(`user`)) 
     for(let i=0; i<userInfo.length;i++){
            //check login email
            if(user_email.value==""){
                email_span.style.opacity="1"
                mystatus=false
             }
             else if( user_email.value!==userInfo[i].user_email){
                 email_span.style.opacity="1"
                 email_span.innerHTML=`<i class="fas fa-exclamation-circle" ></i> incorrect email address `
                 mystatus=false
             }
             else{
                 email_span.style.opacity="0"
                 mystatus=true
             }
             // check login password
             if( user_password.value==""){
                password_span.style.opacity="1"
                mystatus=false
             }
             else if( user_password.value!==userInfo[i].user_password){
                 password_span.style.opacity="1"
                 password_span.innerHTML=`<i class="fas fa-exclamation-circle" ></i> incorrect password`
                 mystatus=false
             }
             else{
                 password_span.style.opacity="0"
             }
      }
        if(mystatus===true){
        login_form.setAttribute("action","./main.html")
     }
       return mystatus
    }
