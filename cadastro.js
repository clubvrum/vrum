const API = "https://script.google.com/macros/s/AKfycbw1aWcS4xWL0nJcEPa1SueaKJf5JRTFmS8bTZojcRnAw1ssIxdbILZ1jPQ284B3b-XK/exec";

async function cadastrar() {

  const form = new FormData();

  form.append("nome", document.getElementById("nome").value);
  form.append("email", document.getElementById("email").value);
  form.append("senha", document.getElementById("senha").value);

  const resposta = await fetch(API, {
    method: "POST",
    body: form,
    mode: "no-cors"
  });

  alert("Cadastro enviado.");
}