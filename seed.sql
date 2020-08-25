INSERT INTO department(id, name)
VALUES (100, "Operations"), (200, "Finance"), (300, "Media"), (400, "Legal");

INSERT INTO role(id, title, salary, department_id)
VALUES (101, "CEO", 10000.00, NULL), (102, "COO", 8000.00, NULL), (201, "CFO", 7000.00, 100), (410, "Legal Team Head", 6000.00, 300), 
(310, "Media Relations Mgr", 5000.00, 200), (220, "Accountant", 2000.00, 100), (330, "Advertising Agent", 3000.00, 200), 
(430, "Paralegal", 1000.00, 3);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUE (1, "Rita", "Dawson", 101, NULL), (2, "Jake", "Jones", 102, 1), (3, "Janet", "Merrill", 201, 1), (4, "Zoey", "Franklin", 410, 1), 
(5, "Tom", "Washington", 310, 2), (6, "Pat", "Steinway", 220, 3), (7, "Nicole", "Frederick", 220, 3), (8, "Zack", "Ruiz", 330, 2),
(9, "Jeffrey", "Herald", 430, 4);

