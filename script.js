
const boutons = document.querySelectorAll(".my-button");
boutons.forEach(bouton => {
  bouton.addEventListener("click", () => {
    boutons.forEach(b => {
      b.classList.remove("active");
      b.textContent = b.textContent.replace(" ✔", "");
    });
    bouton.classList.add("active");
    bouton.textContent = bouton.textContent.replace(" ✔", "") + " ✔";
  });
});

const zone = document.getElementById("hover-zone");
zone.addEventListener("mouseover", () => zone.style.backgroundColor = "#cfc");
zone.addEventListener("mouseout", () => zone.style.backgroundColor = "#eee");


document.addEventListener("keypress", event => {
  document.getElementById("key-display").textContent = event.key;
});


window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.style.background = "tomato";
  } else {
    header.style.background = "var(--main-color)";
  }
});


window.addEventListener("load", () => {
  alert("La page est bien chargée !");
});


document.getElementById("my-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Formulaire intercepté !");
});


document.getElementById("onclick-button").onclick = () => alert("Clicked via onclick");


document.getElementById("parent").addEventListener("click", () => alert("Clic sur le parent !"));
document.getElementById("child").addEventListener("click", e => {
  e.stopPropagation();
  alert("Clic sur l'enfant !");
});


const tempBtn = document.getElementById("temp-button");
function tempClick() { alert("Bravo, tu as cliqué à temps !"); }
tempBtn.addEventListener("click", tempClick);
setTimeout(() => {
  tempBtn.removeEventListener("click", tempClick);
  tempBtn.disabled = true;
  tempBtn.textContent = "Trop tard !";
}, 5000);


function updateScreenInfo() {
  document.getElementById("screen-info").textContent = "Largeur écran : " + window.innerWidth + "px";
}
updateScreenInfo();
window.addEventListener("resize", updateScreenInfo);


document.getElementById("color-button").addEventListener("click", () => {
  document.documentElement.style.setProperty('--main-color', '#e67e22');
});
