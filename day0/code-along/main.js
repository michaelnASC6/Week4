//Fetch data from URL

const url = "https://randomuser.me/api";
// let data;

function anyFunctionThatDoesALotOfStuff(obj){
    const portrait = document.createElement("img");  
    portrait.alt="Face Image Large";
    portrait.src = obj.picture.large;
    document.querySelector("body").appendChild(portrait);
}

fetch(url).then(function(response){
    return response.json();
})
.then(function(myJson) {
    // data = myJson;
    // return data;
    const data  = myJson.results[0];
    // console.log("Data Object: ", data);
    // const portrait = document.createElement("img");  
    // portrait.alt="Face Image Large";
    // portrait.src = data.picture.large;
    // document.querySelector("body").appendChild(portrait);
    anyFunctionThatDoesALotOfStuff(data);
});


// console.log(data);
