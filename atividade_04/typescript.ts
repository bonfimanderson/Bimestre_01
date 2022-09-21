type User = {
  name: string;
  email: string;
  address: {
    city: string;
    state?: string;
  };
};

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}

showWelcomeMessage({
  name: "John Doe",
  email: "naotem@naotem",
  address: {
    city: "New York",
    state: "NY",
  },
});
