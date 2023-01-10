import React from 'react';
import type { NextPage } from "next";

import { Layout } from '@components/index';
import Transform from '@modules/materials/Parasol/Transform/Transform';
import { Container } from '@mui/material';
import useStyles from './index.styles';
import Cr39 from '@modules/materials/Cr39/Cr39';
import caracteristicas_cr39 from "@images/Caracteristicas_CR39.png";
import Material_C from '@modules/materials/MaterialCharacteristics/MaterialCharacteristics';
import LearnMore from '@modules/materials/LearnMore/LearnMore';

const Cr39_Material: NextPage = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <div className={classes.cr39_background}>
        <Cr39 />
      </div>
      <Container maxWidth="lg">
        <Transform />
        <Material_C
          src={caracteristicas_cr39}
          alt={'caracteristicas del material cr39'}
        />
        <LearnMore color={"#0191CB"} />
      </Container>
    </Layout>
  );
};

export default Cr39_Material;