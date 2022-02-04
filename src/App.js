
import './App.css';
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Card, ListGroup, ListGroupItem, Row, Col,Button } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Cart from './cart.js';
import DetailComponent from './detailComponent.js';
import Assembly from './Assembly.js';
import { CPU, RAM, SSD } from "./data.js"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  let open = useState(true)
  const cpu = useSelector((state) => { return state })


  const [bannerOpen, bannerOpenChange] = useState(true);

  const everyThing = [...CPU, ...RAM, ...SSD];

  const cntArray = everyThing.sort((a, b) => { return b.cnt - a.cnt })



  useEffect(() => {

  })







  return (
    <div className="App">


      <Navbars></Navbars>
      <Switch>
        <Route exact path={`/`}>
          {bannerOpen == true ? <Banner bannerOpenChange={bannerOpenChange} ></Banner> : null}

          <span>메인에 광고랑 추천아이템 넣으려고 하는데 이건 카드(방문횟수를 스테이트로 지정하고<br />
            방문횟수 많은항목을 보여주게 한번 써보자.</span>
          <span>일단 보드 램 cpu 파워 글카를 한 3개씩 추가하는걸 생각해보자. <br />
            아직 서버 다룰줄 모르니까 일단 파워하드코딩해야겟지 이미지도 조금 따두자.</span>
          <br />

          <div style={{ display: 'flex' }}>
            <CardS></CardS>
          </div>
        </Route>





        <Route path={`/detail`}>
          <DetailComponent>

          </DetailComponent>
        </Route>
        <Route path={'/cart'}>
          <Cart />
        </Route>
        <Route path={'/assembly'}>
          <Assembly></Assembly>
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
        <Navbar.Brand as={Link} to="/">Pc</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/assembly">pc조립</Nav.Link>
            <Nav.Link as={Link} to="/cart">장바구니</Nav.Link>
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

function Banner(props) {
  return (
    <div>
      <span>여기에는 내용이랑 사진과 버튼을 구현할 것입니다. </span>
      <span>버튼은 두개로, 컴포넌트를 닫는 용도와 link를 하기 위함입니다.</span>
      {/* 슬라이드효과를 준 컴포넌트를 여러개만들지, 아니면 그냥 여러개 
      보여줄지는 생각해보자 근데 슬라이드효과를주는게 더 있어보일듯 */}
      <button onClick={() => { props.bannerOpenChange(false) }}>닫기</button>
    </div>
  )
}

function Foot() {
  return (
    <div className='Foot'>
      {/* 제작자 이름과 같은 정보도 추가하자. 가능하면 나한테 메일보내는거나 뭐 이런걸로 */}
      <h3>이 사이트는 포트폴리오를 목적으로 제작되었습니다.<br />
        이 사이트에서 작동하는 모든 것은 가상으로 진행되며, 실제로는 영향이 없습니다.
      </h3>

    </div>
  )
}

function CardS(props) {

  const cpu = useSelector((state) => { return state })
  const disPatch = useDispatch();
  const Array = cpu.recommendList
  const slicedArray = Array.slice(0, 4);
  const h = useHistory();

  console.log(cpu)

  





  return (
    <div>
      <Row xs={"auto"} md={"auto"} className="g-4">
        {slicedArray.map((a, i) => (
          <Col>
            <Card style={{ width: '18rem', marginLeft: 'auto', marginRight: 'auto' }}>
              <Card.Img variant="top" src={a.imgl} />
              {/* 리액트에 이미지넣는방법은 기존html과 다른듯 하다. 
            data에있는거 전부 수정해야겟다. src폴더가아니라public에 다시만들어야지 */}
              <Card.Body>
                <Card.Title></Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{a.title}</ListGroupItem>
                <ListGroupItem>제조사:{a.manu}</ListGroupItem>
                <ListGroupItem>{a.price.toLocaleString()}원</ListGroupItem>
              </ListGroup>
              <Card.Body>
                {/* Link에서 onClick을 주는걸로 하자. 버튼으로 만드는것도 나쁘지는 않겟다. */}
                {/* 추가로 cnt 에 따라서 뭐 하나씩 넣는걸로해보자 그거에 맞는 스테이트를넣어볼까 */}
                <Button variant="dark" onClick={()=>{h.push(`/detail/${a.id}`) }}>자세히보기</Button>{' '}
                <Button variant="dark" onClick={()=>{disPatch({type:'addCart',payload:{id :a.id, title: a.title}});console.log(cpu.cartList);}}>담기</Button>{' '}
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>

  )
}

export default App;
