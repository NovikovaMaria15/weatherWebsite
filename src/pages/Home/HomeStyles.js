import styled from 'styled-components';

export const Header1 = styled.div`
  min-width: 100vw;
  width: 100%;
  min-height: 100vw;
  height: 100%;
  background-color: #fcfcfc;
`;

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

export const WeaherName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-bottom: 300px;
  padding-right: 680px;
  color: white;
  text-shadow: 0px 0px 3px #000000;
  font-size: 1.1em;
`;

export const Weather = styled.div`
  padding-right: 5px;
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
