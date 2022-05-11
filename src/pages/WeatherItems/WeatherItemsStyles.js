import styled from 'styled-components';

export const Choose = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 10px;
  box-shadow: 0px 0px 12px -1px rgba(34, 60, 80, 0.2);
  height: 250px;
  width: 150px;
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: white;
  border-radius: 5px;
  &&: hover {
    background-color: #dde4f8;
  }
`;

export const AdditionalData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Today = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding-bottom: 40px;
  font-size: 1.5em;
`;

export const Line = styled.div`
  border-left: 1px solid #bebebe;
  height: 165px;
  padding-right: 50px;
  margin-top: 12px;
`;

export const ThinOutline = styled.div`
  font-weight: 100;
  display: inline-block;
  padding-top: 10px;
`;

export const AlignmentFromLine = styled.div`
  display: flex;
`;

export const Stacking = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 50px;
`;

export const AligningEachOther = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextAndIcons = styled.div`
  display: flex;
  padding-top: 5px;
`;

export const IconsSize = styled.div`
  font-size: 1.4em;
  padding-right: 3px;
`;
