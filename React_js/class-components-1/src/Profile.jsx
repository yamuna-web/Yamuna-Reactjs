import Profile from "./Profile";
 export default class Profile extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}
<Profile name="John" age={25} />
