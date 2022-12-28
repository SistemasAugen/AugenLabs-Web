import type { NextPage } from "next";

import { Layout } from '@components/index';
import Parasol from '@modules/materials/Parasol/Parasol';
import Transform from '@modules/materials/Parasol/Transform/Transform';
import { Container } from '@mui/material';
import React from 'react';
import useStyles from './index.styles';

const Parasol_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.parasol_background}>
        <Parasol />
      </div>
      <Container>
        <Transform />
      </Container>
    </Layout>
  )
}

export default Parasol_Material