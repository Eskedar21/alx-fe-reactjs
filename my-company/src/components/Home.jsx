function Home() {
  const backgroundImageStyle = {
    backgroundImage: `url('https://plus.unsplash.com/premium_photo-1723741320347-bf8a65518f8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8')`,
    backgroundSize: 'cover', // Optional: adjust as needed
    backgroundPosition: 'center', // Optional: adjust as needed
    height: '100vh', // Example: full viewport height
    width: '100%',   // Example: full width
};
    return ( <div style={{ ...backgroundImageStyle, padding: '20px', color: '#3c1780', }}>
     
        <h1>Welcome to Our Company</h1>
        <p>We are dedicated to delivering excellence in all our services.</p>
      </div>
    );
  }

  export default Home;