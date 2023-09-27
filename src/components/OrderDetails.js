import * as React from "react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import { BsSnow } from "react-icons/bs";
import { TbBeachOff } from "react-icons/tb";
import { GiSlicedBread } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";

export default function OrderDetails() {
  return (
    <div>
      <Box
        sx={{
          display: { md: 'inline', lg: 'flex',},
          // display: "flex",

          alignItems: "center",
          //   width: 'fit-content',
          margin: "40px",
          //   height: "100px",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          //   bgcolor: 'background.paper',
          //   bgcolor: "yellow",
          //   padding: 10px,
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Box
          sx={{
            paddingLeft: "35px",
            width: "120px",
            height: "80px",
            paddingTop: "20px",
            // alignContent: "center",
            paddingRight: "35px",
            paddingBottom: "10px",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontSize: "10px" }}>
            Supplier
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
            East coast fruits & veletables
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            paddingLeft: "35px",
            width: "120px",
            paddingRight: "35px",
            height: "80px",
            paddingTop: "20px",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontSize: "10px" }}>
            Shipping Date
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
            Thu, Feb 10
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            paddingLeft: "35px",
            width: "120px",
            paddingRight: "35px",
            height: "80px",
            paddingTop: "20px",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontSize: "10px" }}>
            Total
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
            $ 15,028.3
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            paddingLeft: "35px",
            width: "120px",
            paddingRight: "35px",
            height: "80px",
            paddingTop: "20px",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontSize: "10px" }}>
            Category
          </Typography>
          <Box
            sx={
              {
                //   paddingBottom: "10px",
                //   display: "flex",
                //   justifyContent: "center",
                //   alignItems: "center",
                marginLeft: "-12px",
              }
            }
          >
            <Box>
              <BsSnow size={10} />
              <TbBeachOff size={10} />
              <GiSlicedBread size={10} />
            </Box>
            <Box sx={{ marginTop: "-10px" }}>
              <MdFastfood size={10} />
              <GiSlicedBread size={10} />
              <BsSnow size={10} />
            </Box>
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            paddingLeft: "35px",
            width: "120px",
            paddingRight: "35px",
            height: "80px",
            paddingTop: "20px",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontSize: "10px" }}>
            Department
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
            300 444 678
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            paddingLeft: "35px",
            width: "120px",
            paddingRight: "35px",
            height: "80px",
            paddingTop: "20px",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontSize: "10px" }}>
            Status
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
            Awaiting your approval
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
