import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 5px;
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 40px;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div``;
const FilterSize = styled.select``;
const FilterSizeOption = styled.select``;
const OrderQuantity = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 50px;
`;
const Quantity = styled.span`
  flex: 1;
  text-align: center;
  font-size: 20px;
  border-radius: 10px;
  margin-right: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 1s ease;
  background-color: ${(props) => (props.clicked ? "lightgray" : "white")};
  border: ${(props) => (props.clicked ? "1px solid black" : "none")};

  &:hover {
    border: 1px solid black;
  }
`;
const Button = styled.div`
  font-weight: 500;
  padding: 10px;
  font-size: 20px;
  height: 50px;
  width: 150px;
  margin: 20px 5px;
  background-color: #ffffff;
  border: 2px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const Product = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://www.uclahealth.org/sites/default/files/styles/landscape_3x2_016000_640x427/public/images/f9/mixed-nuts-istock-152990123.jpg?f=4daef427&itok=skPOIqLL" />
        </ImgContainer>
        <InfoContainer>
          <Title>dqsdqsd</Title>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo sed
            nulla consequatur enim quidem totam saepe eveniet soluta cumque ex
            adipisci corrupti incidunt laudantium officia, obcaecati a numquam
            beatae quisquam.
          </Desc>
          <Price>$52</Price>
          <OrderQuantity>
            {["1kg", "2.5kg", "5kg", "7.5kg", "10kg"].map((item, index) => (
              <Quantity
                key={index}
                onClick={() => handleClick(index)}
                clicked={clickedIndex === index}
              >
                {item}
              </Quantity>
            ))}
          </OrderQuantity>
          <Button>Add To Cart</Button>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
