import styled from 'styled-components';

export const Photo = styled.img`
  min-width: 100vw;
  height: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(92%);
  z-index: auto;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputHome = styled.input`
  top: 300px;
  padding-right: 60px;
  position: absolute;
  border: none;
  width: 800px;
  height: 50px;
  padding-left: 20px;
  :focus {
    outline: 0;
    outline-offset: 0;
  }
  font-size: 150%;
`;

export const SearchIcon = styled.div`
  cursor: pointer;
  margin-left: 820px;
  top: 310px;
  position: absolute;
  font-size: 30px;
  color: grey;
`;

export const SearchTitle = styled.h1`
  position: absolute;
  top: 200px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
`;

export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderWeather = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  box-shadow: 0px 6px 14px -11px rgba(34, 60, 80, 0.43);
  margin-bottom: 50px;
  padding-left: 50px;
`;

export const HeaderIcon = styled.div`
  font-size: 30px;
  color: #ffa500;
`;

export const HeaderName = styled.h2`
  color: #191970;
`;
