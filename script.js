function toggleChanges() {
  //Accessing and storing the user input in variables
  let bgColor = document.getElementById("chooseColor").value;
  let userTxt = document.getElementById("userTxt").value;
  let color = document.getElementById("chooseTxtColor").value;
  let divAlert = document.getElementById("danger");
  let alertPara = document.getElementById("alertPara");
  let dispTxt = document.getElementById("displayTxt");
  //if-else statements
  if (bgColor == "" && color == "" && userTxt == "") {
    divAlert.classList.remove("alert-success");
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-primary");
    alertPara.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' + 
    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' + 
    '</svg>' + "<strong>Holy Guacamole!</strong> It seems you didn't input anything!";
  } 
  else if (bgColor == "" && color == "") {
    divAlert.classList.remove("alert-success");
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-primary");
    alertPara.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' + 
    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' + 
    '</svg>' + "<strong>Holy Guacamole!</strong> It seems you didn't input any background color and text-color!";
    dispTxt.innerHTML = userTxt;
  }
  else if (bgColor == "" && userTxt == "") {
    divAlert.classList.remove("alert-success");
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-primary");
    alertPara.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' + 
    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' + 
    '</svg>' + "<strong>Holy Guacamole!</strong> It seems you didn't input any text and background color!";
    document.body.style.color = color;
  } 
  else if (color == "" && userTxt == "") {
    divAlert.classList.remove("alert-success");
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-primary");
    alertPara.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' + 
    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' + 
    '</svg>' + "<strong>Holy Guacamole!</strong> It seems you didn't input any text and text-color!";
    document.body.style.backgroundColor = bgColor;
  } 
  else if (bgColor == color && userTxt == "") {
    divAlert.classList.remove("alert-success");
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-primary");
    alertPara.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' + 
    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' + 
    '</svg>' + "<strong>Holy Guacamole!</strong> It seems you didn't input any text!";
  } 
  else if (bgColor == "") {
    divAlert.classList.remove("alert-success");
    document.body.style.color = color;
    dispTxt.innerHTML = userTxt;
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-primary");
    alertPara.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' + 
    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' + 
    '</svg>' + "<strong>Holy Guacamole!</strong> It seems you didn't input any backround color!";
  } 
  else if (userTxt == "") {
    divAlert.classList.remove("alert-success");
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = color;
    dispTxt.innerHTML = userTxt;
    dispTxt.innerHTML = '""';
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-primary");
    alertPara.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' + 
    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' + 
    '</svg>' + "<strong>Holy Guacamole!</strong> It seems you didn't input any text! ";
  } 
  else if (color == "") {
    divAlert.classList.remove("alert-success");
    document.body.style.backgroundColor = bgColor;
    dispTxt.innerHTML = userTxt;
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-primary");
    alertPara.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' + 
    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' + 
    '</svg>' + "<strong>Holy Guacamole!</strong> It seems you didn't input any text-color!";
  } 
  else if (bgColor == color) {
    divAlert.classList.remove("alert-success");
    dispTxt.innerHTML = userTxt;
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-primary");
    alertPara.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">' + 
    '<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>' + 
    '</svg>' + "<strong>Holy Guacamole!</strong> Please input different values for background color and text color or the text of the webpage wouldn't be visible!";
  } 
  else {
    divAlert.classList.remove("alert-primary");
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = color;
    dispTxt.innerHTML = userTxt;
    dispTxt.style.backgroundColor = bgColor;
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-success");
    alertPara.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">' + 
    '<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>' + 
    '</svg>' + '<use xlink:href="#check-circle-fill"/></svg>' + "  Changes Successful!";
  }
}
function onInput() {
  let dispTxt = document.getElementById("displayTxt");
  let dropdown = document.getElementById("dropdown").value;
  dispTxt.style.fontFamily = dropdown;
  let size = document.getElementById("txtSize").value;
  dispTxt.style.fontSize = size +"px";
}
function image() {
  let bgColor = document.getElementById("chooseColor").value;
  let imgPara = document.getElementById("para");
  let catImg = document.getElementById("img");
  if (bgColor == "red") {
    imgPara.innerHTML = "Remove your cursor from over my cat!!😠😠";
    imgPara.style.color = "brown";
    imgPara.style.fontSize = "40px";
    catImg.classList.add = "image";
  }
  else {
    imgPara.innerHTML = "Remove your cursor from over my cat!!😠😠";
    imgPara.style.color = "red";
    imgPara.style.fontSize = "40px";
    catImg.classList.add = "image";
  }
}
function imageOver() {
  let imgPara = document.getElementById("para");
  imgPara.innerHTML = "Good!😏😏";
  imgPara.style.fontSize = "40px";
  imgPara.style.color = "green";
}
var bold = document.getElementById("bold");
var italic = document.getElementById("italic");
var underline = document.getElementById("unline");
bold.onchange = () => {
  let dispTxt = document.getElementById("displayTxt");
  switch (bold.checked) {
    case true:
        dispTxt.style.fontWeight = "bold";
        break;
    default:
        dispTxt.style.fontWeight = "normal";
        break;
  }
}
italic.onchange = () => {
  let dispTxt = document.getElementById("displayTxt");
  switch (italic.checked) {
    case true:
        dispTxt.style.fontStyle = "italic";
         break;
    default:
        dispTxt.style.fontStyle = "normal";
        break;
  }
}
underline.onchange = () => {
  let dispTxt = document.getElementById("displayTxt");
  switch (underline.checked) {
    case true:
        dispTxt.style.textDecoration = "underline";
        break;
    default:
        dispTxt.style.textDecoration = "none";
        break;
  }
}
function align() {
  let dispTxt = document.getElementById("displayTxt");
  let alignValue = document.getElementById("dropdownAlign").value;
  dispTxt.style.textAlign = alignValue;
  alert("Note: This will only align the text written by you");
}
function dblClick() {
  alert("Why in the name of JavaScript are you double clicking it?")
}
new TypeIt("#typed", {
  loop: true,
  speed: 100,
  waitUntilVisible: true
  })
  .type("The Webpage that changes color")
  .pause(1000)
  .delete(30)
  .type("Change the col")
  .pause(200)
  .delete(3)
  .type("background color")
  .pause(1000)
  .delete(16)
  .type("text color")
  .pause(1000)
  .delete(10)
  .type("font size")
  .pause(1000)
  .delete(9)
  .type("<em>font style</em>")
  .pause(1000)
  .delete(10)
  .type("<strong>world!<strong>")
  .pause(1000)
  .go();
