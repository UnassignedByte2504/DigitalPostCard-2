
window.onload = function () {

    
    

    var clickcount = 0;
    let welcome = "Hello this is a test!"
    let greetings = ["Dear","Best Regards"];

document.querySelector("#Button1").addEventListener("click", changemsg =()=>{

  while (clickcount < 1 ) { 


    let name = document.getElementById("Somename").value;
    let Msg = document.getElementById("MsgValue").value;
    let EmailAd= document.getElementById("SomeEmail").value;
    let alertMsg = "You must complete the fields"
    let completefieldsmsg = "You must complete the fields"

  
    
    if (name === "" || name === null, Msg===null || Msg === ""){
        alert(alertMsg);
            document.getElementById("PostCardMessage").innerHTML = completefieldsmsg ;
            document.getElementById("PostCardMessage").style.color="red";
            document.getElementById("PostCardMessage").style.fontSize="34px";
            
            return true
        }else {
         
          let greet1 =  document.createElement("strong");
          greet1.innerHTML = greetings[0] + " " + name;
          let linebreak = document.createElement("br");
          let filling = document.createElement("p");
          filling.innerHTML = Msg;
          let greet2 = document.createElement("span");
          greet2.innerHTML =greetings[1];
          let father = document.querySelector(".PostCardFill");
        

          document.getElementById("PostCardMessage").innerHTML ="";
          father.appendChild(greet1);
          father.appendChild(linebreak);
          father.appendChild(filling);
          father.appendChild(greet2);

          function erasefields ()  {

        
            if (name!=""){name=""};
            if (Msg!=""){Msg=""};
            if (EmailAd!=""){EmailAd=""};
        }

    

   
    
    
    clickcount = 1

    erasefields(); 
     }  }});
    }  