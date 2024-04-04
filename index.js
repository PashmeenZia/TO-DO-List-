#! /usr/bin/env node
import inquirer from "inquirer";
let todos = ["umaima", "izhaan"];
async function createTodo(todos) {
    do {
        let addTask = await inquirer.prompt([{
                name: "todo",
                type: "input",
                message: "What do you want to add in your Todos?"
            },
            {
                name: "addMore",
                type: "confirm",
                message: "Do you want add more ?",
                default: "false"
            }
        ]);
        todos.push(addTask.todo);
        console.log(todos);
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "select an operation",
            choices: ["Add", "update", "view", "delete"],
        });
        if (ans.select == "Add") {
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
        }
        if (ans.select == "update") {
            let updateTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "update items in the list",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list",
            });
            let newTodo = todos.filter(val => val !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log("*** TO DO LIST ***");
            console.log(todos);
            console.log("exit");
        }
        if (ans.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "update items in the list",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
