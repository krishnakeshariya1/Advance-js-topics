
function Createtoaster(config){
    return function(message){
        let div = document.createElement("div");
        div.textContent = message;
        div.className = `${config.positonY === "top" ? "top-10" : "bottom-10"} ${config.positonX === "right" ? "right-10" : "left-10"} ${config.theme === "dark" ? "bg-indigo-600" : "bg-black"} text-white px-4 py-2 rounded shadow-lg w-fit mb-4 `;
        const parentDiv = document.querySelector("#parent");
        parentDiv.appendChild(div);

        // setTimeout(()=>{
        //     parentDiv.removeChild(div)
        // },(config.duration*1000))

        if(config.positonX !== "left" || positonY !== "top"){
            parentDiv.className = ` fixed ${config.positonY === "top" ?  "top-10" : " bottom-10"} ${config.positonX === "right" ? " right-10" : " left-10"} `;
        }
    }
}
 let Toast = Createtoaster({
    positonX : "right",
    positonY : "bottom",
    theme: "dark",
    duration : 4,
})

Toast("Download Done");
setTimeout(()=>{
Toast("The another Notification");
},2000);

