function goToHome() {
    document.getElementById("user").classList.add("hidden")
    document.getElementById("header").classList.remove("hidden")
}

function goToUser() {
    document.getElementById("user").classList.remove("hidden")
    document.getElementById("header").classList.add("hidden")
}