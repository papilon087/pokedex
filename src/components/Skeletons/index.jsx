import React from "react";
import { Container, Skeleton } from "@mui/material";

export const Skeletons = () => {
  return (
    <Container maxWidth="xxl">
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        style={{ margin: "100px" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        style={{ margin: "100px" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        style={{ margin: "100px" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        style={{ margin: "100px" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        style={{ margin: "100px" }}
      />
    </Container>
  );
};
