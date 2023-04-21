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
      backgroundColor: 'rgb(252, 255, 238)',
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      height: '100%' }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '48px', marginRight: '10px' }}>
          <Link to='/'>
            <BrandReactNative size={55} strokeWidth={1} color={'#f69582'} />
          </Link>
        </div>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>The Best Prices</span>
      </div>
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