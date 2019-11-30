import React, { Component } from "react";
import PageTemplate from "../Components/Templates/PageTemplate";

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      user: null
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    const access_token = "";
    fetch(`http://localhost:8000/users/1`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          user: data[0]
        });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    const { isLoaded, user } = this.state;
    return (
      <PageTemplate>
        <div>
          <div>Cats</div>
          <div>{user}</div>
        </div>
      </PageTemplate>
    );
  }
}
