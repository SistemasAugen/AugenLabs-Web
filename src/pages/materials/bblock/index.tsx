import type { NextPage } from "next";
import { Layout } from '@components/index';
import Bblock from '@modules/materials/Bblock/Bblock';
import NuevaTecnologia from '@modules/materials/Bblock/NuevaTecnologia/NuevaTecnologia';
import { Container } from '@mui/material';
import React from 'react';
import useStyles from './index.styles';

const Bblock_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.bblock_background}>
        <Bblock />
      </div>
      <Container>
        <NuevaTecnologia />
      </Container>
    </Layout>
  )
}


export default Bblock_Material