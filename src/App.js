import { useSelector, useDispatch } from "react-redux";
import {
  
  buyproduct,
  sellproduct,
  addproduct,
  deleteproduct,
  alldelete,
} from "./redux/counter/counterSlice";
import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Button,
  CardText,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";
function App() {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const count = useSelector((state) => state.counter.value);
  const product = useSelector((state) => state.counter.products);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    dispatch(addproduct({ name, price }));
    e.preventDefault();
  };

  return (
    <Container>
      <div>
        <Row>
          <Col xs="12">
            <Card className="align-items-center">
              <CardBody>
                <CardTitle className="text-center"> Bill Gates </CardTitle>
                <CardText className="text-center"> {count} $ </CardText>
                <CardImg
                  alt="Card image cap"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bill_Gates_June_2015.png/200px-Bill_Gates_June_2015.png"
                  top
                  width="100%"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div>
          <Row className="align-items-center mt-5">
            {product.map((pro) => (
              <Col xs="3">
                <Card>
                  <CardImg
                    alt="Card image cap"
                    src="https://picsum.photos/256/186"
                    top
                    width="100%"
                  />
                  <ul key={pro.id}>
                    <CardBody>
                      <CardTitle>{pro.name}</CardTitle>
                      <CardText>{pro.price} $</CardText>
                     <div  className="ml-2"> 
                      <Button   color="success" outline onClick={() => dispatch(buyproduct(pro.price))}>
                        Buy
                      </Button>
                      <Button  color="success" outline onClick={() => dispatch(sellproduct(pro.price))}>
                        Sell
                      </Button>
                      <Button    color="success" outline onClick={() => dispatch(deleteproduct(pro.name))}>
                        Delete
                      </Button>
                      </div>
                    </CardBody>
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
          <button onClick={() => dispatch(alldelete())}>
            All Delete Products
          </button>
        </div>
        <form onSubmit={handleSubmit} action="">
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="name"
            type="text"
          />{" "}
          <br />
          <input
            value={price}
            onChange={(e) => setprice(e.target.value)}
            placeholder="price"
            type="text"
          />{" "}
          <br /> <br />
          <button type="submit">Ekle</button>
        </form>
      </div>
    </Container>
  );
}

export default App;
