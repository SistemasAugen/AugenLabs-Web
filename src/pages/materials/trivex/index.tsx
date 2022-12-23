import React from 'react';
import { Layout } from '@components/index';
import { Container } from '@mui/material';

import Trivex from '@modules/materials/Trivex/Trivex';
import Reescribiendo from '@modules/materials/Trivex/Reescribiendo/Reescribiendo';

import useStyles from './index.styles';

const trivex = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.trivex_background}>
        <Trivex />
      </div>
      <Container>
        <Reescribiendo />
      </Container>
    </Layout>
  )
}

trivex.propTypes = {}

export default trivex