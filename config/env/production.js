module.exports = {
    app: {
        description: "Production environment is up..."
    },
    db: {
        host: "",
        port: "",

        name: "",
        username: "",
        password: ""
    },
    logger: {
        logAppender: "file",
        logFilename: "path/to/men.log",
        logCategory: "MEN",
        logLevel: "DEBUG",
        maxLogSize: "75MB",
        backups: 10
    }
};
