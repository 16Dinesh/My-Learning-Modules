create database college;
use college;
create table teacher (
id INT primary key , `NAME` varchar(50), subject varchar(50), Salary int 
);

ALTER TABLE teacher 
CHANGE COLUMN age id INt ;

INSERT INTO teacher Values 
(23,"ajay","math",50000),
(47,"bharath","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);

SELECT name,Salary from Teacher where salary>55000;

alter table teacher 
change column Salary CTC int;

alter table teacher 
add column City varchar(50) default 'HYD';

alter table teacher 
add column `base Salary` int default 50000 ;

alter table teacher 
drop column `base salary`;

UPDATE teacher set ctc = ctc * 1.25;

SET SQL_SAFE_UPDATES=0; 

SELECT * FROM teacher;