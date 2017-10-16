import React, { Component } from "react";
import {
  Container,
  Form,
  Message,
  Input,
  Segment,
  Grid,
  Header
} from "semantic-ui-react";
import { postPin } from "../../actions";
import { connect } from "react-redux";
import validUrl from "valid-url";
import PinCard from "./PinComponents/PinCard";

class NewPin extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", url: "", error: "" };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = e => {
    const { title, url } = this.state;
    const token = localStorage.getItem("token");
    if (!title) {
      return this.setState({
        error: "Title required."
      });
    }
    if (!url) {
      return this.setState({
        error: "Url required."
      });
    }
    if (!validUrl.isUri(url)) {
      return this.setState({
        error: "Incorrect url format."
      });
    }
    this.props.postPin(token, url, title).then(() => {
      this.props.history.push("/profile");
    });
  };

  render() {
    const { title, url, error } = this.state;
    const { googleId, googlePhoto } = this.props.user;
    const isError = error ? true : false;
    return (
      <Container className="new-pin">
        <Grid doubling stackable>
          <Grid.Column width={8}>
            <Segment raised>
              <Header content="Please provide some details:" />
              <Form onSubmit={this.handleSubmit} error={isError}>
                <Form.Field required>
                  <label>Title</label>
                  <Input
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field required>
                  <label>Url</label>
                  <Input
                    placeholder="Url"
                    name="url"
                    value={url}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Message error header="Error" content={error} />
                <Form.Button content="Submit" primary />
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment raised>
              <Header content="Pin preview" />
              <PinCard
                url={url}
                googlePhoto={googlePhoto}
                googleId={googleId}
                title={title}
                host="Image host"
                usersLiked={[]}
                route="new"
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

export default connect(mapStateToProps, { postPin })(NewPin);
