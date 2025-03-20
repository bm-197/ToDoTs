"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var todos = [];
var id = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var addItem = function (name) {
    var task = { name: name, createdAt: new Date() };
    todos.push({ id: id++, task: task });
};
var removeItem = function (id) {
    todos = todos.filter(function (item) { return item.id !== id; });
};
var updateItem = function (id, newName) {
    todos = todos.map(function (item) {
        if (item.id === id) {
            item.task.name = newName;
            item.task.updatedAt = new Date();
        }
        return item;
    });
};
var listItems = function () {
    if (todos.length === 0) {
        console.log("No tasks available.");
    }
    else {
        todos.forEach(function (item) {
            console.log("".concat(item.id, ": ").concat(item.task.name));
        });
    }
};
var displayMenu = function () {
    console.log("\nChoose an option:");
    console.log("1. Add Task");
    console.log("2. Remove Task");
    console.log("3. Update Task");
    console.log("4. List Tasks");
    console.log("5. Exit");
};
var handleInput = function () {
    rl.question('Select an option (1-5): ', function (option) {
        switch (option) {
            case '1':
                rl.question('Enter task name: ', function (name) {
                    addItem(name);
                    console.log("Task \"".concat(name, "\" added."));
                    handleInput();
                });
                break;
            case '2':
                rl.question('Enter task ID to remove: ', function (idInput) {
                    var idToRemove = parseInt(idInput);
                    removeItem(idToRemove);
                    console.log("Task with ID ".concat(idToRemove, " removed."));
                    handleInput();
                });
                break;
            case '3':
                rl.question('Enter task ID to update: ', function (idInput) {
                    var idToUpdate = parseInt(idInput);
                    rl.question('Enter new task name: ', function (newName) {
                        updateItem(idToUpdate, newName);
                        console.log("Task with ID ".concat(idToUpdate, " updated."));
                        handleInput();
                    });
                });
                break;
            case '4':
                listItems();
                handleInput();
                break;
            case '5':
                console.log('Goodbye!');
                rl.close();
                break;
            default:
                console.log('Invalid option. Please choose between 1-5.');
                handleInput();
                break;
        }
    });
};
displayMenu();
handleInput();
