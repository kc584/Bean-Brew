document.getElementById("buyButton").addEventListener("click", function() {
    var button = this;
    if (button.classList.contains("btn-colour")) {
        button.classList.remove("btn-colour");
        button.classList.add("btn-success");
        button.ariaValueMax.add = "Pre-ordered!";
    }
    });
