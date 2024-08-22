// mode function
function modes() {
    // تعريف المتغيرات
    let content = document.getElementById("modes");
    let nav = document.getElementById("navbar");
    let cards = document.querySelectorAll(".card");

    if (content.innerHTML === "light mode") {
        // change button content
        content.innerHTML = "dark mode";
        // change navber theme
        nav.setAttribute("data-bs-theme", "dark");
        // change button theme
        content.classList.replace("btn-secondary", "btn-light")
        // change background theme
        document.body.style.backgroundColor = "#222222";
        // change cards theme
        cards.forEach(function (card) {
            card.setAttribute("data-bs-theme", "dark");
            card.style.boxShadow = "10px 10px 20px rgba(255, 255, 255, 0.1)";
            });

    } else if (content.innerHTML === "dark mode") {
        // change button content
        content.innerHTML = "light mode";
        // change navber theme
        nav.removeAttribute("data-bs-theme");
        // change button theme
        content.classList.replace("btn-light", "btn-secondary");
        // change background theme
        document.body.style.backgroundColor = "white";
        // change cards theme
        cards.forEach(function (card) {
            card.removeAttribute("data-bs-theme");
            card.style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.1)";
        });
    }
}


// content view function
function content(){
    // تعريف المتغيرات  
    let products = document.getElementById("products");
    let main = document.getElementById("main-section")

    if(products.innerHTML === "hide content"){
        products.innerHTML = "show content";
        products.classList.replace("btn-success","btn-danger")
        main.style.display = "none";
    }
    else if(products.innerHTML === "show content"){
        products.innerHTML = "hide content";
        products.classList.replace("btn-danger","btn-success");
        main.style.display = "block";

    }
}

