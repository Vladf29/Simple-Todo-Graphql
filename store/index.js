/**
 * @typedef {Object} Task
 * @property {String} id
 * @property {String} title
 * @property {String} description
 * @property {Boolean} completed
 * @property {Date} created
 */

const shortid = require("shortid");

/**
 * @type {Array<Task>}
 */
let tasks = [];

/**
 * @param {String} id
 * @returns {Task}
 */
const getTask = id => tasks.find(task => task.id === id);

/**
 * @returns {Array<Task>}
 */
const getTasks = () => tasks;

/**
 * @param {Object} data
 * @param {String} data.title
 * @param {String} [data.description='']
 * @returns {Task}
 */
const createTask = data => {
  /**
   * @type {Task}
   */
  const newTask = { ...data };

  if (!newTask.description) {
    newTask.description = "";
  }

  newTask.id = shortid.generate();
  newTask.completed = false;
  newTask.created = new Date().toISOString();

  tasks.push(newTask);

  return newTask;
};

/**
 * @param {String} id
 * @returns {Task | null}
 */
const completeTask = id => {
  const task = getTask(id);
  if (task) {
    task.completed = true;
    return task;
  }

  return;
};

/**
 * @param {String} id
 * @returns {Task|null}
 */
const removeTask = id => {
  const task = getTask(id);

  if (task) {
    tasks = tasks.filter(task => task.id !== id);

    return task;
  }

  return null;
};

/**
 * @param {Object} data
 * @param {String} data.id
 * @param {String} [data.title='']
 * @param {String} [data.description='']
 * @returns {Task | null}
 */
const editTask = data => {
  const task = getTask(data.id);
  if (task) {
    if (data.title) task.title = data.title;
    if (data.description) task.description = data.description;

    return task;
  }

  return null;
};

module.exports = {
  completeTask,
  getTask,
  getTasks,
  removeTask,
  createTask,
  editTask
};
