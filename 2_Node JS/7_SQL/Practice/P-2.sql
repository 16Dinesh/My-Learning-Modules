create database student;

use student;

create table info (
roll_no INT , `Name` varchar(50) , city varchar(50)  , marks INT
);

insert into info values 
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124,"casey","pune",94),
(112, "duke", "Pune", 80);

SELECT name, marks from info where marks>75;

Select name,city from info;

select max(marks) from info;

SELECT avg(marks) as Avarage_marks from info;

ALTER table info
ADD column grade varchar(2); 

select * from info;

UPDATE info 
set grade  =  case 
	when marks > 80 then "O"
	WHEN marks BETWEEN 70 AND 80 THEN "A"
    WHEN marks BETWEEN 60 AND 70 THEN "B"
    ELSE "F"
    end;
    
insert into info values (255,"cat","streets",7,"F");