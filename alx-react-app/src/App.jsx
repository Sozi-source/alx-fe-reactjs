import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer'
import UserProfile from './components/UserProfile';

function App() {


  return (
    <>
    
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />

    {/* User Profile */}
    <div> <UserProfile name="Alice" age={25} bio="Loves hiking and photography" /></div>
    </>
  )
}

export default App;
