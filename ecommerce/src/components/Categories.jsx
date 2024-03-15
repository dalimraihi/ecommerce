import styled from "styled-components";
import CategoryIrem from "./CategoryItem";
import { categories } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <div>
      <Container>
        {categories.map((item) => (
          <CategoryIrem item={item} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;
