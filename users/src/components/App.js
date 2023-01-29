import { useEffect } from "react";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
} from "../actions/users";
import UserLists from "./UsersList";
import NewUserForm from "./NewUserForm";

function App({ getUsersRequest, createUserRequest, deleteUserRequest, users }) {
  useEffect(() => {
    getUsersRequest();
  }, []);

  const handleSubmit = ({ firstName, lastName }) => {
    createUserRequest({ firstName, lastName });
  };

  const handleDeleteUserClick = (userId) => {
    deleteUserRequest(userId);
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <NewUserForm onSubmit={handleSubmit} />
      <UserLists users={users.items} onDeleteUser={handleDeleteUserClick} />
    </div>
  );
}

// export default App;
export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
})(App);
