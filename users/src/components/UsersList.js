import { Button, ListGroup, ListGroupItem } from "reactstrap";

const UserLists = ({ users, onDeleteUser }) => {
  return (
    <ListGroup>
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) return 1;
          else if (a.firstName < b.firstName) return -1;
          else if (a.lastName > b.lastName) return 1;
          else if (a.lastName < b.lastName) return -1;
          else return 0;
        })
        .map((user) => (
          <ListGroupItem key={user.id}>
            <section style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flexGrow: 1 }}>
                {user.firstName} {user.lastName}
              </div>
              <div>
                <Button
                  outline
                  color="danger"
                  onClick={() => onDeleteUser(user.id)}
                >
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

export default UserLists;
