import React from "react";
import { Container, Icon, Header, Segment, Card } from "semantic-ui-react";
import UserCard from "../components/UserCard";

const Users = () => {
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    fetch("https://reqres.in/api/users").then(response => {
      response.json().then(usersResponse => {
        setUsers(usersResponse.data);
      });
    });
  }, []);

  return (
    <Segment className="full-height">
      <Container text>
        <br />
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>Users</Header.Content>
        </Header>
        <Card.Group doubling itemsPerRow={3} stackable>
          {!users &&
            new Array(3)
              .fill(true)
              .map((loading, ind) => (
                <UserCard
                  loading={loading}
                  user={false}
                  key={`loading-${ind}`}
                />
              ))}
          {!!users && users.map(user => <UserCard user={user} key={user.id} />)}
        </Card.Group>
      </Container>
    </Segment>
  );
};

export default Users;
