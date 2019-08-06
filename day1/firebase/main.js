const url = "https://fir-f08d4.firebaseio.com";

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