module.exports = {
    app: {
        description: "Development environment is up..."
    },
    db: {
        host: "127.0.0.1",
        port: "30000",

        name: "men",
        username: "devl",
        password: "devl"
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
