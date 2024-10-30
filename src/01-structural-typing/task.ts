type User = {
  id: number;
  name: string;
};

type UserWithAddress = any; // Define the type

const userWithAddress: UserWithAddress = {
  // Create a user
};

function logUser(user: User) {
  console.log(user);
}

// Does the line below show a TypeScript error? Why or why not?
logUser(userWithAddress);
