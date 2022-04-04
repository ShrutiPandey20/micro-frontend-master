import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: #1a202c;
  position: absolute;
  bottom: 100;
  width: 100%;
  border-radius: 4px;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    / background: red; /
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

   
export const FooterLink = styled.a`
  color:white;
  margin-bottom: 20px;
  font-size: 10px;
  text-decoration: none;
   
  &:hover {
      color: lightgrey;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 20px;
  color:white;
  margin-bottom: 40px;
  font-weight: bold;
`;