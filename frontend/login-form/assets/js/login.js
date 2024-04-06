const resetBtn = document.getElementById("reset__btn")
const otpInput = document.getElementById("otpInput")
const otpEmail = document.getElementById("otpEmail")
const otpPassword = document.getElementById("otpPassword")
const verifyBtn = document.getElementById("verifyBtn")
let OTP 
let EMAIL
let NEWPASSWORD


// console.log(otpInput,otpEmail)

// otpEmail.style.display = "none"
otpInput.style.display= "none"
otpPassword.style.display="none"
resetBtn.style.display="none"




function nextStep(){
    otpEmail.style.display = "none"
    otpPassword.style.display = "block"
    otpInput.style.display = "block"
    verifyBtn.style.display = "none"
    resetBtn.style.display="block"
    // console.log(resetBtn)

    resetBtn.onclick = (event)=>{
        const email = document.querySelector(".email_inp").value
        const password = document.querySelector(".password_inp").value
        const otp = document.querySelector(".otp_inp").value
const confirmPass = document.getElementById("confirm-pass").value

// console.log(password,confirmPass)

if(password.length < 8){
    alert("Password is not long enough!")
    return
}

if(password !== confirmPass){
    alert("Password did't match!")
    return
}


        const dat = {
            email,
            password
        }
    
        // console.log("je;;p",dat)
        // return
        if(otp != OTP){
            alert("Wrong OTP");
        }
        fetch("http://localhost:3000/reset", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dat),
        })
            .then((res) => {
                window.location.replace("/login-form")
    
            }).catch(error=>{
                console.error(error)
            })
    
    }
    
}

function sendOtp(){
    const email = document.querySelector(".email_inp")

    // console.log(email.value)


    const otpbeta = Math.floor(100000 + Math.random() * 900000).toString();
    OTP = otpbeta;
    
    
    const dat = {
        otp: OTP,
        emu: email.value,
    }


    fetch("http://localhost:3000/sendm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dat),
    })
        .then((res) => {
            // console.log(res.data)
            // console.log(OTP)
            nextStep()
            // console.log(res)
            
            if (res.ok) {
                alert('otp send to mail')
            }
            else {
                alert('otp not sent')
            }
        })


}

verifyBtn.onclick = (event)=>{

    sendOtp()
    // nextStep()  
}
// console.log(resetBtn)