import { useContext } from "react";
import MenuContext from "../../context/MenuContext";
import { Col, Container, Row, Image, Card, Button } from "react-bootstrap";

export default function ItemsRecipe({
  id,
  img,
  title,
  summary,
  healthScore,
  readyInMinutes,
  servings,
  vegan,
  pricePerServing,
}) {
  const { menu, setMenu } = useContext(MenuContext);
  console.log("summary", summary);

  const handleAddMenu = () => {
    const newItem = {
      id,
      img,
      title,
      summary,
      healthScore,
      readyInMinutes,
      servings,
      vegan,
      pricePerServing,
    };
    setMenu([...menu, newItem]);
    console.log("handlemenu: ", ...menu);
    localStorage.setItem("menu", JSON.stringify(...menu));
  };
  return (
    <>
      <Container className="mb-2">
        <Row
          className="justify-content-center fluid p-1 rounded"
          style={{
            boxShadow: "0px 0px 10px 3px rgba(0,0,0,0.26)",
          }}
        >
          <Col xs="4 m-2">
            <Image src={img} style={{ width: "110px" }} rounded />
          </Col>
          <Col xs="8" className="card-title">
            <h3>{title}</h3>
            <p>{summary}</p>
            <Button variant="success" onClick={handleAddMenu}>
              Add to menu
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
