import styled from 'styled-components';



export const BTN = styled.button`
  background-color: #555;
  color: white;
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  right: 28px;
  border-radius: 200px;
  padding: 20px;
  font-size: 23px;
`;

export const PopUp = styled.div`
  position: fixed;
  bottom: 0;
  display: ${({ipOpen}) => (ipOpen ? 'grid' : 'none') };
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
  
`;
export const Form = styled.form`
  max-width: 400px;
  padding: 10px;
  background-color: white;
  z-index: 9;
`;

export const In = styled.input`
  font-family: 'Karantina', cursive;
  width: 100%;
  margin: 5px 0 22px 0;
  border: none;
  font-size: 23px;
  text-align: center;
  background: #f1f1f1;
  outline: none;
  padding: 16px 20px;
  cursor: pointer;
  
`;

export const Confirm = styled.button`
  background-color: red;
  color: white;
  font-size: 23px;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export const Close = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  font-size: 23px;
  width: 100%;
  margin-bottom:10px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
