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
    if (animState == 4) {
        fifthTransition();
    }
});

function firstTransition() {
    document.querySelector("header").style.transform = `translateY(${window.scrollY}px)`;
    if (window.scrollY < window.innerHeight) {
        if (window.scrollY < window.innerHeight / 2) {
            document.getElementById("header2").style.opacity = `${0.9 + (0.1 * window.scrollY / (window.innerHeight / 2))}`;
        }
        document.getElementById("header2").style.transform = `translateY(-${17.69* window.scrollY / (window.innerHeight / 2)}vh)`;
        document.getElementById("header2").style.height = `${20 + (80 * window.scrollY / window.innerHeight)}vh`;
        if (window.innerWidth > 1024)
            initialWidth = 15 + (85 * window.scrollY / window.innerHeight);
        else
            initialWidth = 25 + (90 * window.scrollY / window.innerHeight);
        document.getElementById("header2").style.width = `${initialWidth}vw`;
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
    if (window.scrollY > window.innerHeight * 6.3) {
        animState = 4;
    }
}


function fifthTransition() {
    if (window.innerWidth > 1024)
        circleRotation = "scale(0.85)";
    else
        circleRotation = "scale(0.5)";
    if (window.scrollY < window.innerHeight * 6.3) {
        document.querySelector(".circle").style.transform = "rotate(0)" + circleRotation;
        document.querySelector(".valueText").style.transform = "rotate(0) scale(1.15)";
        animState = 3;
    }
    else if (window.scrollY < window.innerHeight * 9) {
        document.querySelector(".headerAnim3").style.transform = `translateY(${window.scrollY - (window.innerHeight * 6.3)}px)`;
        if (window.scrollY < window.innerHeight * 7) {
            document.querySelector(".circle").style.transform = "rotate(-45deg)" + circleRotation;
            document.querySelector(".valueText").style.transform = "rotate(45deg) scale(1.15)";
            document.querySelector(".valueTitle").innerText = "A GLOBAL NETWORK OF EXCELLENCE";
            document.querySelector(".valueDesc").innerText = "To seize opportunities wherever they may be, 42 is opening up globally through its network of partner campuses in France and around the world. All the campuses are connected to mutualize their programs, knowledge and paths. After the core curriculum, you may continue your studies on one of the Network’s campuses to benefit from International experience. The diversity of profiles, nationalities and cultures allows you to broaden your perspectives.";
        }
        else if (window.scrollY < window.innerHeight * 7.3) {
            document.querySelector(".circle").style.transform = "rotate(-90deg)" + circleRotation;
            document.querySelector(".valueText").style.transform = "rotate(90deg) scale(1.15)";
            document.querySelector(".valueTitle").innerText = "INCLUSIVE";
            document.querySelector(".valueDesc").innerText = "Everyone can code and work in IT. We refuse gender stereotypes and welcome atypical profiles and people looking to branch out from a former path, in retraining or from disadvantaged backgrounds. We fight discrimination on a daily basis. Diversity is a strength that allows us to face ever-growing challenges together. Once you have reached majority, there are no age restrictions to apply to 42.";
        }
        else if (window.scrollY < window.innerHeight * 7.6) {
            document.querySelector(".circle").style.transform = "rotate(-135deg)" + circleRotation;
            document.querySelector(".valueText").style.transform = "rotate(135deg) scale(1.15)";
            document.querySelector(".valueTitle").innerText = "THREE YEARS MORE OR LESS";
            document.querySelector(".valueDesc").innerText = "We believe that laying the foundations of programming should happen in the pace and rhythm that matches with the students. Therefore, 42’s projects are not limited in time. Next to that, the only consequence of failing a project, is that you can try it again! Some students might move faster than others through the curriculum for this reason. Though, on average, our students reach level 21 in 3 years.";
        }
        else if (window.scrollY < window.innerHeight * 7.9) {
            document.querySelector(".circle").style.transform = "rotate(-180deg)" + circleRotation;
            document.querySelector(".valueText").style.transform = "rotate(180deg) scale(1.15)";
            document.querySelector(".valueTitle").innerText = "NO COURSES. NO TEACHERS. NO CLASSES.";
            document.querySelector(".valueDesc").innerText = "Thanks to its innovative teaching methods, 42 proposes high-quality training without having to resort to lectures. Different from traditional methods, students learn programming through a peer-to-peer learning method. That means that students learn programming from and with each other. The pedagogic staff is ever present to support and motivate the students, rather than to teach. In order to progress at 42, teamwork is required.";
        }
        else if (window.scrollY < window.innerHeight * 8.2) {
            document.querySelector(".circle").style.transform = "rotate(-215deg)" + circleRotation;
            document.querySelector(".valueText").style.transform = "rotate(215deg) scale(1.15)";
            document.querySelector(".valueTitle").innerText = "NOT JUST A JOB: A CAREER";
            document.querySelector(".valueDesc").innerText = "The training at 42 will not only grant you a job, it will train you for the jobs of tomorrow. At 42, you learn to learn so you keep growing professionally. Rather than offering a series of short training courses about specific technologies and languages that will quickly become obsolete, at 42 you learn  how to learn throughout your life in order to adapt to new technologies yet to be developed. With this skill in your pocket, you remain up-to-date for the jobs of tomorrow.";
        }
        else if (window.scrollY < window.innerHeight * 8.5) {
            document.querySelector(".circle").style.transform = "rotate(-270deg)" + circleRotation;
            document.querySelector(".valueText").style.transform = "rotate(270deg) scale(1.15)";
            document.querySelector(".valueTitle").innerText = "NO DEGREE REQUIRED";
            document.querySelector(".valueDesc").innerText = "Selection for entry at 42 is a positioning test that is not based on an academic record, standard test scores or a degree. We invite candidates who pass the first registration steps to spend a month with us in order to discover the way we work. This period offers them an opportunity to determine for themselves if 42’s methods suit them. Even though we do welcome those who are lo longer in school, we don’t encourage our applicants to stop their current studies.";
        }
        else if (window.scrollY < window.innerHeight * 8.8) {
            document.querySelector(".circle").style.transform = "rotate(-315deg)" + circleRotation;
            document.querySelector(".valueText").style.transform = "rotate(315deg) scale(1.15)";
            document.querySelector(".valueTitle").innerText = "NO PRIOR EXPERIENCE IN CODING REQUIRED";
            document.querySelector(".valueDesc").innerText = "The 42 training is complete. It starts from scratch for every student. You can apply to 42 even if you have never coded in your life. Though ambitious, the training course allows anyone who takes it to find a job and a career in IT.";
        }
    }
}

// Intersection Observer API on div.innerHeader and add class .anim on .innerHeader

const innerHeader = document.querySelector(".headerAnim4 .innerHeader");

const innerHeaderOptions = {
    rootMargin: "-100px 0px 0px 0px"
};

const innerHeaderObserver = new IntersectionObserver(function(entries, innerHeaderObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            document.querySelector(".headerAnim4 .innerHeader").classList.remove("anim");
            document.querySelector(".headerAnim4 h2").classList.remove("active");
        } else {
            document.querySelector(".headerAnim4 .innerHeader").classList.add("anim");
            document.querySelector(".headerAnim4 h2").classList.add("active");
        }
    });
}
, innerHeaderOptions);

innerHeaderObserver.observe(innerHeader); 