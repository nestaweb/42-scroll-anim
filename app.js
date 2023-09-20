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
    // if (state == 2) {
    //     thirdTransition();
    // }
    // if (state == 3) {
    //     fourthTransition();
    // }
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
}