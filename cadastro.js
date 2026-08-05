const API = "https://script.google.com/macros/s/AKfycbypTJGoN9Xh8-SOSxVxqlZNm7qIFkUhNKJ0ZearhW5s5pH2gDoisbUDcLrX82o9gpsF/exec";

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