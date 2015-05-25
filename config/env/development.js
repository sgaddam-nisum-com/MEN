module.exports = {
    app: {
        description: "Development environment is up..."
    },
    db: {
        host: "",
        port: "",

        name: "",
        username: "",
        password: ""
    },
    logger: {
        appender: "file",
        filename: "c:/temp/men.log",
        category: "MEN",
        level: "DEBUG",
        maxsize: "75MB",
        backups: 10
    }
};
