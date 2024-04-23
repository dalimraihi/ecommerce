import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

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
const AddQuantity = styled.div`
  display: flex;
  font-size: 20px;
`;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
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
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [clickedIndex, setClickedIndex] = useState(null);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await publicRequest.get("/products/find/" + id);
        setProduct(response.data);
        console.log(product.img);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleClick = (index) => {
    setClickedIndex(index);
  };
  const handleQuantity = (type) => {
    if (type === "dec" && quantity > 0) {
      setQuantity(quantity - 1);
    } else if (type === "inc") {
      setQuantity(quantity + 1);
    } else if (type === "dec" && quantity === 1) {
      // Set quantity to 0 directly if it's already 0
      setQuantity(1);
    }
  };
  const handleOrder = () => {
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          {product && <Image src={product.img} alt="dali" />}
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

          <AddContainer>
            <AmountContainer>
              <AddQuantity>
                <RemoveIcon onClick={() => handleQuantity("dec")} />
                <Amount>{quantity}</Amount>
                <AddIcon onClick={() => handleQuantity("inc")} />
              </AddQuantity>
            </AmountContainer>
            <Button onClick={() => handleOrder("dec")}>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
