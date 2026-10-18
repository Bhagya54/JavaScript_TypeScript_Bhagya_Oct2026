const baseURL="https://google.com"
//baseURL="https://redbus.com"//TypeError: Assignment to constant variable.
//const baseURL="https://gmail.com"//Cannot redeclare block-scoped variable 'baseURL'.

const name="pending"
{
    const name="done"
    console.log("Inside block:",name)//done
}

function say(){
    const name="bhagya"
    console.log("Inside fn:",name)//bhagya

    if(true){
        const name="Hari";
        console.log("Inside if block:",name)//Hari
    }

    console.log("Outside if block",name)//bhagya
}

say()
console.log("Outside all blocks:",name)//pending
