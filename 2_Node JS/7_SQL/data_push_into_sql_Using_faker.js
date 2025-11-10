let q = "INSERT INTO user (id, username, email, password) VALUES  ?";

let data = [];
for(let i=1; i<=100 ; i++){
    data.push(getRandomUser());
};

try {
    connection.query(q ,[data], (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log(result[0]); // cuz it array
        console.log(result[1]);
    });
} catch (err) {
    console.log(err);
}

connection.end();

// console.log(getRandomUser());

//to mysql in terminal 

//mysql -u root -p


// let q = "SHOW TABLES";
//let q = "INSERT INTO user (id, username, email, password) VALUES  ?";

// try {
//     connection.query(q ,[data], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         console.log(result[0]); // cuz it array
//         console.log(result[1]);
//     });
// } catch (err) {
//     console.log(err);
// }

// connection.end();