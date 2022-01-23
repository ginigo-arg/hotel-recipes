import React, { useContext, useEffect } from "react";
import MenuContext from "../../context/MenuContext";
import { Col, Container, Row, Image } from "react-bootstrap";

export default function Menu() {
  //extrayendo datos del hook menu
  const { menu, setmenu } = useContext(MenuContext);
  console.log("data: ", menu);

  useEffect(() => {
    console.log("renderizandondo menu");
  }, [menu]);

  return (
    <>
      {menu.map(({ title, img, id }) => {
        return (
          <>
            <Container>
              <Row className="mb-2">
                <Col xs="4" className="mr-2" key={id}>
                  <Image src={img} alt={img} style={{ width: "120px" }} />
                </Col>
                <Col xs="auto">
                  <h6>{title}</h6>
                </Col>
              </Row>
            </Container>
          </>
        );
      })}
    </>
  );
}
