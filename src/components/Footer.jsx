import React from 'react';
import { Breadcrumbs, Anchor, Header } from '@mantine/core';

const Footer = () => {
  return (
    <>
    <div style={{ marginTop: '70px', marginBottom: '70px' }}>
    <Header style={{ marginBottom: '20px' }}/>
      <div style={{ float: 'right' }}>
        <Breadcrumbs>
          <Anchor href='https://github.com/CzXiong1024/Lamborghini-FrontEnd' target='_blank'>
            View Source Code
          </Anchor>
          <Anchor href='https://glitch.com/@CzXiong1024' target='_blank'>
            View Portfolio
          </Anchor>
        </Breadcrumbs>
      </div>
    </div>
    </>
  )
}

export default Footer