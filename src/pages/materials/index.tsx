import React from 'react';

import type { NextPage } from "next";
import { Container } from "@mui/material";

import { Layout } from "@components";
import { Materials, OurMaterials } from "@modules/materials";

const Materiales: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <OurMaterials />
        <Materials />
      </Container>
    </Layout>
  );
};

export default Materiales;
