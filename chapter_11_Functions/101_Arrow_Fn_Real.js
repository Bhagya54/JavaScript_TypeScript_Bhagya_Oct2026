//if(ourStatusCode>=200 && ourStatusCode<300)
validateStatusCode(203);
//This is a normal function
function validateStatusCode(status) {
    if (status >= 200 && status < 300) {
        console.log("Using Normal Function - Request is fine:",status)
    }
}

//Function Expression
const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status < 300) {
        console.log("Using Function Expression- Request is fine:",status)
    }
}
validateStatusCode_Exp(205);

//Arrow Function
const validateStatusCode_Arrow=(status)=>{
    if(status>=200 && status<300){
        console.log("Using Arrow Function - Request is fine:",status)
    }
}

validateStatusCode_Arrow(201)