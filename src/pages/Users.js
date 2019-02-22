import React from "react";
import { Container, Icon, Header, Segment, Card, Button } from "semantic-ui-react";
import UserCard from "../components/UserCard";

const initUsers = localStorage.getItem('users');

class Users extends React.Component {
  state = {
    users: initUsers ? JSON.parse(initUsers) : null,
    showInstallButton: false
  };
  deferredPrompt = null;

  componentDidMount() {
    fetch("https://reqres.in/api/users").then(response => {
      response.json().then(usersResponse => {
        localStorage.setItem('users', JSON.stringify(usersResponse.data));
        console.log('users are stored', usersResponse.data)
        this.setState({users: usersResponse.data});
      });
    });

    window.addEventListener('beforeinstallprompt', this.beforeInstallPrompt);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeinstallprompt', this.beforeInstallPrompt)
  }

  beforeInstallPrompt = (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    this.setState({showInstallButton: true})
  }

  handleInstall = () => {
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
        this.setState({showInstallButton: false})
      });
  }

  render() {
    const {users, showInstallButton} = this.state;

    return (
      <Segment className="full-height">
        <Container text>
          <br />
          <Header as="h2" icon textAlign="center">
            <Icon name="users" circular />
            <Header.Content>Users</Header.Content>

            {showInstallButton && <Button onClick={this.handleInstall}>Install</Button>}
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
  }
}

export default Users;
