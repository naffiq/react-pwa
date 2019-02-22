import React, { Fragment } from "react";
import { Placeholder, Image, Card } from "semantic-ui-react";
const UserCard = ({ user, loading }) => {
  return (
    <Card>
      {loading ? (
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      ) : (
        <Image src={user.avatar} width="100%" height="auto"/>
      )}

      <Card.Content>
        {loading ? (
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line length="very short" />
              <Placeholder.Line length="medium" />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length="short" />
            </Placeholder.Paragraph>
          </Placeholder>
        ) : (
          <Fragment>
            <Card.Header>
              {user.first_name} {user.last_name}
            </Card.Header>
          </Fragment>
        )}
      </Card.Content>
    </Card>
  );
};

export default UserCard;
