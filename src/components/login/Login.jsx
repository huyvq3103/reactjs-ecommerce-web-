import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
`;

const StyledForm = styled(Form)`
  width: 400px;
`;

const StyledInput = styled(Input)`
  font-size: 24px;
  margin-bottom: 24px;
`;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Wrapper>
      <Title>Đăng nhập</Title>
      <StyledForm onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
        >
          <StyledInput placeholder="Tên đăng nhập" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <StyledInput.Password placeholder="Mật khẩu" />
        </Form.Item>

        <div style={{ justifyContent: "space-between", display: "flex" }}>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
          <Button type="primary" htmlType="submit">
            <Link to="/register">Đăng ký</Link>
          </Button>
        </div>
      </StyledForm>
    </Wrapper>
  );
};

export default LoginPage;
