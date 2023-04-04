const getMakeList = document.querySelectorAll('[data-list="make-list"]');

const todoList = () => {
    getMakeList.forEach((item) => {
        // Initialize todo list
        const list = [];
        // Get todo list element
        const getList = item.querySelector('[data-list="todo-list"]');
        // get add button
        const addButton = item.querySelector('[data-button="add-item"]');
        // Get input value
        const getInput = item.querySelector('input');

        // Function to add new item to list
        const addItem = () => {
            // Add item to list
            list.push(getInput.value);
            // Clear input field
            getInput.value = '';
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
            // Clear current list
            getList.innerHTML = '';
            // Loop through list items and create new list elements
            for (let i = 0; i < list.length; i++) {
                // Create new list element
                let newItem = document.createElement('li');
                // Add text content to new element
                newItem.appendChild(document.createTextNode(list[i]));
                // Create delete button for item
                let deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'Delete';
                // Add delete function to button
                deleteButton.onclick = function () {
                    deleteItem(i);
                };
                // Add delete button to item
                newItem.appendChild(deleteButton);
                // Add new item to list
                getList.appendChild(newItem);
            }
        };
    });
};

export {todoList};
