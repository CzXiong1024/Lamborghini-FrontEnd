import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Title, Text, Button } from '@mantine/core';
import ProductsHome from '../components/ProductsHome';

const Home = () => {

  return (
    <>
    <Helmet>
      <title>Home | Lamborghini E-Commerce</title>
      <meta name='description' content='Home' />
    </Helmet>
    <Title order={2} style={{ marginBottom: '10px' }}>Lamborghini-Commerce</Title>
    
    <Text order={3} style={{ marginTop: '10px' }}>Recent Products Added</Text>
    <ProductsHome />

    <Link to='/products'>
      <Button type="Submit" color="orange" style={{ marginTop: '20px', float: 'right' }}>View All Products</Button>
    </Link>
    </>
  )
}

export default Home;