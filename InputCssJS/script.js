
        // Vetor para armazenar os dados do formulário
        const dadosFormulario = [];

        // Atualiza o valor do range dinamicamente
        document.getElementById('faixa').addEventListener('input', function() {
            document.getElementById('valorFaixa').textContent = this.value;
        });

        // Captura os dados do formulário ao clicar no botão "Salvar Dados"
        document.getElementById('salvar').addEventListener('click', function() {
            const dados = {
                texto: document.getElementById('texto').value,
                senha: document.getElementById('senha').value,
                email: document.getElementById('email').value,
                numero: document.getElementById('numero').value,
                telefone: document.getElementById('telefone').value,
                url: document.getElementById('url').value,
                data: document.getElementById('data').value,
                hora: document.getElementById('hora').value,
                cor: document.getElementById('cor').value,
                faixa: document.getElementById('faixa').value,
                pesquisa: document.getElementById('pesquisa').value,
                oculto: document.getElementById('oculto').value
            };

            // Adiciona os dados ao vetor
            dadosFormulario.push(dados);

            // Exibe os dados no console (ou pode ser usado para outra finalidade)
            console.log('Dados salvos:', dados);
            console.log('Vetor completo:', dadosFormulario);

            alert('Dados salvos com sucesso!');
        });
