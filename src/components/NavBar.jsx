import React, { useContext } from 'react';
import { Header, Container, Group, Button } from '@mantine/core';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext/AuthContext';
import { CartState } from '../context/cartContext/CartContext';
import { BrandReactNative, ShoppingCart } from 'tabler-icons-react';

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const { state: { cart } } = CartState();

  return (
  <Header height={80} mb={30}>
    <Container 
    style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      height: '100%' }}
    >
      <div style={{ width: '43px' }}>
        <Link to='/'>
          <BrandReactNative size={42} strokeWidth={1} color={'#f69582'} />
        </Link>
      </div>
      {/* <div className="textLogo">Apple eCommerce</div> */}
      <Group spacing={8}>
        <NavLink to='/products'>
          <Button type="Submit" variant="subtle" color="dark" style={{ fontSize: '16px' }}>Products</Button>
        </NavLink>
        

        {
        user ? 
        <NavLink to='/account'>
          <Button variant="subtle" color="dark" style={{ fontSize: '16px' }}>Account</Button>
        </NavLink> : 
        <NavLink to='/login'>
          <Button variant="subtle" color="dark" style={{ fontSize: '16px' }}>Login</Button>
        </NavLink>
        }

        <NavLink to='/cart'>
          <Button type="Submit" variant="subtle" color="orange" style={{ fontSize: '16px' }}><ShoppingCart size={22} color={'#f69582'}/>
            &nbsp; {cart.length}
          </Button>
        </NavLink>
      </Group>

    </Container>
  </Header>
  )
}

export default NavBar