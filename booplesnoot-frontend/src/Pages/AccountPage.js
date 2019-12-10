import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import PageTemplate from "../Components/Templates/PageTemplate";
import LoadingIndicator from '../Components/Atoms/LoadingIndicator';

class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      user: null
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem('token');

    fetch(`http://localhost:8000/api/account/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(response => {

        if (response.status === 401) {
          this.props.history.push({
            pathname: '/LoginPage'
          });
        } else {
          response.json().then(data => {
            this.setState({
              isLoaded: true,
              user: data
            });
          });
        }
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    const { isLoaded, user } = this.state;

    if (!isLoaded) {
      return (
        <PageTemplate>
          <LoadingIndicator />
        </PageTemplate>
      )
    }

    return (
      <PageTemplate>
        <section id="showcase-inner" className="py-5 text-white">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <h1 className="display-4">User Dashboard</h1>
                <p className="lead">Manage your account here</p>
              </div>
            </div>
          </div>
        </section>
        <section id="bc" className="mt-3">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div>
        </section>
        <section id="dashboard" className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Welcome {user.username}</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Here are Your Details:</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Username:</td>
                      <td>{user.username}</td>
                      <td>
                        <a className="btn btn-light" href="#">Update</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{user.email}</td>
                      <td>
                        <a className="btn btn-light" href="#">Update</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Password:</td>
                      <td>******</td>
                      <td>
                        <a className="btn btn-light" href="#">Update</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Here are your Preferences:</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h3>Cusine</h3>
                        <select multiple>
                          <option value="volvo">Italian</option>
                          <option value="saab">Persian</option>
                          <option value="opel">Korean</option>
                          <option value="audi">French</option>
                          <option value="audi">Indian</option>
                          <option value="audi">Thai</option>
                          <option value="audi">Chinese</option>
                        </select>
                      </td>
                      <td>
                        <h3>Serving Size</h3>
                        <select>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="4">6</option>
                          <option value="4">8</option>
                          <option value="4">10</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <h3>Dietary Requirements</h3>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="requiremnets" value="req1" />
                        Diary Free<br />
                        <input type="checkbox" name="requiremnets" value="req2" />
                        Vegan<br />
                        <input type="checkbox" name="requiremnets" value="req1" />
                        Vegetarian<br />
                        <input type="checkbox" name="requiremnets" value="req1" />
                        Lacto-Vegetarian<br />
                        <input type="checkbox" name="requiremnets" value="req1" />
                        Ovo-Vegetarian<br />
                        <input type="checkbox" name="requiremnets" value="req1" />
                        Pescetarian<br />
                      </td>
                      <td>
                        <input type="checkbox" name="requiremnets" value="req1" />
                        Paleo<br />
                        <input type="checkbox" name="requiremnets" value="req1" />
                        Primal<br />
                        <input type="checkbox" name="requiremnets" value="req1" />
                        Whole 30<br />
                        <input type="checkbox" name="requiremnets" value="req2" />
                        Gluten Free<br />
                        <input type="checkbox" name="requiremnets" value="req2" />
                        Ketogenic<br />
                      </td>
                      <td>
                        <h3>Cooking Time</h3>
                        <select>
                          <option value="v1">5 minutes to 15 minutes</option>
                          <option value="v2">15 minutes to 30 minutes</option>
                          <option value="v3">30 minutes to 1 hour</option>
                          <option value="v4">More than 1 hour</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </PageTemplate>
    );
  }
}

export default withRouter(AccountPage);