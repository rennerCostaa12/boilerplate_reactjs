import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Form = styled.form`
  max-width: 450px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 15px 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.11);
  -moz-box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.11);
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.11);
`;

export const ContentInput = styled.div`
  margin: 1rem 0;
`;

export const ContentBtnSubmit = styled.div`
  display: flex;
  justify-content: center;
`;
