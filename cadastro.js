const API = "https://script.google.com/macros/s/AKfycbzScIhxB1v7f5DVtT0-p38tX2ppKj1H1kckl04aZOU3qHkcma_w10oZ-wZ5I32QTcnK/exec";

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