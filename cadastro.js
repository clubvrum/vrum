const API = "https://script.google.com/macros/s/AKfycbzLeNXVH7v1TRnHtBKOU_ByxT0mmkGV2lCkbevWGPmzBpP_60lAXhTw0KQkX6Fhg1I4/exec";

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