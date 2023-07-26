
CREATE SCHEMA `demo` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;

CREATE TABLE `demo`.`account` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `demo`.`form_category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
  );

CREATE TABLE `demo`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `birthday` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `managerId` INT NOT NULL,
  `bhxh` VARCHAR(45) NOT NULL,
  `accountId` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (accountId) REFERENCES account(id)
  );


CREATE TABLE `demo`.`form` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `year` INT NOT NULL,
  `link` VARCHAR(500) NOT NULL,
  `description` VARCHAR(100),
  `duadate` DATE NOT NULL,
  `categoryId` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (categoryId) REFERENCES form_category(id)
  );



CREATE TABLE `demo`.`user_form` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(45) NOT NULL,
  `manageComment` VARCHAR(200),
  `userComment` VARCHAR(200),
  `userId` INT NOT NULL,
  `formId` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (userId) REFERENCES user(id),
  FOREIGN KEY (formId) REFERENCES form(id)
  );



INSERT INTO `form_category`(`id`, `name`) VALUES (1,'Đánh giá thử việc');
INSERT INTO `form_category`(`id`, `name`) VALUES (2,'Đánh giá định kỳ hằng năm');


INSERT INTO `account`(`id`, `username`, `password`) VALUES (1,'admin','admin');
INSERT INTO `account`(`id`, `username`, `password`) VALUES (2,'hr','hr');
INSERT INTO `account`(`id`, `username`, `password`) VALUES (3,'director','director');
INSERT INTO `account`(`id`, `username`, `password`) VALUES (4,'manager','manager');
INSERT INTO `account`(`id`, `username`, `password`) VALUES (5,'employee','employee');


INSERT INTO `form`(`id`, `name`, `year`, `link`, `description`, `duadate`, `categoryId`) VALUES (1,'Thu viec t7',2023,'https://docs.google.com/spreadsheets/d/1K4UkcomZSH-HEtr4mJD-tyc5Z_plvW2bNw4cefFMtLM/edit#gid=479012452','dgtvt7','2023-07-31',1);
INSERT INTO `form`(`id`, `name`, `year`, `link`, `description`, `duadate`, `categoryId`) VALUES (2,'Dinh ky n2023',2023,'https://docs.google.com/spreadsheets/d/1q_7SR6mXC9EkY6bKJzZAF_cLzTwXUtVZWksNUXQrLuA/edit#gid=2120635051','dgdkn2023','2023-12-31',2);


INSERT INTO `user`(`id`, `name`, `birthday`, `address`, `image`, `phone`, `email`, `role`, `managerId`, `bhxh`, `accountId`) VALUES (1,'Admin','1-1-2000','Ha noi','none','123456','admin@gmail.com','admin','0','1234',1);
INSERT INTO `user`(`id`, `name`, `birthday`, `address`, `image`, `phone`, `email`, `role`, `managerId`, `bhxh`, `accountId`) VALUES (2,'HR','1-1-2000','Ha noi','none','123456','hr@gmail.com','hr','0','1234',2);
INSERT INTO `user`(`id`, `name`, `birthday`, `address`, `image`, `phone`, `email`, `role`, `managerId`, `bhxh`, `accountId`) VALUES (3,'Director','1-1-2000','Ha noi','none','123456','director@gmail.com','director','0','1234',3);
INSERT INTO `user`(`id`, `name`, `birthday`, `address`, `image`, `phone`, `email`, `role`, `managerId`, `bhxh`, `accountId`) VALUES (4,'Manager','1-1-2000','Ha noi','none','123456','manager@gmail.com','manager','3','1234',4);
INSERT INTO `user`(`id`, `name`, `birthday`, `address`, `image`, `phone`, `email`, `role`, `managerId`, `bhxh`, `accountId`) VALUES (5,'Employee','1-1-2000','Ha noi','none','123456','employee@gmail.com','employee','4','1234',5);


INSERT INTO `user_form`(`id`, `status`, `manageComment`, `userComment`, `userId`, `formId`) VALUES (1,'new','none','none',5,1);
