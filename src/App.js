// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// import Connnect from './components/Connnect';
import Share from './Share';
// import Direct from './Direct';
// import CustomerAdd from './CustomerAdd';
// import { Provider } from 'react-redux';

// import {store} from './store'
import Example from './Example';
import Timer from './components/Timer';
import Form from './components/Form';
import Counter1 from './components/Counter1';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Product from './components/Product';
import About from './components/About';
import Order from './components/Order';
import Service from './components/Service';
import NoMatch from './components/NoMatch';
import New from './components/New';
import Offrered from './components/Offrered';
import UserDetail from './components/UserDetail';
import User from './components/User';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Auth from './components/Auth';
import SocketLearn from './components/Socket';

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


      {/* <Timer/> */}
      {/* <Form/> */}
      {/* <Counter1 name={"Adam"}/> */}


      {/* ROUTER */}
      {/* <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product" element={<Auth><Product /></Auth>}>
          <Route index element={<New />} />
          <Route path='new' element={<New />} />
          <Route path='offered' element={<Offrered />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/Service" element={<Service />} />

        <Route path="*" element={<NoMatch />} />


        <Route path="/user" element={<User/>}>
          <Route path=':userId' element={<UserDetail/>} />
        </Route>

        <Route path="/login" element={<Auth><Login/></Auth>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<Auth><Profile/></Auth>}/>

        

      </Routes> */}

      <SocketLearn/>

    </>
  );
}

export default App;
