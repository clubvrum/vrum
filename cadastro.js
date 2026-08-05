const API = "https://script.google.com/macros/s/AKfycbwadtljdewtO__ouXt0BaWtlcGIm4bt_Z4Hv6iKlbBusLjpeI9mw05guVvRtufcCVc/exec";

async function cadastrar() {

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  const form = new FormData();
  form.append("nome", nome);
  form.append("email", email);
  form.append("senha", senha);

  try {

    const resposta = await fetch(API, {
      method: "POST",
      body: form
    });

    const dados = await resposta.json();

    alert(dados.mensagem);

    if (dados.ok) {
      window.location.href = "login.html";
    }

  } catch (erro) {
    alert("Erro: " + erro.message);
  }

}