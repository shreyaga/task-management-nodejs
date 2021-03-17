# Task Management (NodeJs & Express)

Task management tool to keep track of tasks. Each task is assigned with a due date and status to mark the current state of task.

## Getting Started
4 endpoints are exposed to interact

1. GET (/api/task/:id) - Retrieves the task details based on task id
2. POST (/api/task) - Creates a new task
3. PATCH (/api/task/:id) - Updates the task status based on id
4. DELETE (/api/task/:id) - Deletes the task based on id


### Prerequisites

1. Make sure you have node installed. Run the below command to check the current version of node
```
node -v

```

### Installing

Install the packages required by running the below command

```
npm install
```

To run the server run

```
npm start
```

## Running the tests

Use the below command to run automated tests for this system
```
npm test
```

## Built With

* [Express](https://www.npmjs.com/package/express) - web framework for node
* [npm](https://www.npmjs.com/) - Dependency Management
* [node](https://nodejs.org/en/) - runtime environment


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


