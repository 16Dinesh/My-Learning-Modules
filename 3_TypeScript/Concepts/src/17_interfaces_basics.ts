//interface -> named shape for objects

interface User333 {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

interface DogPet {
  name: string;
  bark(): void;
}

const dogPet: DogPet = {
  name: "Buddy",
  bark() {
    console.log("Woof!");
  }
};

dogPet.bark();