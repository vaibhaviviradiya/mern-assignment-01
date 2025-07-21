// app.js

const readline = require('readline');
const chatbot = require('./chatbot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(" Welcome to EduBot - Your Course Inquiry Assistant");
console.log("Type your questions. Type 'exit' to quit.\n");

function promptUser() {
    rl.question("You: ", (input) => {
        const response = chatbot.getBotResponse(input);
        console.log("Bot:", response);

        if (input.toLowerCase().includes("exit") || input.toLowerCase().includes("bye")) {
            rl.close();
        } else {
            promptUser();
        }
    });
}

promptUser();
