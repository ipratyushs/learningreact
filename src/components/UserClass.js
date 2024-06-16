import React from "react";
export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {

      }
    };
  }

  async componentDidMount() {
    const user = await fetch("https://api.github.com/users/ipratyushs");
    const json = await user.json();
    console.log(json);
    this.setState({
        userInfo: json
    })
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
     const updateCount = () => {
        this.setState({
            count: this.state.count + 1,
          });
      }

    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={updateCount}>Update Count</button>
        <h2>Name: {name}</h2>
        <img src={avatar_url} />
        <h3>Location: {location}</h3>
        <h4>Contact: 666666</h4>
      </div>
    );
  }
}
