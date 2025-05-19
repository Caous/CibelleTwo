// Data do evento: 5 de junho de 2025 às 20h00 (horário de Brasília)
const targetDate = new Date("2025-06-05T20:00:00-03:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML = "A live começou! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}, 1000);
function showToast(message) {
  const toastContainer = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function enviarFormulario(e) {
  e.preventDefault();
  const form = e.target;
  const nome = form.nome.value;
  const email = form.email.value;

  if (!nome || !email) {
    showToast("Preencha seu nome e e-mail");
    return;
  }

  fetch(
    "https://script.google.com/macros/s/AKfycbyDeE1odSDyMeQEGDwtOFFNo4K5eRn_T9-BZIQtRHqkU51SF3S65h_t6usyX7s_XGFTfw/exec",
    {
      method: "POST",
      body: new URLSearchParams({ nome, email }),
    }
  ).then(() => {
    showToast("Dados enviados com sucesso");
    form.reset();
  });
}
