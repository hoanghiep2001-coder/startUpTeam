// function autoResize() {
//     document.querySelector('.app').style.height = window.innerHeight +'px';
//     document.querySelector('.app').style.width = window.innerWidth +'px';
// }

// window.onresize = autoResize;
// autoResize();
// function autoResize() {
//         document.querySelector('.app-footer').style.width = window.innerWidth +'px';
//     }
    
//     window.onresize = autoResize;
//     autoResize();
function Validate() {
    const username = document.querySelector('[data-user-name]').value
    const password = document.querySelector('[data-password]').value
    const empty = '';

    if ((username && password) != empty ) {
        
        const loginSuccess = document.createElement("a")
        loginSuccess.href = "./home.html";
        loginSuccess.classList.add('app-form-submit-button')
        loginSuccess.innerHTML  = `<i class="fas fa-arrow-right"></i>`;
        
        const parentDiv = document.querySelector('.app-form-submit') 
        const childDiv = document.querySelector('.app-form-submit-button')

        parentDiv.replaceChild(loginSuccess, childDiv);

        const changeSubmit = document.querySelector('.app-form-submit-button')
        function OpenSubmit() {
            changeSubmit.classList.add('open')
        }
        OpenSubmit();
    } else {
        function closeOpenSubmit() {
            changeSubmit.classList.remove('open')
        }
        closeOpenSubmit();
    }
}

window.onchange = Validate;
Validate();