
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import UserProfile from './components/ProfilePagez'
import Footer from './components/Footer'
import UserContext from './components/UserContext'
import ProfilePage from './components/UserProfile'


import './App.css'


function App() {
  
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
      <>
        <UserContext.Provider value={userData}> <ProfilePage/> </UserContext.Provider>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Footer />
      </>
      
     

       
    
  )
}

export default App
