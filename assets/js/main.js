var pullChain = document.getElementById("pull-chain");
var css = document.getElementById("css");
var blog = document.getElementById("blog_css");
var email = document.getElementById("email_css");
var toggled = true
pullChain.addEventListener("click", function () {
    startTimer();
}, false);

function startTimer() {
    pullChain.classList.toggle("pulled");
    setTimeout(stopTimer, 500);
}

function stopTimer() {
    toggleLights();
    pullChain.classList.toggle("pulled");
}

function toggleLights() {
    if (toggled == true) {
        css.setAttribute('href', 'https://alecw.net/assets/css/index.css')
        blog.setAttribute('href', '/assets/css/blog.css')
        email.setAttribute('href', '/assets/css/email_form.css')
        toggled = false
    } else {
        css.setAttribute('href', 'https://alecw.net/assets/css/light.css')
        blog.setAttribute('href', '/assets/css/blog_light.css')
        email.setAttribute('href', '/assets/css/email_form_light.css')
        toggled = true
    }
}