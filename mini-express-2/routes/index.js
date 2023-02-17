var express = require("express");
var router = express.Router();

const {
  insertTask,
  getTasks,
  deleteTask,
  updateTask,
} = require("../controller/taskController");

const { insertUser, getUsers } = require("../controller/userController");

router.get("/tasks", getTasks);
router.post("/tasks", insertTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

router.get("/login", getUsers);
router.post("/login", getUsers);
router.post("/register", insertUser);

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
