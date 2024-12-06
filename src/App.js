
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import React, { useState } from 'react'
import { BrowserRouter as Router,  Route,Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
 const App =()=> {
 const [progress, setProgress] = useState(0)

  
  
    return (
        <div>
        <Router>
        <LoadingBar
        color='#f11946'
       progress={progress}       
      />
       <Navbar />
        <Routes>
        <Route exact path="/general" element={<News  setProgress={setProgress} key="general" pageSize={3} category="general" />} />
        <Route exact path="/business" element={<News  setProgress={setProgress} key="business" pageSize={3} category="business" />} />
        <Route exact path="/entertainment" element={<News  setProgress={setProgress} key="entertainment" pageSize={3} category="entertainment" />} />
        <Route exact path="/sports" element={<News  setProgress={setProgress} key="sports" pageSize={3} category="sports" />} />
        <Route exact path="/science" element={<News  setProgress={setProgress} key="science" pageSize={3} category="science" />} />
        <Route exact path="/health" element={<News  setProgress={setProgress} key="health" pageSize={3} category="health" />} />
        <Route exact path="/" element={<News  setProgress={setProgress} key="general" pageSize={3} category="general" />} />
        </Routes>
        </Router>
      </div>
    )
  }

export default App

