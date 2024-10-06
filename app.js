//1
var mainContent=document.getElementById("main-content")


//2

var childEleements=mainContent.children;

//3
var renderElements=document.getElementById("render")

for(var i=0 ; i<renderElements.lengt ; i++){
    console.log(renderElements[i].innerHTml)
}

//4
var firstName=document.getElementById("first-name")

firstName.value="Given value";

//5

document.getElementById("last-name").value="Your name";
document.getElementById("email").value="Your email";

//6

var consNode=document.getElementById("form-content");

var nodeType=consNode.nodeType;

console.log(nodeType);

//7 What is node type of element having id “form-content”.

var formContent=document.getElementById("form-content")
console.log(formContent.nodeType);



//8 Show node type of element having id “lastName” and its child node.

var lastName=document.getElementById("last-name")
var nodeType=lastName.nodeType;

var childNode=lastName.firstChild;
var childNodetypr=childNode.nodeType;

console.log(nodeType);
console.log(childNodetypr)

//9 Update child node of element having id “lastName”.
lastName.textContent="Last Name: Smith";

console.log(lastName.textContent)

//9 Get First and last child of id “main-content”.

var mainContent=document.getElementById("main-content");
var firstChild=mainContent.firstChild;
var lastChild=mainContent.lastChild;

console.log(firstChild)
console.log(lastChild)


//10 Get First and last child of id “main-content”.

console.log(lastName.nextSibling)
console.log(lastName.previousSibling)

//11 Get parent node and node type of element having id “email”

var emailparent=document.getElementById("email").parentNode
var emailType=document.getElementById("email").nodeType;