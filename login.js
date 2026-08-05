const API = "https://script.google.com/macros/s/AKfycbxZsLPU_nPBKXSmFGEDmZQbTnLtjv0Ktwb9w1In5VlWK4EkmWGl4x2E7ZFMKv3s4c8w/exec";

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