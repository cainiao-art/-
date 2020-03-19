document.querySelector('p').onclick = function() {
    alert('点我想干嘛');
}
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fruit.jpg') {
      myImage.setAttribute('src', 'images/my-image.jpg');
    } else {
      myImage.setAttribute('src', 'images/fruit.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }
 
 
 
  
  
  
  
  
  
  
  
  
  
  