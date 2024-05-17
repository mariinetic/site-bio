document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('receive-form').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Formulário de recebimento de prontuário enviado');

        const doctorEmail = document.getElementById('doctor-email').value; 
        const message = document.getElementById('message').value; 

        const prontuarioInput = document.getElementById('prontuario');
        const prontuario = prontuarioInput.files[0];

       
        if (prontuario) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const prontuarioData = {
                    doctorEmail: doctorEmail, 
                    message: message,
                    prontuarioName: prontuario.name,
                    prontuarioContent: e.target.result,
                    patientEmail: "emaildopaciente@gmail.com"
                };

                
                const eventoProntuarioEnviado = new CustomEvent('prontuarioEnviado', { detail: prontuarioData });
                window.dispatchEvent(eventoProntuarioEnviado);

                localStorage.setItem('prontuarioData', JSON.stringify(prontuarioData));

                
                const statusMessage = document.getElementById('status-message');
                statusMessage.textContent = 'Email enviado com sucesso!';
                statusMessage.style.color = 'green'; 

               
                document.getElementById('doctor-email').value = '';
                document.getElementById('message').value = '';
                prontuarioInput.value = ''; 
            };
            reader.readAsDataURL(prontuario); 
        } else {
            alert('Por favor, selecione um arquivo para enviar.');
        }
    });
});
