// ======================================
// PAGES
// ======================================

const pages = document.querySelectorAll(".page");

function showPage(id){
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// ======================================
// LOADING SCREEN
// ======================================

window.onload = () => {

    setTimeout(() => {

        document.getElementById("loading-screen").style.display = "none";

        startTyping();

    },2500);

};

// ======================================
// TYPING ANIMATION
// ======================================

const title = "Hey Jipaa ❤️";

const subtitle =
"Someone has been waiting for this day for a very long time...";

let typingIndex = 0;

function startTyping(){

    const typing = document.getElementById("typing");

    if(typingIndex < title.length){

        typing.innerHTML += title.charAt(typingIndex);

        typingIndex++;

        setTimeout(startTyping,120);

    }

    else{

        setTimeout(()=>{

            document.getElementById("subtext").innerHTML = subtitle;

            document.getElementById("startBtn").style.display="inline-block";

        },700);

    }

}

// ======================================
// START BUTTON
// ======================================

document.getElementById("startBtn").onclick = () => {

    showPage("passwordPage");

};

// ======================================
// PASSWORD
// ======================================

document.getElementById("unlockBtn").onclick = () => {

    const pass = document.getElementById("password").value;

    if(pass === "26071994"){

        showPage("giftPage");

    }

    else{

        document.getElementById("wrongPassword").innerHTML =
        "Wrong Password ❤️";

    }

};

// ======================================
// GIFT
// ======================================

document.getElementById("giftBox").onclick = () => {

    document.getElementById("giftBox").innerHTML = "💖";

    setTimeout(()=>{

        showPage("balloonPage");

    },1000);

};

// ======================================
// BALLOONS
// ======================================

let popped = 0;

const balloons = document.querySelectorAll(".balloon");

balloons.forEach(balloon=>{

    balloon.onclick=()=>{

        if(balloon.classList.contains("done")) return;

        balloon.classList.add("done");

        balloon.innerHTML="💥";

        balloon.style.background="transparent";

        balloon.style.boxShadow="none";

        document.getElementById("balloonMessage").innerHTML =
        balloon.dataset.msg;

        popped++;

        if(popped===balloons.length){

            setTimeout(()=>{

                showPage("cakePage");

            },1200);

        }

    };

});
// ======================================
// CAKE
// ======================================

document.getElementById("cake").onclick = () => {

    document.getElementById("cake").innerHTML = "🎉";

    createConfetti();

    setTimeout(() => {

        showPage("galleryPage");

        startSlideshow();

    },1500);

};

// ======================================
// PHOTO SLIDESHOW
// ======================================

const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "photo6.jpg",
  "photo7.jpg",
  "photo8.jpg",
  "photo9.jpg",
  "photo10.jpg",
  "photo11.jpg",
  "photo12.jpg",
  "photo13.jpg",
  "photo14.jpg",
  "photo15.jpg",
  "photo16.jpg",
  "photo17.jpg",
  "photo18.jpg",
  "photo19.jpg",
  "photo20.jpg",
  "photo21.jpg"
];


let photoIndex = 0;

function startSlideshow(){

    const img = document.getElementById("slideImage");

    photoIndex = 0;

    function showNext(){

        if(photoIndex >= photos.length){

            setTimeout(()=>{
                showPage("letterPage");
                typeLetter();
            },1000);

            return;
        }

        img.onload = ()=>{

            setTimeout(()=>{

                photoIndex++;

                showNext();

            },1500);

        };

        img.onerror = ()=>{

            photoIndex++;

            showNext();

        };

        img.src = photos[photoIndex];

    }

    showNext();

}

// ======================================
// LETTER
// ======================================

const letter = `Happy Birthday Baccha ❤️

I wish you always stay happy from the bottom of my heart. Thank you for coming into my life. You make me feel complete, and you are my safest place in this world.

I know things between us haven't been good lately. But I don't have any complaints anymore. I just don't want to loose you because you are one of the most special person in my life.

Every single day, I wait for you. I truly wish that one day you'll choose me as your life partner. I miss you every day.

No matter what happens, I'll always choose you. Because in my whole life, you are the first person who made me feel truly special... the first person who made me genuinely happy... and the first person who made me feel important in someone's life.

No matter how far we go or what happens between us, my heart will always find its way back to you. Because I don't want to imagine this life without you.

Once again...

🎉 Happy Birthday, Jipaa. ❤️

You are my everything.

Please don't leave me.
Please don't ignore me.

I'll always be here...
Waiting for you. ❤️
`;

let letterIndex = 0;

function typeLetter(){

const box = document.getElementById("letterText");

box.innerHTML = "";

const typing = setInterval(()=>{

box.innerHTML += letter.charAt(letterIndex);

letterIndex++;

if(letterIndex >= letter.length){

clearInterval(typing);

}

},35);

}

document.getElementById("finalBtn").onclick = ()=>{

showPage("finalPage");

};
// ======================================
// MUSIC
// ======================================

const music = document.getElementById("birthdaySong");
const musicBtn = document.getElementById("musicBtn");

musicBtn.style.display = "block";

musicBtn.onclick = () => {

    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
    }

};

// ======================================
// FLOATING HEARTS
// ======================================

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}, 500);

// ======================================
// CONFETTI
// ======================================

function createConfetti() {

    const area = document.getElementById("confetti");

    for (let i = 0; i < 120; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "%";

        piece.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        area.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);

    }

}

// ======================================
// FINAL PAGE
// ======================================

document.getElementById("finalBtn").addEventListener("click", () => {

    createConfetti();

    if (music.paused) {
        music.play();
    }

});

console.log("❤️ Happy Birthday Upao ❤️");
