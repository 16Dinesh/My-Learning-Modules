// class UserN15 {
//   id: string;
//   name: string;
//   email?: string;
//   createdAt: Date = new Date(); // init at declaration -> OK

//   constructor(id: string, name: string, email?: string) {
//     // assign all required fields here
//     this.id = id;
//     this.name = name;
//     if (email) this.email = email;
//   }
// }

// shortcut

class UserN15 {
  constructor(
    protected id: string,
    public name: string,
    public email?: string,
    protected createdAt: Date = new Date()
  ) {}
}

const result4 = new UserN15("1", "NameString");
const result5 = new UserN15("2", "johnny", "test@gmail.com");

console.log(result4);
console.log(result5);

// class Bad{
//     a: string;
//     constructor(){}
// }
