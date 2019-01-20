// this will load app which contains our main structure and logic
import app from "./app/app";
// use this line to get port from environment variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // if you put don't put "no-console" : false in tslint.json
    // tslint will prevent this line and throw an error.
    console.log("listening on port " + PORT);
});