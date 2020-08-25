let mysql = require("mysql");
let inquirer = require("inquirer");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employee_db"
});

connection.connect(function (err) {
  if (err) throw err;
 
  start();
});

function start() {
  inquirer
    .prompt({
      name: "startSelection",
      type: "list",
      message: "Would you like to create a department, a role, an employee, or are you finished?",
      choices: ["DEPARTMENT", "ROLE", "EMPLOYEE", "EXIT"]
    })
    .then(function (answer) {
      if (answer.startSelection === "DEPARTMENT") {
        createDept();
      }
      else if (answer.startSelection === "ROLE") {
        createRole();
      } 
      else if (answer.startSelection === "EMPLOYEE") {
        createEmployee();
      } 
      else if (answer.startSelection === "EXIT") {
        connection.end();
      }
    })
};

function createDept() {
  inquirer
    .prompt([
      {
        name: "dept_id",
        type: "input",
        message: "What is this department's ID?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "dept",
        type: "input",
        message: "What is the name of your department?",
      }
    ])  
        .then(function (answer) {
          connection.query(
            "INSERT INTO department SET ?",
            {
              dept_id: answer.dept_id,
              name: answer.dept,
            },
            function (err) {
              if (err) throw err;
              console.log("Your department has been successfully added.");
              start();
            }
          )
        })
};

function createRole() {
  inquirer
    .prompt([
      {
        name: "role_id",
        type: "input",
        message: "What is this role's ID?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "role",
        type: "input",
        message: "What is the title of this position?",
      },
      {
        name: "salary",
        type: "input",
        message: "What is the salary for this position?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "dept_id",
        type: "input",
        message: "What is the ID for the department to which this role belongs?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
    ])  
        .then(function (answer) {
          connection.query(
            "INSERT INTO role SET ?",
            {
              role_id: answer.role_id,
              title: answer.role,
              salary: answer.salary,
              dept_id: answer.dept_id,

            },
            function (err) {
              if (err) throw err;
              console.log("Your role has been successfully added.");

              start();
            }
          )
        })
};

function createEmployee() {
    inquirer
      .prompt([
        {
          name: "emp_id",
          type: "input",
          message: "What is the ID for this employee?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
          name: "first_name",
          type: "input",
          message: "What is the employee's first name?",
        },
        {
          name: "last_name",
          type: "input",
          message: "What is the employee's last name?",
        },
        {
          name: "role_id",
          type: "input",
          message: "What is the ID for this employee's role?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        },
        {
          name: "mgr_id",
          type: "input",
          message: "What is the ID for the manager of this employee?",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
      ])  
          .then(function (answer) {
            connection.query(
              "INSERT INTO employee SET ?",
              {
                emp_id: answer.emp_id,
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                mgr_id: answer.mgr_id,
              },
              function (err) {
                if (err) throw err;
                console.log("Your employee has been successfully added.");
                start();
              }
            )
          })
  };
