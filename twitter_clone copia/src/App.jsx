
import './App.css'
import Header from './components/header';
import PostList from './components/postList';
// import FooterMenu from './components/footerMenu';
import SideMenu from './components/sideMenu';
import SideTrends from './components/sideTrends';

function App() {


  return (
    <div className="App">
      <Header />
      <SideMenu />
      <PostList />
      <SideTrends />
      {/* <FooterMenu /> */}

    </div>
  )
}

export default App
