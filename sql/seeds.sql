INSERT INTO department (name)
VALUES ("Information Technology"), ("Human Resources"), ("Marketing"), ("Sales"), ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000.00, 1), ("HR Manager", 100000.00, 2), ("Marketing Analyst", 70000.00, 3), ("Sales Representative", 60000.00, 4), ("Financial Analyst", 80000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tai", "MaiShu", 1, NULL), ("Tess", "Tickle", 4, NULL), ("Ben", "Dover", 4, 3), ("Anita", "Bath", 2, NULL), ("Stan", "Still", 3, NULL), ("Harry", "P.Ness", 5, 2), ("Hugh", "Jass", 3, 6), ("Eileen", "Dover", 2, 4), ("Al", "Beback", 1, 1), ("Mike", "Rotch", 5, NULL);