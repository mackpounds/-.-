const form = document.querySelector("[data-multi-set]")
const formSteps = [...form.querySelectorAll("[data-set-form]")]
const progressBar = document.querySelector("[data-progress-bar]")
const progress = document.querySelector("[data-progress]")
const progresSteps = progressBar.querySelectorAll("[data-progress-step]")


let formStepNum = 
     formSteps.findIndex(formStep => {
        return formStep.classList.contains("active-form")
     })

if (formStepNum < 0) {
    formStepNum = 0
    updateFormStep()
    updateProgressBar()
}


let incrementor 
let inputs = [...form[formStepNum].querySelectorAll("input")]
let allValid = inputs.every(input => input.reportValidity())


form.addEventListener("click", e =>{
 
   
    if (e.target.matches("[data-prev-btn]")) {
        incrementor = -1
        
        formStepNum += incrementor
        updateFormStep()
        updateProgressBar()
     }
     if (incrementor == null) return

})


function updateFormStep() {
    formSteps.forEach((formStep, index) => {
       formStep.classList.toggle("active-form", index === formStepNum)

    })

}

function updateProgressBar() {
    progresSteps.forEach((progresStep, index) => {
        if(index < formStepNum + 1) {
            progresStep.classList.add("progress-step-active")
        }else{
            progresStep.classList.remove("progress-step-active")
        }
    })

    const progressActive = document.querySelectorAll(".progress-step-active")
    progress.style.width = ((progressActive.length - 1) / (progresSteps.length - 1)) * 100 + "%"
}


  
/////////////////////////////////////////


var firstNxtBtn = document.getElementById("nxt-btn-one")
    firstNxtBtn.addEventListener("click", () => {
        incrementor = 1
       
        let name = document.getElementById("name")
        let email = document.getElementById("email")
        if (!name.value || name.value == "" || name.value == null) {
            document.getElementById("error-name-js").style.display = "block"
            document.getElementById("error-name-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> Please fill out this field e.g Jane Doe.`
            document.getElementById("error-name-js").classList.toggle("active")
        }
        
        if (!email.value || email.value == "" || email.value == null) {
            document.getElementById("error-email-js").style.display = "block"
            document.getElementById("error-email-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> This input field should have @ and a domain to continue.`
            document.getElementById("error-email-js").classList.toggle("active")
            document.getElementById("error-email-js").style.backgroundColor = "rgba(247, 6, 6, 0.136)"
         } 

         
         let inE = emailInput.value

        if(name.value.length >=3 && emailing(inE) && emailVF(inE)){
            formStepNum += incrementor
            updateFormStep()
            updateProgressBar()
        }
      
    })

    // input section for first form
   var nameInput = document.getElementById("name")
    nameInput.addEventListener("input", () => {
        if ( nameInput.value.length >= 3){
            document.getElementById("error-name-js").style.display = "none"
            nameInput.style.backgroundColor = "white"
            nameInput.style.border = `1px solid green`
        }else if (nameInput.value.length <= 3) {
            document.getElementById("error-name-js").style.display = "block"
            document.getElementById("error-name-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> Please fill out this field e.g Jane Doe.`
            nameInput.style.border = `1px solid var(--grey-color)`
        }
    })


    let emailV = "@"
    let emailDot = "."
    var emailInput = document.getElementById("email")
    emailInput.addEventListener("input", () => {
        let inE = emailInput.value
        let em = emailing(inE)
        let em2 = emailVF(inE)
      if (em) {
        document.getElementById("error-email-js").style.display = "block"
        document.getElementById("error-email-js").innerHTML = `
        <i class="fa fa-circle-exclamation"></i> This input field should have @ and a domain to continue.`
        document.getElementById("error-email-js").style.backgroundColor = "rgba(14, 247, 6, 0.136)"
        emailInput.style.border = `1px solid var(--grey-color)`
    }
    else if (emailInput.value == ""){
    document.getElementById("error-email-js").style.display = "none"
        emailInput.style.backgroundColor = "white"
        document.getElementById("error-email-js").style.backgroundColor = "rgba(14, 247, 6, 0.136)"
        emailInput.style.border = `1px solid var(--grey-color)`
    }else{
        document.getElementById("error-email-js").style.display = "block"
        document.getElementById("error-email-js").innerHTML = `
        <i class="fa fa-circle-exclamation"></i> This input field should have @ and a domain to continue.`
        emailInput.style.border = `1px solid var(--grey-color)`
        document.getElementById("error-email-js").style.backgroundColor = "rgba(247, 6, 6, 0.136)"
    }

    if(em2){
        document.getElementById("error-email-js").style.display = "block"
        document.getElementById("error-email-js").innerHTML = `
        <i class="fa fa-circle-exclamation"></i> This input field should have @ and a domain to continue.`
        document.getElementById("error-email-js").style.backgroundColor = "rgba(14, 247, 6, 0.136)"
        emailInput.style.border = `1px solid green`
    }else{
        document.getElementById("error-email-js").style.display = "block"
        document.getElementById("error-email-js").innerHTML = `
        <i class="fa fa-circle-exclamation"></i> This input field should have @ and a domain to continue.`
        emailInput.style.border = `1px solid var(--grey-color)`
        document.getElementById("error-email-js").style.backgroundColor = "rgba(247, 6, 6, 0.136)"
    }
})

    function emailing(inE){
        for(let i = 0; i < inE.length; i++){
            for(let j = 0; j < emailV.length; j++){
                if(inE[i] == emailV[j]){
                    return true;
                }
            }
        }
        return false;
    }
    function emailVF(inE){
        for(let i = 0; i < inE.length; i++){
            for(let j = 0; j < emailDot.length; j++){
                if(inE[i] == emailDot[j]){
                    return true;
                }
            }
        }
        return false;
    }

    // second form next
    var secNxtBtn = document.getElementById("nxt-btn-sec")
    secNxtBtn.addEventListener("click", () => {
        incrementor = 1
        let username = document.getElementById("username")
        let password = document.getElementById("password")
        let chor = usernameInput.value
        
        if (!username.value || username.value == "" || username.value == null) {
            document.getElementById("error-username-js").classList.add("active")
            document.getElementById("error-username-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> That isn't a username.`
            
        }
        else{
            username.style.backgroundColor = "white"
            username.style.border = "1px solid green"
            document.getElementById("error-username-js").classList.remove("active")
        }
        
        if (password.value.length <= 7) {
            document.getElementById("error-password-js").style.display = "block"
            document.getElementById("error-password-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> Password should be above 8 char.`
            document.getElementById("error-password-js").classList.toggle("active")
        }else{
            document.getElementById("error-password-js").style.display = "none"
            username.style.backgroundColor = "white"
            username.style.border = "1px solid green"
        }
        let through = passwordInput.value
        

        let nameValue = [nameInput.value]
       
         if (passwordInput.value == String(nameValue)){
            document.getElementById("error-password-js").style.display = "block"
            document.getElementById("error-password-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> Password must not be the same as your name or email.`
            document.getElementById("error-password-js").classList.toggle("active")
        }
        else if(invalidChar(chor)){
            document.getElementById("error-username-js").classList.add("active")
            document.getElementById("error-username-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i>This characters ${invalidCharacters} should not be included in your username field.`
        }
          else if (username.value.length >= 2 && upper_case(through) && lower_case(through)
               && special_Char(through) && numbers(through) && passwordInput.value.length >= 8) {
                formStepNum += incrementor
                updateFormStep()
                updateProgressBar()
            }
    })



    // input section section next btn
//   username input
     let usernameInput = document.getElementById("username")
     let invalidCharacters = "@|#${%^&*(-)}!+=][:;\".,?"

     usernameInput.addEventListener("input", () => {
        let chor = usernameInput.value
        let ic = invalidChar(chor)
        if (ic){
            document.getElementById("error-username-js").classList.add("active")
            document.getElementById("error-username-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> This characters ${invalidCharacters} should not be included in your username field.
            `
        }else if(usernameInput.value == ""){
            document.getElementById("error-username-js").classList.remove("active")
        }else{
            document.getElementById("error-username-js").classList.remove("active")
        }
     })

     function invalidChar(chor){
        for(let i = 0; i < chor.length; i++){
            for (let j = 0; j < invalidCharacters.length; j++ ){
                if(chor[i] == invalidCharacters[j]){
                    return true
                }
            }
        }
        return false
     }


    /** password input */

    let upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
    let lowercase = "qwertyuiopasdfghjklzxcvbnm"
    let specialChar = "!@#$%^&*/?<.>,+_=-"
    let num = "1234567890"
    var passwordInput = document.getElementById("password")
    passwordInput.addEventListener("input", () => {
        document.getElementById("error-password-u").style.display = "block"
        document.getElementById("error-password-l").style.display = "block"
        document.getElementById("error-password-s").style.display = "block"
        document.getElementById("error-password-n").style.display = "block"
       
        
        if (passwordInput.value == ""){
           document.getElementById("error-password-u").style.display = "none"
           document.getElementById("error-password-l").style.display = "none"
           document.getElementById("error-password-s").style.display = "none"
           document.getElementById("error-password-n").style.display = "none"
       }

       let through = passwordInput.value

        let up = upper_case(through)
        if (up) {
            document.getElementById("error-password-u").innerHTML = `<sup><i class="fa fa-check"></i> Mininum 1 Uppercase</sup> `
            document.getElementById("error-password-u").style.backgroundColor = "rgba(14, 247, 6, 0.136)"
        }else{
            document.getElementById("error-password-u").innerHTML = `<sup><i class="fa fa-circle-xmark"></i> Mininum 1 Uppercase</sup> `
            document.getElementById("error-password-u").style.backgroundColor = "rgba(247, 6, 6, 0.136)"
        }
        let lc = lower_case(through)
        if (lc) {
            document.getElementById("error-password-l").innerHTML = `<sup><i class="fa fa-check"></i> Mininum 1 Lowercase</sup> `
            document.getElementById("error-password-l").style.backgroundColor = "rgba(14, 247, 6, 0.136)"
        }else {
            document.getElementById("error-password-l").innerHTML = `<sup><i class="fa fa-circle-xmark"></i> Mininum 1 Lowercae</sup> `
            document.getElementById("error-password-l").style.backgroundColor = "rgba(247, 6, 6, 0.136)"
        }
        let sp = special_Char(through)
        if(sp) {
            document.getElementById("error-password-s").innerHTML = `<sup><i class="fa fa-check"></i> Mininum 1 Character</sup> `
            document.getElementById("error-password-s").style.backgroundColor = "rgba(14, 247, 6, 0.136)"
        }else{
            document.getElementById("error-password-s").innerHTML = `<sup><i class="fa fa-circle-xmark"></i> Mininum 1 Character</sup> `
            document.getElementById("error-password-s").style.backgroundColor = "rgba(247, 6, 6, 0.136)"
        }
        let nu = numbers(through)
        if (nu){
            document.getElementById("error-password-n").innerHTML = `<sup><i class="fa fa-check"></i> Mininum 1 Number</sup> `
            document.getElementById("error-password-n").style.backgroundColor = "rgba(14, 247, 6, 0.136)"
        }else{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            document.getElementById("error-password-n").innerHTML = `<sup><i class="fa fa-circle-xmark"></i> Mininum 1 Number</sup> `
            document.getElementById("error-password-n").style.backgroundColor = "rgba(247, 6, 6, 0.136)"
        }
    })
    
    
    function upper_case(through){
        for(let i = 0; i < through.length; i++){
            for(let j = 0; j < upperCase.length; j++){
               if(through[i] == upperCase[j]){
                return true;
               }
            }
        }
        return false;
    }
    
    function  lower_case(through){
        for (let i = 0; i < through.length; i++){
            for (let j = 0; j < lowercase.length; j++){
                if(through[i] == lowercase[j]){
                    return true;
                   }
            }
        }
        return false;
    }
    function  special_Char(through){
        for (let i = 0; i < through.length; i++){
            for (let j = 0; j < specialChar.length; j++){
                if(through[i] == specialChar[j]){
                    return true;
                   }
            }
        }
        return false;
    }
    function  numbers(through){
        for (let i = 0; i < through.length; i++){
            for (let j = 0; j < num.length; j++){
                if(through[i] == num[j]){
                    return true;
                 }
           }
        }
        return false;
    }

    function checke(){
        if(passwordInput.type == "password"){
            passwordInput.type = "text"
            document.getElementById("show").innerText = "Hide password"
        }else{
            passwordInput.type = "password"
            document.getElementById("show").innerText = "Show password"
        }
    }

    // third btn form
var thirdNxtBtn = document.getElementById("nxt-btn-third")
    thirdNxtBtn.addEventListener("click", () => {
        incrementor = 1
        let dob = document.getElementById("dob")
        let address = document.getElementById("address")
        let city = document.getElementById("city")
        let state = document.getElementById("state")
       
        
        if (!dob.value || dob.value == null) {
            document.getElementById("error-dob-js").style.display = "block"
            document.getElementById("error-dob-js").style.backgroundColor = "rgba(247, 6, 6, 0.136)"
            dob.style.border = "1px solid var(--grey-color)"
            document.getElementById("error-dob-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> Fill in this empty field.`
            document.getElementById("error-dob-js").classList.toggle("active")
            
        }else{
            document.getElementById("error-dob-js").style.display = "none"
            dob.style.backgroundColor = "white"
            dob.style.border = "1px solid green"
        }
        
        if (!address.value || address.value == "" || address.value == null) {
            document.getElementById("error-address-js").style.display = "block"
            document.getElementById("error-address-js").style.backgroundColor = "rgba(247, 6, 6, 0.136)"
            address.style.border = "1px solid var(--grey-color)"
            document.getElementById("error-address-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> Fill in this empty field.`
            document.getElementById("error-address-js").classList.toggle("active")
        }else{
            document.getElementById("error-address-js").style.display = "none"
            address.style.backgroundColor = "white"
            address.style.border = "1px solid green"
        }
        
        if (!city.value || city.value == "" || city.value == null) {
            document.getElementById("error-city-js").style.display = "block"
            document.getElementById("error-city-js").style.backgroundColor = "rgba(247, 6, 6, 0.136)"
            city.style.border = "1px solid var(--grey-color)"
            document.getElementById("error-city-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> Fill in this empty field.`
            document.getElementById("error-city-js").classList.toggle("active")
        }else{
            document.getElementById("error-city-js").style.display = "none"
            city.style.backgroundColor = "white"
            city.style.border = "1px solid green"
        }
        
        if (!state.value || state.value == "" || state.value == null) {
            document.getElementById("error-state-js").style.display = "block"
            document.getElementById("error-state-js").style.backgroundColor = "rgba(247, 6, 6, 0.136)"
            state.style.border = "1px solid var(--grey-color)"
            document.getElementById("error-state-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> Fill in this empty field.`
            document.getElementById("error-state-js").classList.toggle("active")
        }else{
            document.getElementById("error-state-js").style.display = "none"
            state.style.backgroundColor = "white"
            state.style.border = "1px solid green"
        }
        
        
         if (dob.value !== null && address.value.length >= 3 && city.value.length >= 2 && state.value.length >= 2) {
                formStepNum += incrementor
                updateFormStep()
                updateProgressBar()
            }
    })




    var regBtn = document.getElementById("btn-submit")
    var countryValue = document.getElementById("country")
    var numberValue = document.getElementById("number")
   
    numberValue.addEventListener("input", () => {
     if (countryValue.value.length <= 1) {
        regBtn.setAttribute("disabled", true)
        document.getElementById("error-country-js").style.display = "block"
        document.getElementById("error-country-js").innerHTML = `
        <i class="fa fa-circle-exclamation"></i> Contry ?.`
        document.getElementById("error-country-js").classList.toggle("active")
    }
      else if (numberValue.value.length >= 8 || countryValue.value.length > 1) {
        document.getElementById("error-country-js").style.display = "none"
            regBtn.removeAttribute("disabled")
            regBtn.style.opacity = "1";
            regBtn.style.opacity = "0.2";
            regBtn.setAttribute("disabled", true)
         }
        
    })

    regBtn.addEventListener("click", () =>{
        if (countryValue.value.length <= 2) {
            regBtn.setAttribute("disabled", true)
            document.getElementById("error-country-js").innerHTML = `
            <i class="fa fa-circle-exclamation"></i> Contry ?.`
            document.getElementById("error-country-js").classList.toggle("active")
        }else{
            regBtn.removeAttribute("disabled")
        }
    })