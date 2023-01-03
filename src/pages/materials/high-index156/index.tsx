import React from 'react';
import type { NextPage } from "next";

import { Layout } from '@components/index';
import Transform from '@modules/materials/Parasol/Transform/Transform';
import { Container } from '@mui/material';
import useStyles from './index.styles';
import Polarized from "@modules/materials/Polarized/Polarized";
import { HighIndex156 } from '@modules/materials';

const HighIndex_Parasol_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.high_index156_background}>
        <HighIndex156 />
      </div>
      <Container>
        <Transform />
      </Container>
    </Layout>
  )
}

export default HighIndex_Parasol_Material;