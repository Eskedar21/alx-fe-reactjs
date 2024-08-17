function UserProfile (props) {
 return (
          <div style={{ border: '5px solid #3c1780', padding: '10px', margin: '10px', borderRadius: '10px'  }}>
            <h2 style={{color: '#3c1780', fontSize: '50px', margin: '10px'}}>{props.name}</h2>
            <p style={{color: '#3c1780', fontSize: '18px'}}>Age: {props.age}</p>
            <p style={{color: '#3c1780', margin: '10px'}}>Bio: {props.bio}</p>
          </div>
        );
     
}
export default UserProfile;