const initializeEndPoint = (app) => {
    app.use("/users", require("./UsersRoute"));
}

module.exports = initializeEndPoint;