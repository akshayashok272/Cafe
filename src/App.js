import './App.css';
import Header from './coponents/Header';
import Footer from './coponents/Footer';
import Cafe from './coponents/Cafe';
import RestView from './coponents/RestView';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header/>

     <Routes>

     <Route path='/' element={<Cafe></Cafe>}/>
     <Route path='/view-cafe/:id' element={<RestView></RestView>}></Route>
     
     </Routes>



<Footer/>

    </div>
  );
}

export default App;
