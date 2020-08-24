let mysql = require("mysql");
let inquirer = require("inquirer");

let connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
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
      message: "Would you like to create a department, a role, or an employee?",
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
      else {
        connection.end();
      }
    });
}

function createDept() {
  inquirer
    .prompt([
      {
        name: "dept",
        type: "input",
        message: "What is the name of your department?",
      }
    ])  
        .then(function (answer) {
          connection.query(
            "INSERT INTO createDept SET ?",
            {
              dept_name: answer.dept,
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
            "INSERT INTO createRole SET ?",
            {
              role_name: answer.role,
              role_salary: answer.salary,
              role_dept: answer.dept_id,

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
          name: "dept_id",
          type: "input",
          message: "What is the ID for the department in which this employee works?",
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
        },
      ])  
          .then(function (answer) {
            connection.query(
              "INSERT INTO createEmployee SET ?",
              {
                employee_firstName: answer.first_name,
                employee_lastName: answer.last_name,
                employee_dept_id: answer.dept_id,
                employee_mgr_id: answer.mgr_id,
              
              },
              function (err) {
                if (err) throw err;
                console.log("Your employee has been successfully added.");
               
                start();
              }
            )
          })
  };
