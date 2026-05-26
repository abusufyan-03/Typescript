// Type Assertion, Type Unknown and Type Never in Typescript | 09

let response: any = '42';

let numericLength: number = (response as string).length //type assertion

type Book = {
    name: string
}

let bookString = '{"Name": "who moved my chess"}'
let bookObject = JSON.parse(bookString) as string

console.log(bookObject.length)
// if we don't do assertion like no 'as string' then we won't get suggestion

const inputElement = document.getElementById("username") as HTMLInputElement;


let value:any
value = 'chai'
value = [1, 2, 3];
value = 2.5
value.toUpperCase();


let newValue: unknown
newValue = "chai"
newValue = [1, 2 ,3]
newValue = 2.5
// newValue.toUpperCase() // will get error
if(typeof newValue === 'string') {
    newValue.toUpperCase();
}

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("ERROR", error)
}

const data: unknown = "Sasuk is Shinobi";
const strData: string = data as string




type Role = 'admin' | 'user' | 'superadmin'

function redirectBasedOnRole(role: Role): void {
    if(role === 'admin'){
        console.log("Redirecting to admin dashboard");
        return;
    }
    if(role === 'user'){
        console.log("Redirecting to user dashboard");
        return;
    }
    role;
}

function newReturn():never{
    while(true){   }
}