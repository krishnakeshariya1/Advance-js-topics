function getUser(){
    fetch("https://randomuser.me/api/?results=4")
.then((response) => response.json())
.then((data)=>{
    data.results.forEach(user => {
       // Create main card container
const card = document.createElement("div");
card.className = "bg-gray-800 rounded-lg shadow-lg overflow-hidden";

// Inner div for padding and content
const innerDiv = document.createElement("div");
innerDiv.className = "p-6";

// Create title
const title = document.createElement("h2");
title.className = "text-xl font-bold text-white mb-2";
title.textContent = user.name.first + " " + user.name.last;

// Create paragraph
const para = document.createElement("p");
para.className = "text-gray-400";
para.textContent = user.email;

// Create button
const button = document.createElement("button");
button.className = "mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700";
button.textContent = "Learn More";

// Append elements in correct order
innerDiv.appendChild(title);
innerDiv.appendChild(para);
innerDiv.appendChild(button);
card.appendChild(innerDiv);

// Finally, append card to body or another container
let cardContainer = document.getElementById("cardContainer");
cardContainer.appendChild(card);

    });
});
};
getUser();
