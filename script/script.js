const form_input = document.querySelector('.input');
const text = document.querySelector('.input > input');
const btn_add = document.querySelector('.btn-add');
const todoList =document.querySelector('.todoList');
const btn_cetak = document.querySelector('.print');


function popup() {
    const p = document.createElement('p');
    const alert = document.createTextNode('isi to do dulu :)');
    p.appendChild(alert);
    p.classList.add('alert')

    return form_input.after(p);     
}

function tambah() {
    const todo = text.value;

    if(todo == '') {
        popup();

        return setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 1000);

    }

    const todo_div = document.createElement('li');
    const todo_p = document.createElement('p');
    const todo_text = document.createTextNode(todo);
    const btn_del = document.createElement('button');
    const btn_text = document.createTextNode('x');
    btn_del.appendChild(btn_text);
    btn_del.classList.add('btn-del');
    todo_p.appendChild(todo_text)
    todo_div.appendChild(todo_p);
    todo_div.appendChild(btn_del);
    todo_div.classList.add('todo');
    
    todoList.appendChild(todo_div);

    btn_del.addEventListener('click', hapus);
}

function hapus() {
    const elem = this.parentElement;
    elem.remove();
}

btn_cetak.addEventListener('click', () => {
    window.print();
})

