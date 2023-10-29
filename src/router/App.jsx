import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BaseLayout from './BaseLayout';
import Home from '../pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<BaseLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
