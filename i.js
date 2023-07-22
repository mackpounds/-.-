var chevDown = document.querySelector('.chev');
let menUl = document.querySelector('.more_ul');
let shift = document.querySelectorAll('.shift');
let body = document.querySelector('body');
let icon = document.querySelectorAll('.icon');
let navUl = document.querySelector('.nav_ul');
let toggler = document.querySelector('.toggle');
let followCheck = document.querySelector('.love');
let input = document.querySelectorAll('.textup')
let or = document.querySelector('#or');
let spaner = document.querySelector('.spantheme');
let passWord = document.querySelector('.password');
let footerLine = document.querySelector('#footer_line');
let backPics = document.querySelectorAll('.back-pics');
let nameP = document.querySelectorAll('#name-p')
let menuClick =document.querySelector('.menu-clicks');
let instaImg = document.querySelectorAll('.insta-img');
let menu = document.querySelector('menus');
let first = document.querySelector('.first_profile');




  chevDown.addEventListener('click', () =>{
      menUl.classList.toggle('active');
  })
  
   for (let i = 0; i < shift.length; i++){
       shift[i].addEventListener('click', () =>{
       shift[i].classList.toggle('is-toggled');
       toggler.classList.toggle('is-toggled');
       body.classList.toggle('theme');
       for (let y = 0; y < icon.length; y++){
       icon[y].classList.toggle('theme');
       }
       for (let m = 0; m < input.length; m++){
       input[m].classList.toggle('theme');
       }
       navUl.classList.toggle('theme');
       or.classList.toggle('theme');
       spaner.classList.toggle('theme');
       footerLine.classList.toggle('theme');
       passWord.classList.toggle('theme');
       for (let t = 0; t < backPics.length; t++){
           backPics[t].classList.toggle('theme');
       }
       for (let b = 0; b < nameP.length; b++){
           nameP[b].classList.toggle('theme');
       }
       for (let c = 0; c < instaImg.length; c++){
           instaImg[c].classList.toggle('theme');
       }
       menuClick.classList.toggle('theme');
       })
   };
   
   let one = document.querySelector('.o-1');
  let two = document.querySelector('.o-2');
  let three = document.querySelector('.o-3');
  let four = document.querySelector('.o-4');
  let stray = document.querySelectorAll('.stray');
   let elements = document.querySelectorAll('.element');
       one.addEventListener('click', function(){
           one.classList.toggle('active');
 for (let t = 0; t < backPics.length; t++){
           backPics[t].classList.toggle('active');
       }   
       first.classList.toggle('active');
       body.classList.toggle('theme');
       });
   two.addEventListener('click', function(){
           two.classList.toggle('active');
 for (let t = 0; t < backPics.length; t++){
           backPics[t].classList.toggle('active');
       }
       for (let c = 0; c < stray.length; c++){
           stray[c].classList.toggle('active');
       }
              body.classList.toggle('theme');

   }); 
   three.addEventListener('click', function(){
           three.classList.toggle('active');
 for (let t = 0; t < backPics.length; t++){
           backPics[t].classList.toggle('active');
       }
       for (let c = 0; c < stray.length; c++){
           stray[c].classList.toggle('active');
       }
       body.classList.toggle('theme');

   });
   four.addEventListener('click', function(){
        four.classList.toggle('active');
           for (let t = 0; t < backPics.length; t++){
           backPics[t].classList.toggle('active');
       }
        for (let c = 0; c < stray.length; c++){
           stray[c].classList.toggle('active');
       }
       body.classList.toggle('theme');
   });
  

let passInput = document.querySelector('#passInput');
   passInput.addEventListener('click', () =>{
       if(passWord.type === 'password'){
        passWord.type = 'text';
        passInput.className = 'fa fa-eye-slash';
       }
      else{
       passWord.type = 'password';
       passInput.className = 'fa fa-eye';
      }
   });
   
   
   
  let email = document.querySelector('.email');
  let badEmail = document.querySelector('#badEmail');
  let badPass = document.querySelector('#badPass');
  let btn = document.querySelector('#btn_log');
  let login = document.getElementById('logins');
   

    
   email.addEventListener('input', () =>{
    if(email.value.length <= 4){
         badEmail.innerHTML = 'The username you entered should contain a valid name, number or email.';
     }
     else if(email.value == ''){
         badEmail.innerHTML = '';
     }
     else if(email.value.length >= 5){
         badEmail.innerHTML = '';
     }
     });
    
    let specialC = '/$&@!?.,;%#*+=€•~';
    let numbers = '1234567890';
    let len = 8;
    
  passWord.addEventListener('input', () =>{
    let through = document.getElementById('password').value;
    leng(through);
      //number
   let nb = num(through);
      if(nb){
          document.getElementById('number').innerHTML = 
         `<img src="https://i.postimg.cc/hjn9M29z/right-Copy.png" height="15px">` +
            `<sup> Minimum 1 Number</sup>`;
      }else if(passWord.value == ""){
          document.getElementById('number').innerHTML = "";
      }else{
          document.getElementById("number").innerHTML = 
         `<img src="https://i.postimg.cc/sxFbndTP/wrong-sign-Copy.jpg" height="15px">` +
        `<sup> Minimum 1 Numbers</sup>`;
      }
       
      //specialC
   let sp = special(through);
      if(sp){
          document.getElementById('special_c').innerHTML = 
          `<img src="https://i.postimg.cc/hjn9M29z/right-Copy.png" height="15px">` +
          `<sup> Minimum 1 character</sup>`;
      }else if(passWord.value == ""){
          document.getElementById('special_c').innerHTML = "";
      }else{
          document.getElementById('special_c').innerHTML =
         `<img src="https://i.postimg.cc/sxFbndTP/wrong-sign-Copy.jpg" height="15px">` +
          `<sup> Minimum 1 character</sup>`;
      }
  });
  
  //length
  function leng(through){
        if (passWord.value == "") {
          document.getElementById("length").innerHTML = "";
        } else if (passWord.value.length < 8) {
          document.getElementById("length").innerHTML =
            `<img src="https://i.postimg.cc/sxFbndTP/wrong-sign-Copy.jpg" alt="alternatetext" height="15px">` +
            `<sup> Minimum 8 max-length values.</sup>`;
        } else {
          document.getElementById("length").innerHTML =
            `<img src="https://i.postimg.cc/hjn9M29z/right-Copy.png" height="15px">` +
            `<sup> Minimum 8 max-length values.</sup>`;
        }
  }
  //Number
  function num(through){
      for (let i = 0; i < through.length; i++){
          for (let j = 0; j < numbers.length; j++){
            if (through[i] == numbers[j]){
                return true;
            }
          }
        }
      return false;
   }
   //special_c
   function special(through){
      for (let i = 0; i < through.length; i++){
          for (let j = 0; j < specialC.length; j++){
            if (through[i] == specialC[j]){
                return true;
            }
          }
        }
      return false;
   }
   let intro = document.getElementById('intro');
  function myActive(){
      if(passWord.value.length >= 8 && email.value.length >= 5){
          console.log('Your username-email-number is:  \"' + email.value + '\" \n Your password is:  \"' + passWord.value + '\"');
          login.classList.add('active');
          intro.classList.add('onlogged');
          menu.classList.add('active');
      }
      else if(email.value.length < 4){
         badEmail.innerHTML = 'The username you entered should contain a valid name, number or email.';
      }
      else if(passWord.value.length < 8){
          badPass.innerHTML = 'You have to enter at least 1 charater, number and above 8 alphabets.';
      }
      else{
          return false;
      }
  }
  
  function submit(flag){
      if(flag){
          console.log('ok')
      }
      else{
          console.log('no')
      }
  }
  
 document.getElementById('file').onchange = function(){
      var url = URL.createObjectURL(this.files[0]);
        first.style.background = "url("+ url +")";
        first.style.backgroundSize = "100% auto";
        first.style.backgroundRepeat = "no-repeat";
        first.style.backgroundPosition = "center top";
 };
