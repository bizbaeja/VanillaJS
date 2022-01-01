
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");// 4.html에 저장된 id = "greeitng"을 호출하는 함수를 만든다.

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";



function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else { 
    paintGreetings(savedUsername);
}
