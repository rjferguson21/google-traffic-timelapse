function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("h1"); 
  // and give it some content 
  var newContent = document.createTextNode(new Date()); 
  // add the text node to the newly created div
  newDiv.style.position = 'absolute'
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}

addElement();