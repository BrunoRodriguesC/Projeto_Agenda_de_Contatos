const formulario = document.getElementById('formulario_de_contatos');
const contato = []; 
const numero = [];

let Contatos = '';

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

        adicionarContato();
        atualizarTabela();
});



function adicionarContato() {
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    if (contato.includes(nomeContato.value) || numero.includes(numeroContato.value)) {
        alert(`A contato: ${nomeContato.value} já foi inserido`);
    } else {
        contato.push(nomeContato.value);
    numero.push(numeroContato.value);

    let novoContato = '<tr>';
    novoContato += `<td>${nomeContato.value}</td>`;
    novoContato += `<td>${numeroContato.value}</td>`;
    novoContato += `<td><button class='excluir' onClick="deleteRow(this.parentNode.parentNode.rowIndex)">excluir</button></td>`
    novoContato += '</tr>';

    Contatos += novoContato;
    }

    nomeContato.value = '';
    numeroContato.value = '';
}

function deleteRow(i) {
    document.getElementById('tabela').deleteRow(i);

}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = Contatos;
}
