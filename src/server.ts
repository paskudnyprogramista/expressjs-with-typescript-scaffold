import app from "./app";

const server = app.listen(app.get("port"), () => {
    /* tslint:disable */
    console.log(
        "App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    /* tslint:enable */

    /* tslint:disable */
    console.log("Press CTRL-C to stop\n");
    /* tslint:enable */
});
