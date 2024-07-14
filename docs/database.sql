CREATE TABLE roles (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  description varchar(64) NOT NULL,

  state tinyint(4) DEFAULT 1,
  updated_at datetime DEFAULT NULL,
  created_at datetime DEFAULT NULL,
  created_user varchar(64) DEFAULT '',
  updated_user varchar(64) DEFAULT ''
) ENGINE=InnoDB;

CREATE TABLE users (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_name varchar(64) NOT NULL,
  password varchar(64) NOT NULL,
  full_name varchar(255) NOT NULL,
  gender enum('0','1','2') DEFAULT '2',
  email varchar(64) DEFAULT '',
  phone varchar(32) DEFAULT '',
  role_id int(11) NOT NULL,

  state tinyint(4) DEFAULT 1,
  updated_at datetime DEFAULT NULL,
  created_at datetime DEFAULT NULL,
  created_user varchar(64) DEFAULT '',
  updated_user varchar(64) DEFAULT '',

  UNIQUE KEY user_name (user_name),
  UNIQUE KEY email (email),

  CONSTRAINT fk_users_roles FOREIGN KEY (role_id) REFERENCES roles (id)
) ENGINE=InnoDB;

CREATE TABLE services (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  description varchar(64) NOT NULL,

  state tinyint(4) DEFAULT 1,
  updated_at datetime DEFAULT NULL,
  created_at datetime DEFAULT NULL,
  created_user varchar(64) DEFAULT '',
  updated_user varchar(64) DEFAULT ''
) ENGINE=InnoDB;

CREATE TABLE brands (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  description varchar(64) NOT NULL,

  state tinyint(4) DEFAULT 1,
  updated_at datetime DEFAULT NULL,
  created_at datetime DEFAULT NULL,
  created_user varchar(64) DEFAULT '',
  updated_user varchar(64) DEFAULT ''
) ENGINE=InnoDB;

CREATE TABLE models (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  description varchar(64) NOT NULL,

  brand_id INT NOT NULL,

  state tinyint(4) DEFAULT 1,
  updated_at datetime DEFAULT NULL,
  created_at datetime DEFAULT NULL,
  created_user varchar(64) DEFAULT '',
  updated_user varchar(64) DEFAULT '',

  CONSTRAINT fk_model_brands FOREIGN KEY (brand_id) REFERENCES brands (id)
) ENGINE=InnoDB;

CREATE TABLE quotations (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  date_off_issue datetime NOT NULL,
  full_name varchar(255) NOT NULL,
  email varchar(64) DEFAULT '',
  phone varchar(32) DEFAULT '',
  plate varchar(64) DEFAULT '',
  build_year INT,

  brand_id INT NOT NULL,
  model_id INT NOT NULL,
  service_id INT NOT NULL,

  state tinyint(4) DEFAULT 1,
  updated_at datetime DEFAULT NULL,
  created_at datetime DEFAULT NULL,
  created_user varchar(64) DEFAULT '',
  updated_user varchar(64) DEFAULT '',

  CONSTRAINT fk_quotation_brands FOREIGN KEY (brand_id) REFERENCES brands (id),
  CONSTRAINT fk_quotation_models FOREIGN KEY (model_id) REFERENCES models (id),
  CONSTRAINT fk_quotation_services FOREIGN KEY (service_id) REFERENCES services (id)
) ENGINE=InnoDB;

CREATE TABLE quotation_details (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  from_email varchar(255) NOT NULL,
  to_email varchar(255) NOT NULL,
  content TEXT,
  datetime datetime,
  
  quotation_id INT NOT NULL,

  state tinyint(4) DEFAULT 1,
  updated_at datetime DEFAULT NULL,
  created_at datetime DEFAULT NULL,
  created_user varchar(64) DEFAULT '',
  updated_user varchar(64) DEFAULT '',

  CONSTRAINT fk_quotation_detail_quotatios FOREIGN KEY (quotation_id) REFERENCES quotations (id)
) ENGINE=InnoDB;
