const pageContiner = document.querySelector('.notification-page-container');
const markings = document.querySelectorAll('.marking');
const mark = document.querySelector('.selector-notification-read');
const message = document.querySelector('.message-notification');
const cardMessage = document.querySelector('#card-message');
const number = document.querySelector('.number-notification');
number.innerHTML=markings.length

markings.forEach((message) => {
message.addEventListener("click", () => {
    message.classList.remove("marking");
    const newMarking = document.querySelectorAll(".marking");
    number.innerText = newMarking.length;
})
})
mark.addEventListener('click', ()=>{
markings.forEach(message => message.classList.remove('marking'));
    const newMarking = document.querySelectorAll('.marking')
    number.innerHTML = newMarking.length;
})

cardMessage.addEventListener('click', deploy);
function deploy(){
const width = screen.width >= '639px';
message.classList.toggle('inactive');
if(message.classList.contains('inactive') && width == true){
    pageContiner.style.height = '616px';
} else if (width == true) { 
    pageContiner.style.height = '726px';
}
}