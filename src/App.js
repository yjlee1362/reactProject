
import './App.css';
import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown,Card,ListGroup,ListGroupItem } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './cart.js';
import DetailComponent from './detailComponent.js';

function App() {
  let open = useState(true)
  let id;

  return (
    <div className="App">
      <Navbars></Navbars>
      <Banner />
      <span>메인에 광고랑 추천아이템 넣으려고 하는데 이건 카드(방문횟수를 스테이트로 지정하고<br/> 
      방문횟수 많은항목을 보여주게 한번 써보자.</span>
      <span>일단 보드 램 cpu 파워 글카를 한 3개씩 추가하는걸 생각해보자. <br/>
      아직 서버 다룰줄 모르니까 일단 파워하드코딩해야겟지 이미지도 조금 따두자.</span>
      <br/>

      <div style={{display : 'flex'}}>
      <CardS></CardS><CardS></CardS><CardS></CardS>
      </div>

      


      <Switch>
        <Route path={`/detail`}>
          <DetailComponent>

          </DetailComponent>
        </Route>
        <Route path={'/cart'}>
          <Cart />
        </Route>
      </Switch>
      <Foot></Foot>



    </div>
  );
}

function Navbars(props) {

  return (<div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

function Banner() {
  return (
    <div>
      <span>여기에는 내용이랑 사진과 버튼을 구현할 것입니다. </span>
      <span>버튼은 두개로, 컴포넌트를 닫는 용도와 link를 하기 위함입니다.</span>
    </div>
  )
}

function Foot() {
  return (
    <div className='Foot'>

      <h3>이 사이트는 포트폴리오를 목적으로 제작되었습니다.<br />
        이 사이트에서 작동하는 모든 것은 가상으로 진행되며, 실제로는 영향이 없습니다.
      </h3>

    </div>
  )
}

function CardS(){
  return(
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
  )
}

export default App;
