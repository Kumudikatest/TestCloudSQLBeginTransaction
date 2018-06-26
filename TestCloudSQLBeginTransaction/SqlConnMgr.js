module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["test-instance-2"] = {
        host: "35.231.123.203",
        port: "3306",
        user: "user2",
        password: process.env.Password_sqltestInstance2,
        database: "Test1"
    };
};