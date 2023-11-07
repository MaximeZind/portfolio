import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BaseLayout from './BaseLayout';
import Home from '../pages/Home';
import Error from '../pages/Error';
import ScrollToAnchor from '../components/ScrollToAnchor';

function App() {

  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path='' element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
