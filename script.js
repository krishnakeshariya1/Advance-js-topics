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
function abc() {
    console.log(this);
}
abc();

//  this keyword in  method
let obj = {
    name: "kk",
    sayName: function () {
        console.log(this.name);
    },
};
obj.sayName();

// this keyword in event handler
document.querySelector('h1').addEventListener("click", function () {
    console.log(this);
})

// this keyword in classes

class Abc { // first letter of class name should be captial 
    constructor() {
        console.log(`hey`);
        this.a = 122;
    }
}
let val = new Abc(); // new will make a blank obj
// val is a instance of abc class

const objj = {
    name: "krishna",
    age: 20,
    sayHlw: () => {
        console.log(this) // window
    }
}
objj.sayHlw();

const obj2 = {
    name: "kk",
    age: 29,
    say: function () {
        let sayName = () => {
            console.log(this) // object
        }
        sayName()
    }
}
obj2.say();

// call apply bind
// while calling function we can set the value of this keyword 
let obj3 = {
    name: "kk",
    age: 22,
}
function hii(a, b, c) {
    console.log(this, a, b, c);
}
hii.call(obj3, 1, 2, 3); // we can pass more than 2 parameter 

let obj4 = {
    name: "kk",
    age: 22,
}
function hii1(a, b, c) {
    console.log(this, a, b, c);
}
hii1.apply(obj4, [1, 2, 3]) // it pass value in array

let obj5 = {
    name: "kk",
    age: 22,
}
function hii2(a, b, c) {
    console.log(this, a, b, c);
}
let fnc = hii2.bind(obj5, 1, 2, 3) // bind does not run but it pass the dublicate of that function where this is a obj
fnc();

const name = document.querySelector("#name");
const role = document.querySelector("#role");
const bio = document.querySelector("#bio");
const photo = document.querySelector("#photo");
const form = document.querySelector("#profileForm");
const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },
    addUser: function () {
        this.users.push({
            name: name.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        })
        form.reset();
        this.renderUi();
    },
    renderUi: function () {
        document.querySelector("#parentDiv").innerHTML = ""; // Clear existing UI
        this.users.forEach( function(user){
            // Create main container div
            const card = document.createElement("div");
            card.className = "bg-white p-5 rounded-lg shadow-lg max-w-sm text-center";

            // Create image element
            const img = document.createElement("img");
            img.id = "displayPhoto";
            img.src = `${user.photo}`;
            img.alt = "Profile Photo";
            img.className = "mt-4 rounded-full w-24 h-24 mx-auto";

            // Create h2 for name
            const name = document.createElement("h2");
            name.id = "displayName";
            name.className = "text-xl font-bold text-gray-800";
            name.textContent = `${user.name}`;

            // Create paragraph for role
            const role = document.createElement("p");
            role.id = "displayRole";
            role.className = "text-gray-600";
            role.textContent = `${user.role}`;

            // Create paragraph for bio
            const bio = document.createElement("p");
            bio.id = "displayBio";
            bio.className = "text-gray-500";
            bio.textContent = `${user.bio}`;

            // Append all child elements to main div
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(role);
            card.appendChild(bio);

            // Finally append to body (or any container you want)
            document.querySelector("#parentDiv").appendChild(card);

        });
    },
    removeUser: function () {},
}
userManager.init()