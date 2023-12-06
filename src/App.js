// import logo from './logo.svg';
import './App1.css';
import Form from './Form';
// import Cmpnnt from './FuncCmpnt';
import NavBar from './NavBarCpnt';
import React, { useState } from 'react';
import Chatbot from './ChatBot';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import ChatBot from './ChatBot'
// import Cmpnnt2 from './ClassCmpnt'
// import React, {Component} from 'react';

function App() {

  let Chngtheme = () => {

    if (them.labl === 'Light mode') {
      let s = 'Dark mode'
      // themstate({them, labl:s})

      themstate({
        them, labl: s, styl: {
          backgroundColor: 'rgb(201, 197, 255)',
          width: '100%',
          height: '93.2vh',
          color: 'black'
        }
      })
    }
    else {
      let s = 'Light mode'
      // themstate({them, labl:s}) (creating error)
      themstate({
        them, labl: s, styl: {
          backgroundColor: 'rgb(4, 3, 61)',
          width: '100%',
          height: '93.2vh',
          color: 'black'
        }
      })
    }
  }
  const [them, themstate] = useState({ labl: 'Light mode', styl: { backgroundColor: 'rgb(4, 3, 61)' } });
  return (
    // <> </> parent wrapper tag called Fragment, component  can’t return multiple JSX tags
    <>
      {/* <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Get started React with Sanyam!
        </a>
    <div className="akr"><p>Start</p></div>
      </header>
    </div> */}
    <BrowserRouter basename="/TextUtils">
      <Router>
              <NavBar ttl={'TextUtilS'} lnk={'Converter'} label={them.labl} func={Chngtheme} bclr={them.labl === 'Dark mode' ? 'rgb(174, 169, 250)' : 'rgb(5, 4, 72)'} />  {/*style={{backgroundColor:'white'}} */}
        <div className="bdy" style={them.styl}>  {/* {backgroundColor:'rgb(4, 3, 61)',width:'100%',height:'93.2vh'} */}
          <div className="cntr">
            <Routes>
              
              <Route exact path="/TextUtils"  element={<Form title='Case Converter' fclr={them.labl === 'Dark mode' ? 'black' : 'white'} />}/>
                {/* <Cmpnnt clr='rgb(79, 211, 255,0)' />
                <Form title='Case Converter' fclr={them.labl === 'Dark mode' ? 'black' : 'white'} />
                <Cmpnnt clr='rgb(236, 236, 54,0)' style={{ position: 'relative', left: '0%' }} /> Reusability
              </Route> */}

                
              <Route exact path="/ChatBot" element={<Chatbot />}/>
                {/* <Chatbot />
              </Route> */}
              
            </Routes>

          </div>
        </div>
      </Router>
    </BrowserRouter>
    </>
  );
}

// class Cmpnnt2  extends Component{
//   render(){
//     return(
//       <h5>I'm component 2</h5>
//     )
//   }
// }

export default App;
