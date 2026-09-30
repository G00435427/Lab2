import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'

function App() {

  return (
   <div>
    <BrowserRouter>

    <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path="/Header" element={<Header></Header>} />
          <Route path="/Footer" element={<Footer></Footer>} />
        </Routes>
        {// <Header></Header>
   // <Content></Content>
   // <Footer></Footer>
   }
  </BrowserRouter>

   
  
   </div>
  );
}

export default App
