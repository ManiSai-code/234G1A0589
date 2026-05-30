const Log = require("./logger");

async function main() {

    await Log(
        "backend",
        "info",
        "service",
        "Application started"
    );

    await Log(
        "backend",
        "warn",
        "middleware",
        "Slow response detected"
    );

    await Log(
        "backend",
        "error",
        "handler",
        "received string, expected bool"
    );

}

main();