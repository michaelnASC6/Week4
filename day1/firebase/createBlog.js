const authorElement = document.getElementById("author");
const titleElement = document.getElementById("title");
const bodyTextElement = document.getElementById("bodyText");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const author        = authorElement.value;
    const bodyText      = blogElement.value;
    const title         = titleElement.value;

    authorElement.value = "";
    blogElement.value  = "";

    console.log(author + " : " + title);

    //Update database here
const value={
    NAME: author, 
    TITLE: title,
    BLOG: blog
 };
 database.push(value)
}

// Set database "child_added" event listener here
database.on("child_added", addMessageBoard)
const messageContainer=document.querySelector(".allMessages");
// document.querySelector("submitButton").addEventListener("click", updateDB);

function addMessageBoard(rowData){
    const row = rowData.val();
    const name = row.NAME;
    const message = row.MESSAGE;

    const pElement = document.createElement("p")
    pElement.innerText = `${name}: ${message}`
    messageContainer.appendChild(pElement);
}