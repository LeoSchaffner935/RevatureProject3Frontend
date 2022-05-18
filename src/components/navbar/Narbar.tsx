import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import Button from '@mui/material/Button'; // KHENAN TERRY: Import Button
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../search-bar/SearchBar";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo onClick={() => {navigate('/')}}>Revature Swag Shop</Logo>
        </Left>

        <Right>
          <SearchBar/>
          {/*KHENAN TERRY: Added menu item to be used to switch CSS for dark/light modes */}
          <Button
            color='primary'
            variant='contained'
            sx={{ mt: 0.30, mb: 0 }}
            onClick={() => {}}>

            Dark/Light Mode
          </Button>
          {/*KHENAN TERRY: //////////////////////////////////////////////////////////////*/}
          <MenuItem onClick={() => {navigate('/register')}}>REGISTER</MenuItem>
          <MenuItem onClick={() => {navigate('/login')}}>SIGN IN</MenuItem>
          <MenuItem onClick={() => {navigate('/cart')}}>
            <Badge color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>

      </Wrapper>
    </Container>
  );
};

export default Navbar;
