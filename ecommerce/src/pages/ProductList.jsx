import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  padding: 10px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ display: "flex", justifyContent: "flex-end" })}
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "75%", display: "flex", justifyContent: "flex-end" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
const ProductList = () => {
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Fekia</Title>
      <FilterContainer>
        <Filter>
          <FilterText>sort products</FilterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>price (asc)</Option>
            <Option>price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
