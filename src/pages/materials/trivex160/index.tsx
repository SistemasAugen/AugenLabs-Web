import type { NextPage } from "next";

import { Layout } from '@components/index';
import NewTecnology from '@modules/materials/Bblock/NewTecnology/NewTecnology';
import { Container } from '@mui/material';
import React from 'react';
import useStyles from './index.styles';
import Trivex160 from "@modules/materials/Trivex160/Trivex160";

const Trivex160_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.trivex160_background}>
        <Trivex160 />
      </div>
      <Container>
        <NewTecnology />
      </Container>
    </Layout>
  )
}

export default Trivex160_Material;