const themeBtn = document.getElementById("mavzuBtn");

if (localStorage.getItem("mavzu") === "tun") {
    document.body.classList.add("tun");
}

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("tun");

    if (document.body.classList.contains("tun")) {
        localStorage.setItem("mavzu", "tun");
    } else {
        localStorage.setItem("mavzu", "kun");
    }
});

const navLinks = document.querySelectorAll(".menyu-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.classList.remove("menyu-faol");
        });
        link.classList.add("menyu-faol");
    });
});

const tabButtons = document.querySelectorAll(".tab");
const books = document.querySelectorAll(".kitob");

tabButtons.forEach(function (tab) {
    tab.addEventListener("click", function () {
        tabButtons.forEach(function (item) {
            item.classList.remove("tab-faol");
        });
        tab.classList.add("tab-faol");

        const filter = tab.dataset.filtr;

        books.forEach(function (book) {
            if (filter === "hammasi" || book.dataset.tur === filter) {
                book.classList.remove("yashirin");
            } else {
                book.classList.add("yashirin");
            }
        });
    });
});

const reviewsList = document.getElementById("fikrLenta");
const reviews = reviewsList.querySelectorAll(".fikr");

reviews.forEach(function (review) {
    const copy = review.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    reviewsList.appendChild(copy);
});

const wishButtons = document.querySelectorAll(".like");
const wishlistCount = document.getElementById("likeSon");
let wishCount = 0;

wishButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.classList.toggle("like-faol");

        if (button.classList.contains("like-faol")) {
            wishCount++;
        } else {
            wishCount--;
        }

        wishlistCount.textContent = wishCount;
    });
});

const addButtons = document.querySelectorAll(".savat-btn");
const cartCount = document.getElementById("savatSon");
let cartTotal = 0;

addButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        cartTotal++;
        cartCount.textContent = cartTotal;
        button.classList.add("savat-btn-faol");
    });
});
