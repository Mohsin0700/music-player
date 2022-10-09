let playBtn = document.getElementById("play-btn");
let backBtn = document.querySelector("#back-btn");
let nextBtn = document.querySelector("#next-btn");
let songName = document.querySelector(".songName");
let songImg = document.querySelector("#logo");
let range = document.getElementById("range");
let mp3 = document.querySelector('audio');
let logo = document.getElementById("logo");
let num = 0;






let flg = false;
playBtn.addEventListener("click", () => {
    if (flg === false) {
        playBtn.src = "./Images/pause.png";
        logo.classList.add("rotate-image");
        mp3.play();
        flg = true;
    } else if (flg === true) {
        playBtn.src = "./Images/play-button.png";
        logo.classList.remove("rotate-image");
        mp3.pause();
        flg = false;
    }
})


    const next = () => {
    num++;
    if (num === 0) {
        num = 1;
    }
    console.log(num);
    if (num === 1) {
        document.getElementById("title").innerHTML = "Rehmat Baras Rahi Hai Muhammad K Sheher Main";
        mp3.src = './audios/naat2.mp3';
        playBtn.src = "./Images/pause.png";
        mp3.play();
        logo.classList.add("rotate-image");
    } else if (num === 2) {
        document.getElementById("title").innerHTML = "(Most Popular Old Naat) Zahe Muqaddar";
        mp3.src = './audios/naat3.mp3';
        playBtn.src = "./Images/pause.png";
        mp3.play();
        logo.classList.add("rotate-image");
    } else if (num === 3) {
        document.getElementById("title").innerHTML = "Teri Jalion K Nichy, Teri Rehmaton k Saaye";
        mp3.src = './audios/naat4.mp3';
        playBtn.src = "./Images/pause.png";
        mp3.play();
        logo.classList.add("rotate-image");
    } else if (num === 4) {
        document.getElementById("title").innerHTML = "Ae Saba Musatafa Se Kehdena";
        mp3.src = './audios/naat5.mp3';
        playBtn.src = "./Images/pause.png";
        mp3.play();
        logo.classList.add("rotate-image");
    } else if (num === 5) {
        document.getElementById("title").innerHTML = "Main Madine Chala, Main Madine Chala";
        mp3.src= './audios/naat1.mp3';
        playBtn.src = "./Images/pause.png";
        mp3.play();
        logo.classList.add("rotate-image");
        num=0;
    }
    }

    const back = () => {
        num--;
        if (num === 0) {
            num = -1;
        }
        console.log(num);
        if (num === -1) {
            document.getElementById("title").innerHTML = "Ae Saba Musatafa Se Kehdena";
            mp3.src = './audios/naat5.mp3';
            playBtn.src = "./Images/pause.png";
            mp3.play();
            logo.classList.add("rotate-image");
        } else if (num === -2) {
            document.getElementById("title").innerHTML = "Teri Jalion K Nichy, Teri Rehmaton k Saaye";
            mp3.src = './audios/naat4.mp3';
            playBtn.src = "./Images/pause.png";
            mp3.play();
            logo.classList.add("rotate-image");
        } else if (num === -3) {
            document.getElementById("title").innerHTML = "(Most Popular Old Naat) Zahe Muqaddar";
            mp3.src = './audios/naat3.mp3';
            playBtn.src = "./Images/pause.png";
            mp3.play();
            logo.classList.add("rotate-image");       
        } else if (num === -4) {
            document.getElementById("title").innerHTML = "Rehmat Baras Rahi Hai Muhammad K Sheher Main";
            mp3.src = './audios/naat2.mp3';
            playBtn.src = "./Images/pause.png";
            mp3.play();
            logo.classList.add("rotate-image");   
        } else if (num === -5) {
            document.getElementById("title").innerHTML = "Main Madine Chala, Main Madine Chala";
            mp3.src= './audios/naat1.mp3';
            playBtn.src = "./Images/pause.png";
            mp3.play();
            logo.classList.add("rotate-image");
            num=0;
        } 
    }




