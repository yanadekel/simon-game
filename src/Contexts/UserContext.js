import React from "react";


const UserContext = React.createContext({
  name: "",
  scores: [],
  users: [],
  UserDispach: () => {},
});

// const UserContextProvider = (props) => {
//   const {  } = initialUsersStates;
//   const [users, scores, name¸, UserDispatch] = useReducer(
//     UserReducer,
//     initialUsersStates,
//     () => {
//       const localUsersData = localStorage.getItem("users");
//       return localUsersData ? JSON.parse(localUsersData) : [];
//     }
//   );
//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(users));
//   }, [users]);

//   return (
//     <UserContext.Provider value={{ ...initialUsersStates, UserDispatch }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

export default UserContext;
