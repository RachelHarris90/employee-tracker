INSERT INTO department (id, name)
VALUES  (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legan");

INSERT INTO role (id, title, salary, department_id)
VALUES  (1, "Salesperson", 80000.00, 1),
        (2, "Lead Engineer", 150000.00, 2),
        (3, "Software Engineer", 120000.00, 2),
        (4, "Account Manager", 160000.00, 3),
        (5, "Accountant", 125000.00, 3),
        (6, "Legal Team Member", 250000.00, 4),
        (7, "Lawyer", 190000.00, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (2, "Mike", "Chan", 1, 2),
        (2, "John", "Doe", 1, 0),
        (3, ""),
        (4, "");
       