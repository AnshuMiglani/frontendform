const btn= document.getElementById("subbut");
const username= document.getElementById("USERNAME");
const email= document.getElementById("EMAIL");
const phonenum= document.getElementById("PHONENUMBER");
const passowrd= document.getElementById("PASSWORD");
const cpassword= document.getElementById("CPASSWORD");

const seterrormgs= (input,displaymsg)=>{
    const need= input.parentElement;
    const need1= need.parentElement;
    const ans= need.querySelector("small");
    console.log(ans);
    need.className= "formcontrol error";
    ans.className="formcontrol error";
    ans.innerText= displaymsg;
    
}

const setsuccessmgs= (input1)=>{
    const need1= input1.parentElement;
    need1.className= "formcontrol success";
}
btn.addEventListener('click', function(){
    const usernameval= username.value.trim();
    const emailval= email.value.trim();
    const phonenumval= phonenum.value.trim();
    const passwordval= passowrd.value.trim();
    const cpassowrdval= cpassword.value.trim();

    if(usernameval===""){
        seterrormgs(username,"Username cannot be blank");
    }
    else if(usernameval.length <4){
        seterrormgs(username,"Username must contain atleast 4 letters");
    }
    else{
        setsuccessmgs(username);
    }

    if(emailval===""){
        seterrormgs(email,"Email cannot be blank");
    }
    else if(emailval.index("@")==0){
        seterrormgs(email,"Invalid email");
    }
    else if(emailval.index("@")+3> emailval.index(".")){
        seterrormgs(email,"Invalid email");
    }
    else{
        setsuccessmgs(email);
    }

    if(phonenumval===""){
        seterrormgs(phonenum,"Phone Number cannot be blank");
    }
    else if(phonenumval.length !=10){
        seterrormgs(phonenum,"Phone Number must contain 10 digits");
    }
    else{
        setsuccessmgs(phonenum);
    }


})
