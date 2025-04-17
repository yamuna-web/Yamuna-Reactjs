export const initialUsers = [
    {
      fname: "yamuna",
      lname: "chenchaiah",
      email: "gundlagutta@gmail.com",
      password: "123",
      id: 1,
    },
    {
      fname: "neeru",
      lname: "chenchaiah",
      email: "gundlagutta@gmail.com",
      password: "123",
      id: 2,
    },
    {
      fname: "savithri",
      lname: "chenchaiah",
      email: "gundlagutta@gmail.omc",
      password: "123456",
      id: 3,
    },
  ];
  export const userReducer = (state = initialUsers, action) => {
    switch (action.type) {
      case "CREATE_USER":
        return [...state, action.payload];
        break;
      case "DELETE_USER":
        return state.filter((usr) => {
          return usr.email !== action.payload.email;
        });
        break;
  
      case "UPDATE_USER":
          const newUsers = [...state];
          newUsers[action.payload.index] = action.payload.user
        return newUsers
        break;
  
      default:
        return state;
    }
  };
  