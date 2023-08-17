import React from "react";
import styled from "styled-components";
import { Button } from "antd";

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

const Description = styled.p`
  font-size: 24px;
  margin-bottom: 48px;
`;

// const StyledButton = styled(Button)`
//   font-size: 24px;
//   padding: 12px 24px;
// `;

const IntroductionPage = () => {
  return (
    <Wrapper>
      <Title>Chào mừng bạn đến với trang giới thiệu</Title>
      <Description>Đây là shop bán hàng tự động</Description>
      <Button type="primary">Bắt đầu</Button>
    </Wrapper>
  );
};

export default IntroductionPage;
