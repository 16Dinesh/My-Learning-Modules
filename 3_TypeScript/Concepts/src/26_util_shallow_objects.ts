type AddressN8 = {
  area: string;
  city: string;
};

type User10 = {
  id: string;
  name: string;
  email?: string;
  address: AddressN8;
};

// Partial<T> _> makes all the Properties Optional

type userPartial = Partial<User10>;

const patch10: userPartial = { name: "String" };
const patch11: userPartial = { address: { area: "line1", city: "city" } };

// Required<T> -> make all the Properties Required

type userRequired = Required<User10>;

const userAllPatch11: userRequired = {
  id: "u2",
  name: "name2",
  address: { area: "Area", city: "city" },
  email: "test",
};

// ReadOnly<T> -> make all the Property immutable

type ReadOnlyUser = Readonly<User10>;
const readonlyUser: ReadOnlyUser = {
  id: "u3",
  name: "name",
  address: {
    area: "str",
    city: "cityName",
  },
};

// Pick<K, T> -> create a New type by pocking only specific key

type PublicUserN = Pick<User10, "id" | "name">;
const publicUser: PublicUserN = { id: "uuid2", name: "Sting" };

// Omit<K, T> -> To Remove Some Keys

type UserWithoutEmail = Omit<User10, "email">;
const omitUserN10: UserWithoutEmail = {
  id: "uuid2",
  name: "str",
  address: {
    area: "area",
    city: "city",
  },
};

// Record<K, V>
type RoleK = "admin" | "user" | "editor";
type RoleCheck = Record<RoleK, User10>;

const dirN10: RoleCheck = {
  admin: {
    id: "u10",
    name: "admin",
    address: { area: "line1", city: "city" },
  },
  user: { id: "u11", name: "user", address: { area: "line1", city: "city" } },
  editor: {
    id: "u12",
    name: "editor",
    address: { area: "line1", city: "city" },
  },
};
