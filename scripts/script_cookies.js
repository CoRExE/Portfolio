const modal = document.getElementById("modal");
const btnAccept = document.getElementById("btn-accept");
const btnRefuse = document.getElementById("btn-refuse");

function showModal() {
  modal.style.display = "flex";
}

function hideModal() {
  modal.style.display = "none";
}

function acceptCookies() {
  document.cookie = "cookies_accepted=true; max-age=86400; path=/"; // cookie valable 1 jour
  hideModal();
}

function refuseCookies() {
  document.cookie = "cookies_accepted=false; max-age=86400; path=/";
  hideModal();
}

btnAccept.addEventListener("click", acceptCookies);
btnRefuse.addEventListener("click", refuseCookies);

// Vérifier si l'utilisateur a déjà accepté les cookies
const cookiesAccepted = document.cookie.split(';').some((item) => item.trim().startsWith('cookies_accepted='));
if (!cookiesAccepted) {
  showModal();
}
