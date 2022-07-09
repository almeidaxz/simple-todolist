const taskInput = document.querySelector('input');
const taskAdd = document.querySelector('.btn-add')
const lista = document.querySelector('ul');


taskAdd.addEventListener('click', () => {

    if(taskInput.value.trim() !== ''){
        const tarefa = document.createElement('div');
        tarefa.classList.add('tarefas');
        const li = document.createElement('li');
        li.textContent = taskInput.value;
    
        const fechar = document.createElement('img');
        fechar.src = 'https://w7.pngwing.com/pngs/844/786/png-transparent-maine-computer-icons-close-icon.png';
    
        tarefa.append(li, fechar);
    
        li.addEventListener('click', () => {
            li.classList.toggle('completa');
        });
    
        fechar.addEventListener('click', () => {
            tarefa.remove()
        });
    
        taskInput.value = '';
        lista.append(tarefa);
    }
});
