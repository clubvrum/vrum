const API = "https://script.google.com/macros/s/AKfycbw-ZBiZ4mHRaRIXFo4UBc8wgMtqYCo7qDB0jSuMLZR03Ntx0Gf9QQTdCKzWGegqdPV5/exec";

async function cadastrar() {
  
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  
  if (!nome || !email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }
  
  try {
    const resposta = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome,
        email,
        senha
      })
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