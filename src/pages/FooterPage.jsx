import React from "react";
import styled from "styled-components";

const FooterPage = () => {
  return (
    <div>
      <FooterDiv>
        <p>CopyRight @ Praveen Shinde</p>
      </FooterDiv>
    </div>
  );
};

const FooterDiv = styled.div`
  text-align: center;
  font-weight: 400;
  background: #02131b;
  color: white;
  padding: 10px;
`;

export default FooterPage;
