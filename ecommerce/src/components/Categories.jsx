import styled from "styled-components";
import CategoryIrem from "./CategoryItem";
import { categories } from "../data";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <div>
      <Container>
        {categories.map((item) => (
          <CategoryIrem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;
