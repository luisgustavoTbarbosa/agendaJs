let descricao = window.document.querySelector("input#description")
let add = window.document.querySelector("input#add")

let tarefa = window.document.querySelector("div#tarefa")

let tarefas = []

//chamando ação de click do jquery
$( "#add" ).click(function() {
    traf = {
        descricao: descricao.value
    }
    tarefas.push(traf)
    let count = tarefas.length

    //adicionando um elemento dentro de um ja existente no HTML
    $( "#tbody" ).append( `<tr id="${count-1}"><td class="tarefa">${tarefas[count-1].descricao} <div id="${count-1}" class="remove">Finalizar</div></td></tr>`);
    
    //função on entrega uma ação ao componente selecionado no caso o elemento com class .remove
    $( "table" ).on( "click", ".remove", function() {
        //usando attr para pegar o id do botao que esta executando a função
        let buttonId = $(this).attr( "id" )
        //removendo tudo com o id selecionado
        $( `#${buttonId}` ).remove();
    });
});