const UserProfile = (props) => {
    return (
      <div>
        <h1>User profile</h1>
        <h2>Name:{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };

  export default UserProfile;

// import PropTypes from 'prop-types';

// function UserProfile({ name, age, bio }) {
//   return (
//     <div>
//       <h1>User Profile</h1>
//       <h2><strong>Name:</strong> {name}</h2>
//       <p><strong>Age:</strong> {age}</p>
//       <p><strong>Bio:</strong> {bio}</p>
//     </div>
//   );
// }

// export default UserProfile;