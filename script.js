let eventoInstalacao;
const botao = document.getElementById('botaoInstalar');

// O navegador avisa que o sistema (Windows/Android) aceita instalar
window.addEventListener('beforeinstallprompt', (evento) => {
  evento.preventDefault(); 
  eventoInstalacao = evento; 
  botao.style.display = 'block'; // O botão fica visível para o cliente
});

// O que acontece quando o cliente clica no botão
botao.addEventListener('click', () => {
  if (eventoInstalacao) {
    eventoInstalacao.prompt(); // Abre a janela de instalação do Windows/Android
    
    eventoInstalacao.userChoice.then((escolha) => {
      if (escolha.outcome === 'accepted') {
        botao.style.display = 'none'; // Esconde o botão após instalar
      }
      eventoInstalacao = null;
    });
  }
});
