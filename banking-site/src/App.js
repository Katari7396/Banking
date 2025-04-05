import './App.css';
import Blogs from './components/blogs';
import EMICalculator from './components/calculator';
import ChooseUs from './components/chooseus';
import Footer from './components/footer';
import Header from './components/header';
import Navbar from './components/navbar';
import Patners from './components/patners';
import PlayStore from './components/playstore';
import ProductsSection from './components/products';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <ProductsSection/>
      <EMICalculator/>
      <Patners/>
      <ChooseUs/>
      <PlayStore/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
