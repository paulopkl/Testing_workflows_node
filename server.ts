import app from "./app";

const main = () => {

    app.listen(3333, () => {
        console.log("App is running on port:", 3333); 
    });
}

main();