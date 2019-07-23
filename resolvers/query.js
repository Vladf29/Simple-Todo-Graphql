const { getTask, getTasks } = require("../store/index");

const Query = {
  task(parent, { id }) {
    return getTask(id);
  },
  allTasks() {
    return getTasks();
  }
};

module.exports = { Query };
