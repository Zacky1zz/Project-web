
const items = ['Item 1', 'Item 2', 'Item 3'];
const listDiv = document.getElementById('listclass');
const ul = document.createElement('ul');
listDiv.appendChild(ul);

items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);

    const button = document.createElement('button');
    button.textContent = 'delete';
    button.classList.add('ml-[20px]');
    button.classList.add('my-[10px]');
    button.classList.add('rounded');
    button.classList.add('bg-blue-900'); 
    button.addEventListener('click', () => {
        ul.removeChild(li);
    });
    li.appendChild(button);
});
