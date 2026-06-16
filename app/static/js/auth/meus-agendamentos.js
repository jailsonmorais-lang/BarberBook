const cardResumo = document.querySelectorAll('div.card-resumo')
cardResumo.forEach((cards) => {
    cards.addEventListener('click', () => {
        cards.parentElement.classList.toggle('aberto')
        console.log('Clicou no card')
    })
})

document.querySelector('button.btn-voltar').addEventListener('click', (evento) => {
    evento.preventDefault()
    window.location = '/dashboard'
})
// 1. Seleciona todos os botões
const botoes = document.querySelectorAll('.btn-cancelar')
const cancelamento = document.querySelector('div.cancelamento')
// 2. Percorre cada um
if (botoes.length > 0) {
    botoes.forEach(btn => {
        btn.addEventListener('click', () => {
            // 3. Pega o data-id
            const id = btn.getAttribute('data-id')
            // 4. Envia para o Flask via fetch
            fetch('/cancelar-agendamento', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id })
            })
                .then(resposta => resposta.json())
                .then(dado => {
                    if (dado.erro) {
                        mostrarMensagem(cancelamento, dado.erro)
                    } else {
                        mostrarMensagem(cancelamento, dado.mensagem)
                    }
                })
        })
    })
}