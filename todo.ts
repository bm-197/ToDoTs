import * as readline from 'readline';

interface Todo {
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface Item {
  readonly id: number;
  task: Todo;
}

let todos: Item[] = [];
let id = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addItem = (name: string) => {
  const task: Todo = { name: name, createdAt: new Date() };
  todos.push({ id: id++, task: task });
};

const removeItem = (id: number) => {
  todos = todos.filter((item: Item) => item.id !== id);
};

const updateItem = (id: number, newName: string) => {
  todos = todos.map((item: Item) => {
    if (item.id === id) {
      item.task.name = newName;
      item.task.updatedAt = new Date();
    }
    return item;
  });
};

const listItems = () => {
  if (todos.length === 0) {
    console.log("No tasks available.");
  } else {
    todos.forEach((item: Item) => {
      console.log(`${item.id}: ${item.task.name}`);
    });
  }
};

const displayMenu = () => {
  console.log("\nChoose an option:");
  console.log("1. Add Task");
  console.log("2. Remove Task");
  console.log("3. Update Task");
  console.log("4. List Tasks");
  console.log("5. Exit");
};

const handleInput = () => {
  rl.question('Select an option (1-5): ', (option) => {
    switch (option) {
      case '1':
        rl.question('Enter task name: ', (name) => {
          addItem(name);
          console.log(`Task "${name}" added.`);
          handleInput();
        });
        break;
      case '2':
        rl.question('Enter task ID to remove: ', (idInput) => {
          const idToRemove = parseInt(idInput);
          removeItem(idToRemove);
          console.log(`Task with ID ${idToRemove} removed.`);
          handleInput();
        });
        break;
      case '3':
        rl.question('Enter task ID to update: ', (idInput) => {
          const idToUpdate = parseInt(idInput);
          rl.question('Enter new task name: ', (newName) => {
            updateItem(idToUpdate, newName);
            console.log(`Task with ID ${idToUpdate} updated.`);
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
