INSERT INTO departments (department_id, department_name)
VALUES  (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");

INSERT INTO roles (role_id, role_title, salary, department_id)
VALUES  (1, "Salesperson", 80000.00, 1),
        (2, "Lead Engineer", 150000.00, 2),
        (3, "Software Engineer", 120000.00, 2),
        (4, "Account Manager", 160000.00, 3),
        (5, "Accountant", 125000.00, 3),
        (6, "Legal Team Member", 250000.00, 4),
        (7, "Lawyer", 190000.00, 4);

INSERT INTO employees (employee_id, first_name, last_name, role_id, manager_id)
VALUES  (1, "Mike", "Chan", 1, 2),
        (2, "John", "Doe", 1, 0),
        (3, "Rachel", "Harris", 2, 2),
        (4, "Hayley", "Jen", 7, 4);
       