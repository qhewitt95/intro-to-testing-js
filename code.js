// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if (name === undefined) {
        return "Hello, World!"
    } else if (name === false) {
        return "Hello, World!";
    }
    return "Hello, " + name + "!";
}
