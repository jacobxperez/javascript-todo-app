const getMakeList = document.querySelectorAll('[data-list="make-list"]');

const todoList = () => {
    getMakeList.forEach(() => {
        // Initialize todo list
        const list = [];
        const getList = document.querySelector('[data-list="todo-list"]');
        const addButton = document.querySelector('[data-button="add-item"]');

        // Function to add new item to list
        const addItem = () => {
            // Get input value
            let item = document.getElementById('newItem').value;
            // Add item to list
            list.push(item);
            // Clear input field
            document.getElementById('newItem').value = '';
            // Render updated list
            renderList();
        };

        addButton.addEventListener('click', () => {
            addItem();
        });

        // Function to delete item from list
        const deleteItem = (index) => {
            // Remove item from list at specified index
            list.splice(index, 1);
            // Render updated list
            renderList();
        };

        // Function to render updated list
        const renderList = () => {
            // Get todo list element
            let todoList = document.getElementById('todoList');
            // Clear current list
            getList.innerHTML = '';
            // Loop through list items and create new list elements
            for (let i = 0; i < list.length; i++) {
                // Create new list element
                let item = document.createElement('li');
                // Add text content to new element
                item.appendChild(document.createTextNode(list[i]));
                // Create delete button for item
                let deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'Delete';
                // Add delete function to button
                deleteButton.onclick = function () {
                    deleteItem(i);
                };
                // Add delete button to item
                item.appendChild(deleteButton);
                // Add new item to list
                getList.appendChild(item);
            }
        };
    });
};

export {todoList};
