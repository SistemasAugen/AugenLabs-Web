import React from 'react';
import type { NextPage } from "next";

import { Layout } from '@components/index';
import Transform from '@modules/materials/Parasol/Transform/Transform';
import { Container } from '@mui/material';
import useStyles from './index.styles';
import Polarized from "@modules/materials/Polarized/Polarized";

const Trivex_Parasol_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.trivex_parasol_background}>
        <Polarized />
      </div>
      <Container>
        <Transform />
      </Container>
    </Layout>
  )
}

export default Trivex_Parasol_Material;