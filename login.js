const API = "https://script.google.com/macros/s/AKfycbw-ZBiZ4mHRaRIXFo4UBc8wgMtqYCo7qDB0jSuMLZR03Ntx0Gf9QQTdCKzWGegqdPV5/exec";

async function login() {
  
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  
  const resposta = await fetch(
    API + "?email=" + encodeURIComponent(email) +
    "&senha=" + encodeURIComponent(senha)
  );
  
  const dados = await resposta.json();
  
  if (dados.ok) {
    alert("Bem-vindo, " + dados.nome + "!");
    window.location.href = "index.html";
  } else {
    alert("E-mail ou senha inválidos.");
  }
  
}