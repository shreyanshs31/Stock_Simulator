const einputBtn = document.getElementById("einput")
const pinputBtn = document.getElementById("pinput")
const button = document.getElementById("button")

einputBtn.value = "Email Address"
pinputBtn.value = "Password"


einputBtn.addEventListener("click", function () {
    einputBtn.value = ""
})

pinputBtn.addEventListener("click", function () {
    pinputBtn.value = ""
})

function showError(errorElement) {
    document.querySelector("."+errorElement).classList.add("display-error")
}

function clearError() {
    let error = document.querySelectorAll(".error");
    for(let err of error) {
        err.classList.remove("display-error");
    }
}

button.addEventListener("click", function() {
    clearError();
    if (einputBtn.value ==="") {
        showError("email-error")
    } if (pinputBtn.value ===""){
        showError("password-error")
    }
})

