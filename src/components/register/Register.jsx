import React from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Wrapper>
      <Title>Đăng ký tài khoản</Title>
      <StyledForm onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
        >
          <StyledInput placeholder="Tên đăng nhập" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Vui lòng nhập email!" }]}
        >
          <StyledInput placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <StyledInput.Password placeholder="Mật khẩu" />
        </Form.Item>

        <Form.Item
          name="confirm"
          rules={[{ required: true, message: "Vui lòng nhập lại mật khẩu!" }]}
        >
          <StyledInput.Password placeholder="Nhập lại mật khẩu" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Đăng ký
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default RegisterPage;
