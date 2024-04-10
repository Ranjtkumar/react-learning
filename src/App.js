// import logo from './logo.svg';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

// import Connnect from './components/Connnect';
import Share from './Share';
// import Direct from './Direct';
// import CustomerAdd from './CustomerAdd';
// import { Provider } from 'react-redux';

// import {store} from './store'
import Example from './Example';
import Timer from './components/Timer';

function App() {
  return (
    <>
     {/* <Demo/> */}
     {/* <BrowserRouter>
      <Routes>
       
      </Routes>
     </BrowserRouter>
     <Connnect name={"Vignesh"} text={"How are you"}/> */}

     {/* <Direct/> */}

     {/* <Share/> */}
     {/* <Provider store={store}>
        <CustomerAdd/>
        <Direct/>
     </Provider> */}

     {/* <Example/> */}


     <Timer/>

     

    </>
  );
}

export default App;
