const API = "https://script.google.com/macros/s/AKfycbxZsLPU_nPBKXSmFGEDmZQbTnLtjv0Ktwb9w1In5VlWK4EkmWGl4x2E7ZFMKv3s4c8w/exec";

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