let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">> ",
});

let lists = [];
let cart = [];
let Cart = require('./Cart');
rl.prompt();

rl.on("line", function (line) {
    let command = line.split(" ");
    switch (command[0]) {
        case "create":
            lists.push(command[1]);
            break;
        case "cart":
            cart.push(new Cart(command[1], command[2]));
            break;
        case "show":
            if (cart.length > 0) {
                cart.forEach((list) => {
                    console.log(
                        "name : " +
                        list.name +
                        "price : " +
                        list.price
                    );
                });
                break;
            } else {
                console.log("empty!!!");
                break;
            }

        case "exit":
            console.log("Have a great day!");
            process.exit(0);
            break;
        default:
            console.log("wrong command");
            break;
    }
    rl.prompt();
});
