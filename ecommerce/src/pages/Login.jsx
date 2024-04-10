import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(https://img.freepik.com/free-photo/top-view-delicious-nuts-concept_23-2148694022.jpg?w=1380&t=st=1710594471~exp=1710595071~hmac=30b07afc9557727abf44ce8c1d1ce299247433c5bfac472cf4c3c8a1ef221ba5);
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const StyledLink = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <StyledLink to="/forgot-password">Forgot password?</StyledLink>
          <StyledLink to="/register">Create a new account</StyledLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
