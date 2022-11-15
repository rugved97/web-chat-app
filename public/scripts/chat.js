// @ts-ignore
const socket = io()

const form = document.getElementById('form')
const input = document.getElementById('input')
const chat = document.getElementById('chat')

form.addEventListener('submit', onSubmitEvent)
socket.on('chat message', appendMessage)

function onSubmitEvent(event){
    event.preventDefault()
    // @ts-ignore
    if(input.value){
        // @ts-ignore
        socket.emit('chat message' , input.value)
        // @ts-ignore
        input.value = ''
    }
}


function appendMessage(message) {
    chat.innerHTML += `<li>${message}</li>`
    window.scrollTo(0,document.body.scrollHeight)
}