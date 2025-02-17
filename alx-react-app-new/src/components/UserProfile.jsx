const UserProfile = (props) => {
    return (
      <div style={{border:'1px solid gray', padding:'10px', margin: '10px'}}>
        <h1 style={{fontSize: '30px', alignItems:'center', color:'purple'}}>User profile</h1>
        <h2 style={{fontWeight:'bold', color: 'blue'}}>{props.name}</h2>
        <p>Age: <span style={{fontWeight:'bold'}}></span>{props.age}</p>
        <p style={{marginTop: '20px', backgroundColor: 'pink',}}>Bio: {props.bio}</p>
      </div>
    );
  };

  export default UserProfile;

