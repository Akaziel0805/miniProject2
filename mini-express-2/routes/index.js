var express = require("express");
var router = express.Router();

const {
  insertTask,
  getTasks,
  deleteTask,
  updateTask,
} = require("../controller/taskController");

router.get("/tasks", getTasks);

router.post("/tasks", insertTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
