getStatus();//calling fn before defining the getStatus fn
function getStatus(){
    //var status --> JS engine automatically creates var status with undefined value.
    console.log(status);
    var status="assigned"
    console.log(status);

    if(true){
        console.log("block scope:",status)
        var status="fixed";
        console.log("block scope:",status)
    }
    console.log("outside block, Inside Fn scope:",status)//fixed
}

