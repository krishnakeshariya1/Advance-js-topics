// Toaster 
function Createtoaster(config) {
    return function (message) {
        let div = document.createElement("div");
        div.textContent = message;
        div.className = `${config.positonY === "top" ? "top-10" : "bottom-10"} ${config.positonX === "right" ? "right-10" : "left-10"} ${config.theme === "dark" ? "bg-indigo-600" : "bg-black"} text-white px-4 py-2 rounded shadow-lg w-fit mb-4 `;
        const parentDiv = document.querySelector("#parent");
        parentDiv.appendChild(div);

        setTimeout(() => {
            parentDiv.removeChild(div)
        }, (config.duration * 1000))

        if (config.positonX !== "left" || positonY !== "top") {
            parentDiv.className = ` fixed ${config.positonY === "top" ? "top-10" : " bottom-10"} ${config.positonX === "right" ? " right-10" : " left-10"} `;
        }
    }
}

let Toast = Createtoaster({
    positonX: "right",
    positonY: "bottom",
    theme: "dark",
    duration: 4,
})

Toast("Download Done");
setTimeout(() => {
    Toast("The another Notification");
}, 2000);

// this keyword 
// this keyword in global scope
console.log(this); 

// this keyword in function 
function abc(){
    console.log(this);
}
abc();

//  this keyword in  method
let obj = {
    name : "kk",
    sayName : function(){
        console.log(this.name);
    },
};
obj.sayName();

// this keyword in event handler
document.querySelector('h1').addEventListener("click",function(){
    console.log(this); 
})

// this keyword in classes

class Abc{ // first letter of class name should be captial 
constructor (){
    console.log(`hey`);
    this.a = 122;
}
}
let val = new Abc(); // new will make a blank obj
// val is a instance of abc class

const objj ={
    name : "krishna",
    age :20,
    sayHlw : ()=>{
        console.log(this) // window
    }
}
objj.sayHlw();

const obj2 = {
    name : "kk",
    age : 29,
    say : function (){
        let sayName = ()=>{
            console.log(this) // object
        }
        sayName()
    }
}
obj2.say();