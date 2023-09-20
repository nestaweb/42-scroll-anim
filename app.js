let animState = 0;

if (window.scrollY > 0) {
    window.scrollTo(0, 0);
}

window.addEventListener("scroll", function() {
    if (animState == 0) {
        firstTransition();
    }
    if (animState == 1) {
        secondTransition();
    }
    if (animState == 2) {
        thirdTransition();
    }
    if (animState == 3) {
        fourthTransition();
    }
    // if (state == 4) {
    //     fifthTransition();
    // }
});

function firstTransition() {
    document.querySelector("header").style.transform = `translateY(${window.scrollY}px)`;
    if (window.scrollY < window.innerHeight) {
        if (window.scrollY < window.innerHeight / 2) {
            document.getElementById("header2").style.opacity = `${0.9 + (0.1 * window.scrollY / (window.innerHeight / 2))}`;
        }
        document.getElementById("header2").style.transform = `translateY(-${17.69* window.scrollY / (window.innerHeight / 2)}vh)`;
        document.getElementById("header2").style.height = `${20 + (80 * window.scrollY / window.innerHeight)}vh`;
        document.getElementById("header2").style.width = `${15 + (85 * window.scrollY / window.innerHeight)}vw`;
    }
    if (window.scrollY > window.innerHeight) {
        animState = 1;
    }
}

function secondTransition() {
    if (window.scrollY <= window.innerHeight) {
        animState = 0;
        document.querySelector(".headerAnim0").style.opacity = 0;
    }
    else if (window.scrollY < window.innerHeight * 2){
        document.querySelector(".headerAnim0").style.opacity = 1;
    }
    if (window.scrollY > window.innerHeight * 2) {
        animState = 2;
    }
}

function thirdTransition() {
    if (window.scrollY >= window.innerHeight && window.scrollY <= window.innerHeight * 2) {
        animState = 1;
    }
    else if (window.scrollY < window.innerHeight * 2.6){
        document.querySelector(".headerAnim1").style.transform = `translateY(${window.scrollY - window.innerHeight * 2}px)`;
        if (window.scrollY > window.innerHeight * 2 && window.scrollY < window.innerHeight * 2.2) {
            document.querySelector(".slide3.textSlide").classList.remove("active");
            document.querySelector(".slide3.imgSlide").classList.remove("active");
            document.querySelector(".slide2.textSlide").classList.remove("active");
            document.querySelector(".slide2.imgSlide").classList.remove("active");
            document.querySelector(".slide1.textSlide").classList.add("active");
            document.querySelector(".slide1.imgSlide").classList.add("active");
        }
        if (window.scrollY > window.innerHeight * 2.2 && window.scrollY < window.innerHeight * 2.4) {
            document.querySelector(".slide1.textSlide").classList.remove("active");
            document.querySelector(".slide1.imgSlide").classList.remove("active");
            document.querySelector(".slide3.textSlide").classList.remove("active");
            document.querySelector(".slide3.imgSlide").classList.remove("active");
            document.querySelector(".slide2.textSlide").classList.add("active");
            document.querySelector(".slide2.imgSlide").classList.add("active");
        }
        if (window.scrollY > window.innerHeight * 2.4 && window.scrollY < window.innerHeight * 2.6) {
            document.querySelector(".slide2.textSlide").classList.remove("active");
            document.querySelector(".slide2.imgSlide").classList.remove("active");
            document.querySelector(".slide3.textSlide").classList.add("active");
            document.querySelector(".slide3.imgSlide").classList.add("active");
        }
    }
    if (window.scrollY > window.innerHeight * 3.8) {
        animState = 3;
    }
}

function fourthTransition() {
    if (window.scrollY >= window.innerHeight * 2 && window.scrollY <= window.innerHeight * 3.8) {
        document.getElementById("network1").classList.remove("visible");
        document.querySelector(".headerAnimTitle").innerText = "42 is a global Network";
        animState = 2;
    }
    else if (window.scrollY < window.innerHeight * 5.3) {
        document.querySelector(".headerAnim2").style.transform = `translateY(${window.scrollY - (window.innerHeight * 3.8)}px)`;
        if (window.scrollY < window.innerHeight * 3.9) {
            document.getElementById("network1").classList.add("visible");
            document.getElementById("network2").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Morocco";
        }
        else if (window.scrollY < window.innerHeight * 4) {
            document.getElementById("network2").classList.add("visible");
            document.getElementById("network3").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Madagascar";
        }
        else if (window.scrollY < window.innerHeight * 4.1) {
            document.getElementById("network3").classList.add("visible");
            document.getElementById("network4").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Germany";
        }
        else if (window.scrollY < window.innerHeight * 4.2) {
            document.getElementById("network4").classList.add("visible");
            document.getElementById("network5").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Brazil";
        }
        else if (window.scrollY < window.innerHeight * 4.3) {
            document.getElementById("network5").classList.add("visible");
            document.getElementById("network6").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Canada";
        }
        else if (window.scrollY < window.innerHeight * 4.4) {
            document.getElementById("network6").classList.add("visible");
            document.getElementById("network7").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "South Korea";
        }
        else if (window.scrollY < window.innerHeight * 4.5) {
            document.getElementById("network7").classList.add("visible");
            document.getElementById("network8").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Japan";
        }
        else if (window.scrollY < window.innerHeight * 4.6) {
            document.getElementById("network8").classList.add("visible");
            document.getElementById("network9").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Belgium";
        }
        else if (window.scrollY < window.innerHeight * 4.7) {
            document.getElementById("network9").classList.add("visible");
            document.getElementById("network10").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Turkey";
        }
        else if (window.scrollY < window.innerHeight * 4.8) {
            document.getElementById("network10").classList.add("visible");
            document.getElementById("network11").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Thailand";
        }
        else if (window.scrollY < window.innerHeight * 4.9) {
            document.getElementById("network11").classList.add("visible");
            document.getElementById("network12").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Spain";
        }
        else if (window.scrollY < window.innerHeight * 5) {
            document.getElementById("network12").classList.add("visible");
            document.getElementById("network13").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Portugal";
        }
        else if (window.scrollY < window.innerHeight * 5.1){
            document.getElementById("network13").classList.add("visible");
            document.getElementById("network14").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "France";
        }
        else if (window.scrollY < window.innerHeight * 5.2){
            document.getElementById("network14").classList.add("visible");
            document.getElementById("network15").classList.remove("visible");
            document.querySelector(".headerAnimTitle").innerText = "Switzerland";
        }
        else if (window.scrollY < window.innerHeight * 5.3){
            document.getElementById("network15").classList.add("visible");
            document.querySelector(".headerAnimTitle").innerText = "Italy";
        }
    }
}