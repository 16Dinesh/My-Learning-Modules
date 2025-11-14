// value -> this or that --> ( | )

function getScore(name: string): number | string {
  if (name === "Zeke") return 100;
  return "User not found";
}

let score = getScore("Zeke");
console.log(score)


//object union
type AdminRole = { role: "Admin"; permissions: string[] };
type Customer = { role: "Customer"; loyaltyPoints: number };

function describeUser(u: AdminRole | Customer) {
  if (u.role === "Admin") {
    console.log(u.permissions);
  } else {
    console.log(u.loyaltyPoints);
  }
}

function describeUserWithInOperator(u: AdminRole | Customer) {
  if ("permissions" in u) {
    console.log(u.role, "Admin user");
  } else {
    console.log(u.loyaltyPoints);
  }
}

//array of unions and union of arrays
const arrOfUnion: (string | number)[] = ["a", 1, "b", "2"];

const unionOfArrays: string[] | number[] =
  Math.random() > 0.1 ? ["x", "3"] : [1, 2];

// unionOfArrays.push("z")


type SuccessResponse = {
  status: "success";
  data: { user: string; age: number };
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type APIResponse = SuccessResponse | ErrorResponse;

function handleResponse(res: APIResponse) {
  if (res.status === "success") {
    console.log("User:", res.data.user);
  } else {
    console.error("Error:", res.message);
  }
}
