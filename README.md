# Interactive CLI Todo Application

This project is a simple Todo list manager built using TypeScript and Node.js. It allows you to add, remove, update, and list tasks from a command-line interface (CLI). The tasks are stored in memory and can be interacted with using various commands.

## Features

- **Add Task**: Add a new task to the list.
- **Remove Task**: Remove an existing task by its ID.
- **Update Task**: Update the name of an existing task by its ID.
- **List Tasks**: View all tasks with their IDs.

## Requirements

Before running this project, make sure you have the following installed:

- **Node.js** (LTS version or higher)  
  You can download it from [https://nodejs.org/](https://nodejs.org/).

- **TypeScript**  
  TypeScript will be used to transpile the code from `.ts` to `.js`.

### Local Setup

To run this project locally, follow these steps:

1. **Clone the repository** (or create a new project directory):
   ```bash
   git clone https://github.com/bm-197/ToDoTs
   cd ToDoTs
   ```

2. **Install the dependencies**:
   Since the `package.json` file is already included in the repository, you can simply run:
   ```bash
   npm install
   ```
   This will install TypeScript and the necessary Node.js type definitions as development dependencies.

3. **Create a TypeScript configuration file** (optional but recommended):
   If you want to customize your TypeScript configuration, you can create a `tsconfig.json` file by running:
   ```bash
   npx tsc --init
   ```
   This will generate a `tsconfig.json` file where you can configure TypeScript options. For this project, the default settings will work fine.

4. **Compile the TypeScript code**:
   Compile the TypeScript file (`todo.ts`) into JavaScript:
   ```bash
   npx tsc todo.ts
   ```

5. **Run the application**:
   Once the TypeScript file is compiled, you can run the generated JavaScript file (`todo.js`) using Node.js:
   ```bash
   node todo.js
   ```
   The application will show an interactive menu in the terminal, where you can choose an option to add, remove, update, or list tasks.

## Commands

When you run the program, the following options will be available in the menu:

1. **Add Task**: Allows you to add a new task to the Todo list.
2. **Remove Task**: Prompts you for a task ID and removes that task from the list.
3. **Update Task**: Allows you to update a task's name by entering the task ID and the new name.
4. **List Tasks**: Lists all the tasks currently in the Todo list.
5. **Exit**: Exits the application.

### Example Interaction:

```
Choose an option:
1. Add Task
2. Remove Task
3. Update Task
4. List Tasks
5. Exit
Select an option (1-5): 1
Enter task name: Task 1
Task "Task 1" added.

Choose an option:
1. Add Task
2. Remove Task
3. Update Task
4. List Tasks
5. Exit
Select an option (1-5): 4
0: Task 1
```