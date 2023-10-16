/**
 * @namespace Hello;
 */

var server = require("server");
server.extend(module.superModule);
/**
 * @name Base/Hello-World;
 */

server.append("World", function (req, res, next) {
    res.json({ msg: "Hello World" });
    next();
});
module.exports = server.exports();
