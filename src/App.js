// import logo from './logo.jpg';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Home } from '../src/components/Home'
import { Dataproction } from '../src/components/dataproction'
import { Contact } from '../src/components/Contact'
import { Imprint } from '../src/components/Imprint'

import { Service } from '../src/components/Service'
import { Application_service } from '../src/components/Application_service'
import { Babbov } from '../src/components/Babbov'

import {Services} from '../src/components/services/Services'
import {Appco} from '../src/components/services/Appco'
import {Implement} from '../src/components/services/Implement'
import {Project_mgnt} from '../src/components/services/Project_mgnt'

import {Solution} from '../src/components/solutions/Solution'
import {Dors} from '../src/components/solutions/Dors'
import {Portal_solution} from '../src/components/solutions/Portal_solution'
import {knowledge_mgnt} from '../src/components/solutions/knowledge_mgnt'
import {Seminars} from '../src/components/solutions/Seminars'
import {Sumak} from '../src/components/solutions/Sumak'

import {Software} from '../src/components/software/Software'
import {Wisit_erp} from '../src/components/software/Wisit_erp'
import {Partners} from '../src/components/software/Partners'
import {Agenda} from '../src/components/software/Agenda'
import {Gsa} from '../src/components/software/Gsa'





function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Dataproction" component={Dataproction} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Imprint" component={Imprint} />

        <Route exact path="/Service" component={Service} />
        <Route exact path="/Application_service" component={Application_service} />
        <Route exact path="/Babbov" component={Babbov} />

        <Route exact path="/Services" component={Services} />
        <Route exact path="/Appco" component={Appco} />
        <Route exact path="/Implement" component={Implement} />
        <Route exact path="/Project_mgnt" component={Project_mgnt} />
        
        <Route exact path="/Solution" component={Solution} />
        <Route exact path="/Sumak" component={Sumak} />
        <Route exact path="/Dors" component={Dors} />
        <Route exact path="/Portal_solution" component={Portal_solution} />
        <Route exact path="/knowledge_mgnt" component={knowledge_mgnt} />
        <Route exact path="/Seminars" component={Seminars} />

        <Route exact path="/Software" component={Software} />
        <Route exact path="/Wisit_erp" component={Wisit_erp} />
        <Route exact path="/Partners" component={Partners} />
        <Route exact path="/Agenda" component={Agenda} />
        <Route exact path="/Gsa" component={Gsa} />

        
        
        
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
