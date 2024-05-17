document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('enviar-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const doctorEmail = document.getElementById('email-medico').value; 
        const message = document.getElementById('mensagem').value; 
        const prontuarioInput = document.getElementById('prontuario');
        const prontuario = prontuarioInput.files[0];

        if (prontuario) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const prontuarioData = {
                    doctorEmail: doctorEmail,
                    message: message,
                    prontuarioName: prontuario.name,
                    prontuarioContent: e.target.result
                };

                localStorage.setItem('prontuarioData', JSON.stringify(prontuarioData));

                const statusMessage = document.getElementById('status-message');
                statusMessage.textContent = 'Email enviado com sucesso!';
                statusMessage.style.color = 'green';

                document.getElementById('email-medico').value = ''; 
                document.getElementById('mensagem').value = ''; 
                prontuarioInput.value = ''; 
            };
            reader.readAsDataURL(prontuario);
        } else {
            alert('Por favor, selecione um arquivo para enviar.');
        }
    });

    const receberProntuarioBtn = document.getElementById('prontuario-btn');

    receberProntuarioBtn.addEventListener('click', function() {
        const prontuarioData = JSON.parse(localStorage.getItem('prontuarioData'));
        const dadosRecebidos = document.getElementById('dados-recebidos');

        if (prontuarioData) {
            document.getElementById('email-recebido').textContent = prontuarioData.doctorEmail; 
            document.getElementById('mens-recebida').textContent = prontuarioData.message; 
            document.getElementById('prontuario-recebido').textContent = prontuarioData.prontuarioName; 

            const downloadLink = document.getElementById('download-link');
            downloadLink.href = prontuarioData.prontuarioContent; 
            downloadLink.style.display = 'block'; 

            dadosRecebidos.style.display = 'block';
        } else {
            dadosRecebidos.style.display = 'none';
            alert('Nenhum prontuário recebido.');
        }
    });
});
