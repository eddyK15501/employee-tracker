INSERT INTO department (name)
VALUES ("Information Technology"), ("Human Resources"), ("Marketing"), ("Sales"), ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000.00, 1), ("HR Manager", 100000.00, 2), ("Marketing Analyst", 70000.00, 3), ("Sales Representative", 60000.00, 4), ("Financial Analyst", 80000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("TaiMai", "Shu", 1, NULL), ("Mike", "Rotch", 5, NULL), ("Ben", "Dover", 4, 3), ("Anita", "Bath", 2, NULL), ("Al", "Beback", 1, 1), ("Stan", "Still", 3, NULL), ("Hugh", "Jass", 3, 6), ("Eileen", "Dover", 2, 4), ("Harry", "P.Ness", 5, 2), ("Tess", "Tickle", 4, NULL);