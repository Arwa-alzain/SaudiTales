//menu:
const offcanvasEl = document.getElementById("navbarMenu");
offcanvasEl.addEventListener("show.bs.offcanvas", () => {
  console.log("Menu opened");
});

// home page animation:
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// pages animation
window.addEventListener("load", () => {
  document.querySelectorAll(".fade-in").forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 150);
  });
});

// logout pop window
const logoutModal = document.getElementById("modal-logout");
const closelogModal = document.getElementById("close-log-modal");

document.querySelectorAll(".logout-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    logoutModal.style.display = "flex";
  });
});

closelogModal.addEventListener("click", () => {
  logoutModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === logoutModal) {
    logoutModal.style.display = "none";
  }
});

//filter btn on expolre page
const filterbtn = document.querySelector(".filter-btn");
const optionslist = document.querySelector(".options-list");
const selectedtags = document.querySelector(".selected-tags");
//open menu
filterbtn.addEventListener("click", () => {
  if (optionslist.style.display == "block") {
    optionslist.style.display = "none";
  } else {
    optionslist.style.display = "block";
  }
});
//options
const options = document.querySelectorAll(".option");
//add event for options
options.forEach((option) => {
  option.addEventListener("click", () => {
    let value = option.dataset.value;
    //not repeate options
    if (document.querySelector(`.tag[data-value="${value}"]`)) {
      optionslist.style.display = "none";
      return;
    }
    //create the tags
    let tag = document.createElement("span");
    tag.classList.add("tag");
    tag.dataset.value = value;
    tag.innerHTML = `${value} <span class="remove-tag">&times;</span>`;

    selectedtags.appendChild(tag);

    optionslist.style.display = "none";
  });
});
//delete the tag
selectedtags.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-tag")) {
    e.target.parentElement.remove();
  }
});

// Dark/Light Mode Toggle
(function () {
  "use strict";

  const html = document.documentElement;
  const modBtns = document.querySelectorAll(".mod-btn");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    html.setAttribute("data-theme", "dark");
    modBtns.forEach((btn) => btn.classList.add("dark-mode"));
  } else {
    html.removeAttribute("data-theme");
    modBtns.forEach((btn) => btn.classList.add("light-mode"));
  }

  // Toggle function
  function toggleTheme() {
    if (html.getAttribute("data-theme") === "dark") {
      // Switch to light
      html.removeAttribute("data-theme");
      modBtns.forEach((btn) => {
        btn.classList.remove("dark-mode");
        btn.classList.add("light-mode");
      });
      localStorage.setItem("theme", "light");
    } else {
      // Switch to dark
      html.setAttribute("data-theme", "dark");
      modBtns.forEach((btn) => {
        btn.classList.remove("light-mode");
        btn.classList.add("dark-mode");
      });
      localStorage.setItem("theme", "dark");
    }
  }

  // Event listeners
  modBtns.forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });

  // Icon swap CSS is in style.css
})();

//Image recognition section
const imageinput = document.getElementById("ImageInput");
const previewImage = document.getElementById("previewImage");
const uploadText = document.getElementById("uploadText");

imageinput.addEventListener("change", () => {
  const file = imageinput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.src = e.target.result;
      uploadText.textContent = "Image uploaded";
    };
    reader.readAsDataURL(file);
  }
});
