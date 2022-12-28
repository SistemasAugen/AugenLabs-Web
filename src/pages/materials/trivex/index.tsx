import React from 'react';
import { Layout } from '@components/index';
import { Container } from '@mui/material';

import Trivex from '@modules/materials/Trivex/Trivex';
import Reescribiendo from '@modules/materials/Trivex/Rewriting/Rewriting';

import useStyles from './index.styles';
import { NextPage } from 'next';

const Trivex_Material: NextPage = () => {
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
  );
};


export default Trivex_Material