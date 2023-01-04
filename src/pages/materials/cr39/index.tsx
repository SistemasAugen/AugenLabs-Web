import React from 'react';
import type { NextPage } from "next";

import { Layout } from '@components/index';
import Transform from '@modules/materials/Parasol/Transform/Transform';
import { Container } from '@mui/material';
import useStyles from './index.styles';
import Cr39 from '@modules/materials/Cr39/Cr39';

const Cr39_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.cr39_background}>
        <Cr39 />
      </div>
      <Container>
        <Transform />
      </Container>
    </Layout>
  );
};

export default Cr39_Material;