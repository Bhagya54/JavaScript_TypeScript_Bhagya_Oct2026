//// You are working on API Validation
// response Code - 200, 404, 401, 403.....404

let responseCode=404;

switch(responseCode){
    case 200:
        console.log("200 OK");
        break;
    case 404:
        console.log("404 Not Found!!");
        break; 
    default:
        console.log("No Status Code Match")   
        break; 
        
}