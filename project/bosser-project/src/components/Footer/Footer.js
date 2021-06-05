import styled from 'styled-components';



export const BTN = styled.button`
  background-color: #CB0000;
  color: white;
  padding: 15px 15px;
  border-bottom-color: white;
  cursor: pointer;
  opacity: 0.9;
  position: fixed;
  bottom: 23px;
  left: 20px;
  border-radius: 200px;
  padding: 2.2%;
  font-size: 190%;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #C34242;
    opacity: 0.8;
    font-size: 55px;
    border-bottom-color: white;
    
    }
`;

export const PopUp = styled.div`
  position: fixed;
  bottom: 0;
  display: ${({ipOpen}) => (ipOpen ? 'grid' : 'none') };
  left: 0px;
  border: 3px solid #f1f1f1;
  z-index: 9;
  
`;
export const Form = styled.div`
  padding: 30px;
  background-color: white;
  z-index: 9;
 text-align: center;
`;

export const In = styled.input`
  //font-family: 'Karantina', cursive;
  width: 100%;
  margin: 8px 0 14px 0;
  border: none;
  font-size: 190%;
  text-align: center;
  background: #f1f1f1;
  outline: none;
  padding: 16px 15px;
  cursor: pointer;
  
`;

export const Confirm = styled.button`
  background-color: red;
  color: white;
  font-size: 190%;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;

  &:hover {
    opacity: 40%;
  }
`;

export const Close = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  font-size: 190%;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;

  &:hover {
    opacity: 40%;
  }
`;

