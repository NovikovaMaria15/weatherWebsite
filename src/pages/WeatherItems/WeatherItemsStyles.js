import styled from 'styled-components';

export const Choose = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 10px;
  box-shadow: 0px 0px 12px -1px rgba(34, 60, 80, 0.2);
  height: 250px;
  width: 150px;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: white;
  border-radius: 5px;

  &&: hover {
    background-color: #dde4f8;
  }
`;

export const AdditionalData = styled.div`
  padding-left: 50px;
`;

export const weekdayDay = styled.div`
  margin-top: 20px;
`;

export const Indent = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ChooseTemp = styled.div`
  padding-bottom: 20px;
`;

export const Text = styled.div`
  // padding-left: 10px;
`;

export const M = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
`;

export const Alignment = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
`;

export const Today = styled.div`
  font-weight: bold;
`;
