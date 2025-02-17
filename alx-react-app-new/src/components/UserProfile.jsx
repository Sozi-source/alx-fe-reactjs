const UserProfile = (props) => {
    return (
      <div>
        <h1 style={{fontSize: '30px', alignItems:'center', color:'purple'}}>User profile</h1>
        <h2 style={{fontWeight:'bold', backgroundColor: 'red'}}>{props.name}</h2>
        <p style={{fontFamily: 'sans-serif', color:"blue", fontWeight:'bold'}}>Age: {props.age}</p>
        <p style={{marginTop: '20px', backgroundColor: 'pink'}}>Bio: {props.bio}</p>
      </div>
    );
  };

  export default UserProfile;

