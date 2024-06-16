import  User  from "./User";
import { UserClass } from "./UserClass";
const About = () => {
  return (
    <div>
      <h1> About</h1>
      <h2> Welcome to the About Section</h2>
      <User name={'Pratyush Swain (function)'} />
      <UserClass name={'Pratyush Swain (class)'}/>
    </div>
  );
};

export default About;
