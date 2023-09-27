import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import styled from "styled-components";

function OrderSummary() {
  const Button = styled.button`
    color: #41644a;
    background-color: transparent;
    font-size: 13px;
    padding: 8px 20px;
    border: 2px solid #41644a;
    border-radius: 35px;
    cursor: pointer;
  `;
  const Send = styled.button`
    color: #fff;
    background-color: #41644a;
    font-size: 13px;
    padding: 8px 20px;
    border: 1px solid #5c5470;
    border-radius: 35px;
    margin-left: 20px;
    cursor: pointer;
  `;
  return (
    <Paper sx={{ paddingLeft: "60px", paddingTop: "20px", position: "relative" }}>
      <BreadCrumbs />
      <Box sx={{ display: "flex" ,paddingBottom: "20px"}}>
        <Typography
          variand="h6"
          sx={{ fontWeight: "bold", fontSize: "20px", paddingTop: "10px" }}
        >
          Order 324567ABC
        </Typography>
        <Box sx={{position: "absolute", right: "80px"}}>
          <Button>Back</Button>
          <Send>Approve order</Send>
        </Box>
      </Box>
    </Paper>
  );
}

export default OrderSummary;
