const ROLES = ["admin", "user", "operator"] as const;

//derive a union from the array
type Roles = (typeof ROLES)[number];

function setRole(r: Roles) {
  console.log(r);
}

setRole("user");
