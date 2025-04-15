let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date();
    let hours = day.getHours();
    if(hours>=0 && hours<12){
        speak("Good Morning ,I am Harsh Your Virtual Assistant How May I Help You");
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon ,I am Harsh Your Virtual Assistant How May I Help You");

    }
    else{
        speak("Good evening ,I am Harsh Your Virtual Assistant How May I Help You");

    }
}
// window.addEventListener('load',()=>{
//     wishMe();
// })
window.addEventListener("click", () => {
    wishMe();
}, { once: true });

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition()
recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener('click', ()=>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    if(message.includes("hello") || message.includes("hey") || message.includes("hii") || message.includes("namsta")){
        speak("Hello, What can i help you ?")
    }
    else if(message.includes("who are you")){
        speak("I am Virtual assistant, created by Harsh sir");
    }
    else if(message.includes("amisha") || message.includes("aamu")){
        speak("Hello amisha first of all love youu mai Harsh bol raha hu baatao kya help karu aapka")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatshap")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){

        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time);
    }
    else if(message.includes("date")){

        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date);
    }
    else{
        speak("this is what i found on google")
        window.open(`https://www.google.com/search?q=${message}`)
    }
}
