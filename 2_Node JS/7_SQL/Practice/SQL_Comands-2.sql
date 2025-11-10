USE college;

select * FROM user;

INSERT INTO user VALUES                     
(5,26,"tom","Tom@Gmail.in",900,255),
(6,13,"Zeke","Zeke@Yahoo.in",255,69),
(7,21,"Tail","Tail@email.in",266,255),
(8,33,"Aex","Aex@Gmail.in",500,99),
(9,19,"Alex","Alex@Gmail.in",1244,255),
(10,18,"ALI","ALLI@Gmail.in",4321,255);

SELECT name,followers FROM user WHERE followers >=1000;

SELECT name,followers FROM user
WHERE age>20 AND followers>500;

SELECT name,followers FROM user
WHERE age>30 OR followers>1000;

SELECT name,followers FROM user
WHERE age between 20 AND 25;

SELECT name,followers,age FROM user
WHERE age IN (18,30);

SELECT name,followers,age FROM user
WHERE age NOT IN (13,21,33,19,18,25);

SELECT name,followers,age FROM user
WHERE age NOT IN (13,21,33,19,18,25) limit 2;

// ASC --> ascending  // DESE --> desending 

SELECT id,age FROM user
order by age ASC;

SELECT id,age FROM user
ORDER BY age DESC;

SELECT max(age) 
FROM user;

SELECT count(age) FROM user WHERE age=18;

SELECT sum(Followers)FROM user;

SELECT avg(Followers)FROM user;

SELECT min(Followers)FROM user;

SELECT max(Followers)FROM user;

SELECT COUNT(ID),AGE FROM user GROUP BY age;

SELECT age,max(followers) FROM user GROUP BY AGE 
HAVING MAX(FOLLOWERS)>1000;


SET SQL_SAFE_UPDATES=0;  // Exit form safe mode to update 

UPDATE user SET followers=1000 WHERE age = 21;

DELETE FROM USER WHERE age=13;

ALTER TABLE user 
ADD COLUMN sub int default 10 ;

ALTER TABLE user
DROP COLUMN sub;

ALTER TABLE USER 
RENAME TO Textdat;

ALTER TABLE Textdat
RENAME TO user;

ALTER TABLE USER 
CHANGE COLUMN Following SUBS INt ;

ALTER TABLE USER 
modify SUBS INT default 1000;

truncate table user;

SELECT * FROM user; 