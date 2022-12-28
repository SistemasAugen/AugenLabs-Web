import type { NextPage } from "next";

import { Layout } from '@components/index';
import Transform from '@modules/materials/Parasol/Transform/Transform';
import { Container } from '@mui/material';
import React from 'react';
import useStyles from './index.styles';
import Trivex_Parasol from "@modules/materials/TrivexParasol/TrivexParasol";

const Trivex_Parasol_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.trivex_parasol_background}>
        <Trivex_Parasol />
      </div>
      <Container>
        <Transform />
      </Container>
    </Layout>
  )
}

export default Trivex_Parasol_Material;