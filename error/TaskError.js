class TaskError extends Error {
    constructor(statusType, message) {
      super(message);
      this.statusType = statusType;
    }
}

module.exports = TaskError;