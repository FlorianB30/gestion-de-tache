-- Création de la table des utilisateurs
CREATE TABLE Users (
   user_id INT AUTO_INCREMENT,
   mail VARCHAR(50) NOT NULL,
   password CHAR(60) NOT NULL,
   created_date DATETIME NOT NULL,
   PRIMARY KEY (user_id),
   UNIQUE (mail)
);

-- Création de la table des états des tâches
CREATE TABLE TaskStates (
   task_states_id INT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   PRIMARY KEY (task_states_id),
   UNIQUE (name)
);

-- Création de la table des états des projets
CREATE TABLE ProjectStates (
   project_states_id INT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   PRIMARY KEY (project_states_id),
   UNIQUE (name)
);

-- Création de la table des tâches
CREATE TABLE Tasks (
   task_id INT AUTO_INCREMENT,
   title VARCHAR(50) NOT NULL,
   description VARCHAR(100),
   priority INT,
   deadline DATE,
   created_date DATETIME NOT NULL,
   task_states_id INT NOT NULL,
   user_id INT,
   PRIMARY KEY (task_id),
   FOREIGN KEY (task_states_id) REFERENCES TaskStates (task_states_id),
   FOREIGN KEY (user_id) REFERENCES Users (user_id)
);

-- Création de la table des projets
CREATE TABLE Projects (
   project_id INT AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   created_date DATETIME NOT NULL,
   project_states_id INT NOT NULL,
   user_id INT NOT NULL,
   PRIMARY KEY (project_id),
   FOREIGN KEY (project_states_id) REFERENCES ProjectStates (project_states_id),
   FOREIGN KEY (user_id) REFERENCES Users (user_id)
);
