document.addEventListener('DOMContentLoaded', function () {
  // MENU MOBILE
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('#mobile-menu a');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // CHAT
  const chatToggle = document.getElementById('chat-toggle');
  const chatBox = document.getElementById('chat-box');
  const chatClose = document.getElementById('chat-close');
  const chatBody = document.getElementById('chat-body');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');
  const whatsappLink = document.getElementById('whatsapp-link');
  const quickButtons = document.querySelectorAll('.quick-btn');

  if (chatToggle && chatBox) {
    function openChat() {
      chatBox.classList.remove('chat-hidden');
      chatBox.style.display = 'flex';
      chatToggle.style.display = 'none';
    }

    function closeChat() {
      chatBox.classList.add('chat-hidden');
      chatBox.style.display = '';
      chatToggle.style.display = 'flex';
    }

    function addUserMessage(text) {
      if (!chatBody) return;
      const msg = document.createElement('div');
      msg.className = 'msg user';
      msg.textContent = text;
      chatBody.appendChild(msg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    function addBotMessage(text) {
      if (!chatBody) return;
      const msg = document.createElement('div');
      msg.className = 'msg bot';
      msg.innerHTML = text;
      chatBody.appendChild(msg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    function updateWhatsAppLink(message) {
      if (!whatsappLink) return;
      const encoded = encodeURIComponent(message);
      whatsappLink.href = `https://wa.me/5579998478570?text=${encoded}`;
    }

    function botReply(text) {
      const lower = text.toLowerCase();

      if (lower.includes('cftv') || lower.includes('camera') || lower.includes('câmera')) {
        addBotMessage('Perfeito. Trabalhamos com <strong>CFTV, câmeras IP, DVR e NVR</strong>. Você pode continuar pelo WhatsApp para receber um orçamento rápido.<br>👇');
        return;
      }

      if (lower.includes('alarme')) {
        addBotMessage('Ótimo. Fazemos instalação e manutenção de <strong>sistemas de alarme</strong> para residências e empresas. Você pode continuar pelo WhatsApp para receber um orçamento rápido.<br>👇');
        return;
      }

      if (lower.includes('cerca')) {
        addBotMessage('Certo. Trabalhamos com <strong>cerca elétrica</strong> com instalação segura e suporte técnico. Você pode continuar pelo WhatsApp para receber um orçamento rápido.<br>👇');
        return;
      }

      if (
        lower.includes('elétrica') ||
        lower.includes('eletrica') ||
        lower.includes('serviço elétrico') ||
        lower.includes('servico eletrico')
      ) {
        addBotMessage('Perfeito. Também atendemos com <strong>instalações e manutenção elétrica</strong>. Você pode continuar pelo WhatsApp para receber um orçamento rápido.<br>👇');
        return;
      }

      if (lower.includes('orçamento') || lower.includes('orcamento')) {
        addBotMessage('Claro. Clique em <strong>Continuar no WhatsApp</strong> para enviar sua solicitação e agilizar seu atendimento.');
        return;
      }

      addBotMessage('Recebi sua mensagem. Para um atendimento mais rápido e envio de orçamento, clique em <strong>Continuar no WhatsApp</strong>.');
    }

    function handleMessage(text) {
      if (!text || !text.trim()) return;
      addUserMessage(text);
      updateWhatsAppLink(text);

      if (chatInput) {
        chatInput.value = '';
      }

      setTimeout(function () {
        botReply(text);
      }, 400);
    }

    chatToggle.addEventListener('click', openChat);

    if (chatClose) {
      chatClose.addEventListener('click', closeChat);
    }

    if (sendBtn && chatInput) {
      sendBtn.addEventListener('click', function () {
        handleMessage(chatInput.value);
      });
    }

    if (chatInput) {
      chatInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          handleMessage(chatInput.value);
        }
      });
    }

    quickButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        handleMessage(btn.dataset.message);
      });
    });
  }
});
