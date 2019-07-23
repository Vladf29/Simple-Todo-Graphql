const {
  createTask,
  completeTask,
  editTask,
  removeTask
} = require("../store/index");

const Mutation = {
  createTask(parent, { input }) {
    return createTask({ ...input });
  },
  editTask(parent, { input }) {
    return editTask({ ...input });
  },
  completeTask(parent, { id }) {
    return completeTask(id);
  },
  removeTask(parent, { id }) {
    return removeTask(id);
  }
};

module.exports = { Mutation };
