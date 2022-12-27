import type { NextPage } from "next";
import { Container } from "@mui/material";

import { Layout } from "@components";
import { Materiales, NuestrosMateriales } from "@modules/materials";

const Materials: NextPage = () => {
  return (
    <Layout>
      <Container maxWidth="lg">
        <NuestrosMateriales />
        <Materiales />
      </Container>
    </Layout>
  );
};

export default Materials;
