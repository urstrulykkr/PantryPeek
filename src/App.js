
// import React from 'react';
// import './App.css';
// import ProductList from './ProductList';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div className="App">
//       <ProductList />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProductList from './ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;

