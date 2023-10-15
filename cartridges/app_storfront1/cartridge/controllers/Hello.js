/**
 * @namespace Hello;
 */

var server = require('server');
/**
 * @name Base/Hello-World;
 */

server.get("World", function (req, res, next) {
    res.json({ msg: "Hello World" });
    next();
});
module.exports=server.exports()
