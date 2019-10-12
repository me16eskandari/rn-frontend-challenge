import { User } from "../models";

const createUser = (user: User) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: user,
        token: "test.token"
      });
    }, 1000);
  });
};


const Services = {
  createUser
};

export default Services;