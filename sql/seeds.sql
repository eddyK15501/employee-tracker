INSERT INTO department (name)
VALUES  ("Information Technology"), 
        ("Human Resources"), 
        ("Marketing"), 
        ("Sales"), 
        ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES  ("Software Engineer", 120000.00, 1), 
        ("HR Manager", 100000.00, 2), 
        ("Marketing Analyst", 70000.00, 3), 
        ("Sales Representative", 60000.00, 4), 
        ("Financial Analyst", 80000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Tai", "Mai Shu", 1, NULL), 
        ("Mike", "Rotch", 5, NULL),
        ("Stan", "Still", 3, NULL), 
        ("Anita", "Bath", 2, NULL), 
        ("Tess", "Tickle", 4, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Ben", "Dover", 1, 1), 
        ("Hugh", "Jass", 3, 3), 
        ("Eileen", "Dover", 1, 1), 
        ("Harry", "P.Ness", 5, 2), 
        ("Al", "Beback", 4, 5);