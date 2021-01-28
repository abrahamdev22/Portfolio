function openNav() {
    document.querySelector(".mid-display").style.transition ="height 0.2s";
    document.querySelector(".mid-display").style.height ="280px";
    document.querySelector(".topbar").classList.add("active");
    document.querySelector(".topline").classList.add("open");
    
    document.querySelector(".openbtn").setAttribute("onclick", "closeNav()");
    // document.querySelector("#intro").style.top = "300px";
    // document.querySelector("#portfolio").style.margin = "300px auto";
    // document.querySelector("#contact").style.margin = "300px auto";
    // document.querySelector("main").style.top = "250px";
    // document.querySelector("#intro").style.position = "relative";
    // document.querySelector("main").classList.add("main-active");
    document.querySelector("#intro").classList.add("intro-active");
    document.querySelector("#portfolio").classList.add("portfolio-active");
    document.querySelector("#portfolio").classList.remove("portfolio-slideup");
    document.querySelector("#contact").classList.add("contact-active");
    document.querySelector("#contact").classList.remove("contact-slideup");
}


function closeNav() {
    document.querySelector(".mid-display").style.height = "50px";
    document.querySelector(".openbtn").setAttribute("onclick", "openNav()");
    // document.getElementById("avatar").classList.remove("active");
    document.querySelector(".topbar").classList.remove("active");
    document.querySelector(".topline").classList.remove("open");
    // document.querySelector(".topbar-title").classList.add("closed");
    // document.querySelector("#intro").style.top = "auto";
    // document.querySelector("#portfolio").style.margin = "auto";
    // document.querySelector("#contact").style.margin = "auto";
    // document.querySelector("main").style.top = "0";
    // document.querySelector("#intro").style.top = "20em";
    // document.querySelector("#intro").style.position = "none";
    // document.querySelector("main").classList.remove("main-active");
    document.querySelector("#intro").classList.remove("intro-active");
    document.querySelector("#portfolio").classList.remove("portfolio-active");
    document.querySelector("#portfolio").classList.add("portfolio-slideup");
    document.querySelector("#contact").classList.remove("contact-active");
    document.querySelector("#contact").classList.add("contact-slideup");
}
