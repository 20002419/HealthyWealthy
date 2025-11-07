// ================== DARK / LIGHT MODE ==================
const modeBtn = document.getElementById("modeToggle");
const body = document.body;

if (modeBtn) {
  if (localStorage.getItem("mode") === "dark") {
    body.classList.add("dark-mode");
    modeBtn.textContent = "☀️";
  }

  modeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    modeBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("mode", isDark ? "dark" : "light");
  });
}

// ================== SCROLL BUTTONS ==================
const scrollTopBtn = document.getElementById("scrollTop");
const scrollBottomBtn = document.getElementById("scrollBottom");

if (scrollTopBtn && scrollBottomBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  scrollBottomBtn.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });
}

// ================== COOKIE BANNER ==================
const cookieBanner = document.getElementById("cookieBanner");
const acceptCookiesBtn = document.getElementById("acceptCookies");

if (cookieBanner && acceptCookiesBtn) {
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "flex";
  }

  acceptCookiesBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });
}

// ================== REGISTRATION FORM ==================
const form = document.getElementById("registerForm");
const message = document.getElementById("formMessage");

if (form && message) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      message.textContent = "Please enter your name.";
      message.style.color = "red";
      return;
    }
    message.textContent = `Welcome, ${name}! Your registration is successful.`;
    message.style.color = "green";
    form.reset();
  });
}

// ================== POP-UPS ==================
function featurePopup(title) {
  alert(`You clicked on "${title}". Learn more in our Membership section!`);
}

function buyMembership(plan) {
  alert(`🎉 Thank you for choosing the ${plan}! We'll contact you soon.`);
}
