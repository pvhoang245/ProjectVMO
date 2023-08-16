INSERT INTO `roles`(`id`, `name`, `description`) VALUES ('1','admin','admin');
INSERT INTO `roles`(`id`, `name`, `description`) VALUES ('2','hr','hr');
INSERT INTO `roles`(`id`, `name`, `description`) VALUES ('3','director','director');
INSERT INTO `roles`(`id`, `name`, `description`) VALUES ('4','manager','manager');
INSERT INTO `roles`(`id`, `name`, `description`) VALUES ('5','employee','employee');

INSERT INTO `urls`(`id`, `link`, `description`) VALUES 
('1','/account/list',''),
('2','/account/getById',''),
('3','/account/getByUsername',''),
('4','/account/create',''),
('5','/account/removeById',''),
('6','/account/removeByUsername',''),

('7','/category/list',''),
('8','/category/getById',''),
('9','/category/create',''),
('10','/category/update',''),
('11','/category/delete',''),

('12','/form/list',''),
('13','/form/getById',''),
('14','/form/getByCategoryId',''),
('15','/form/create',''),
('16','/form/update',''),
('17','/form/remove',''),

('18','/roleUrl/list',''),
('19','/roleUrl/getById',''),
('20','/roleUrl/getByRole',''),
('21','/roleUrl/getByUrl',''),
('22','/roleUrl/getByRoleUrl',''),
('23','/roleUrl/create',''),
('24','/roleUrl/delete',''),

('25','/url/list',''),
('26','/url/getById',''),
('27','/url/getByLink',''),
('28','/url/create',''),
('29','/url/update',''),
('30','/url/delete',''),

('31','/user/list',''),
('32','/user/getById',''),
('33','/user/getByName',''),
('34','/user/create',''),
('35','/user/delete',''),

('36','/userForm/list',''),
('37','/userForm/getByFormId',''),
('38','/userForm/create',''),
('39','/userForm/delete',''),
('40','/userForm/getListOfManager',''),
('41','/userForm/getByStatus',''),
;


INSERT INTO `role_urls`(`id`, `roleId`, `urlId`) VALUES 
('1','1','1'),
('2','1','2'),
('3','1','3'),
('4','1','4'),
('5','1','5'),
('6','1','6'),

('7','1','7'),
('8','1','8'),
('9','2','7'),
('10','2','8'),
('11','3','7'),
('12','3','8'),
('13','1','9'),
('14','1','10'),
('15','1','11'),

('17','1','13'),
('18','1','14'),
('19','1','15'),
('20','1','16'),
('21','1','17'),
('23','2','13'),
('24','2','14'),
('25','2','15'),
('26','2','16'),
('27','2','17'),
('29','3','13'),
('30','3','14'),
('31','3','15'),
('32','3','16'),
('33','3','17'),

('34','1','18'),
('35','1','19'),
('36','1','20'),
('37','1','21'),
('38','1','22'),
('39','1','23'),
('40','1','24'),

('41','1','25'),
('42','1','26'),
('43','1','27'),
('44','1','28'),
('45','1','29'),
('46','1','30'),

('47','1','31'),
('48','1','32'),
('49','1','33'),
('50','2','31'),
('51','2','32'),
('52','2','33'),
('53','3','31'),
('54','3','32'),
('55','3','33'),
('56','1','34'),
('57','1','35'),

('58','1','36'),
('59','1','37'),
('60','1','38'),
('61','1','39'),
('62','2','40'),
('63','3','40'),
('64','4','40'),
('65','1','41'),
('66','2','41'),
('67','3','41'),
('68','4','41'),
;