create database College;

use College;

create table user (
ID INT,
age INT,
Name varchar(50) NOT NULL,
Email varchar(50) UNIQUE,
Followers INT DEFAULT 0 , 
Following INT,
constraint check (age>= 13),
primary key (id)
);

drop table user;

INSERT INTO user values
(1,"Adam","adam@yahoo.in",123,145),
(2,"bob","bob@Gmail.com",200,200),
(3,"Casey","Casey@email.com",300,306),
(4,"Donald","Donald@Gmail.com",200,105);


Create table post(
	id Int primary key,
    content varchar(100),
    User_id INT,
    foreign key(User_id) references user(id)
    );

insert INTO user (id , age , name, Email , Followers, Following ) values 
(1,21,"Adam","adam@yahoo.in",123,145),
(2,22,"bob","bob@Gmail.com",200,200),
(3,44,"Casey","Casey@email.com",300,306),
(4,23,"Donald","Donald@Gmail.com",200,105);

select id , age from user;
select distinct age from user;

select * from user;