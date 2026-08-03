export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }
  
  try {
    // Dados enviados pela InfinitePay
    const evento = req.body;
    
    console.log("Webhook recebido:", JSON.stringify(evento, null, 2));
    
    // Aqui você verificará se o pagamento foi aprovado
    // Exemplo (ajustaremos ao formato real enviado):
    /*
    if (evento.status === "PAID") {
      const email = evento.customer.email;

      // Liberar acesso ao usuário
      // Salvar no banco de dados
      // Enviar e-mail
    }
    */
    
    return res.status(200).json({
      success: true,
      message: "Webhook recebido com sucesso"
    });
    
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Erro interno"
    });
  }
}