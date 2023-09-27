import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import {
  Box,
  ImageList,
  ImageListItem,
  Modal,
  Button as MuiButton,
  TableFooter,
  TextField,
  Typography,
} from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { FiPrinter } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  addTag,
  addToCart,
  decrementItem,
  incrementItem,
  removeTag,
  updateData,
} from "../features/cart/cartSlice";

// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@mui/icons/Search";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const dispatch = useDispatch();
  const { cartItems, data, item } = useSelector((state) => state.cart);
  const [approved, setApproved] = useState(false);
  const [missing, setMissing] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    addProperty();
    console.log("Data -->", data);
  }, []);

  console.log("Data -->", data);

  const addProperty = () => {
    const newData = data.map((item) => {
      return { ...item, isApproved: false, isMissing: false };
    });
    dispatch(updateData(newData));
  };
  const handleOpen = (d) => {
    console.log(d);
    setModalData(d);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const Button = styled.button`
    color: #41644a;
    background-color: transparent;
    font-size: 13px;
    padding: 8px 20px;
    border: 2px solid #41644a;
    border-radius: 35px;
    cursor: pointer;
  `;
  const Icon = styled.button`
    color: #5c5470;
    background-color: transparent;
    font-size: 10px;
    padding: 8px 10px;
    border: 1px solid #5c5470;
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
  const Cancel = styled.button`
    color: #41644a;
    background-color: transparent;
    font-size: 13px;
    padding: 8px 20px;
    border: 1px solid #fff;
    border-radius: 35px;
    cursor: pointer;
  `;
  const ApproveOrder = styled.button`
    color: #fff;
    background-color: #79ac78;
    font-size: 1em;
    padding: 8px 10px;
    border: 1px solid #41644a;
    /* border: 2px solid #41644a; */
    border-radius: 35px;
    margin-right: 20px;
    cursor: pointer;
  `;
  const Missing = styled.button`
    color: #fff;
    background-color: #c70039;
    font-size: 1em;
    padding: 8px 10px;
    border: 1px solid #41644a;
    /* border: 2px solid #41644a; */
    border-radius: 35px;
    margin-right: 20px;
    cursor: pointer;
  `;
  const Edit = styled.div`
    color: "grey";
  `;
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 330,
    bgcolor: "background.paper",
    // border: '2px solid #000',
    outline: "none",
    boxShadow: 24,
    borderRadius: "10px",
    p: 4,
  };
  return (
    <Paper sx={{ margin: "40px" }}>
      <Box
        sx={{
          height: "20px",
          padding: "40px",
          display: "flex",
          position: "relative",
          //   flexDirection: "row",
          //   width: "100%",
        }}
      >
        <Box>
          <TextField
            id="standard-search"
            type="search"
            sx={{ width: "550px" }}
            defaultValue="Search..."
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                //   <InputAdornment>
                <IconButton>
                  <BiSearch />
                </IconButton>
                //   </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ position: "absolute", right: "40px", display: "flex" }}>
          <Box sx={{ marginRight: "40px" }}>
            <Button>Add Item</Button>
          </Box>
          <Box sx={{ marginTop: "6px", color: "#41644a" }}>
            <FiPrinter size={25} sx={{}} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "40px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{}}>
                <TableCell align="center"></TableCell>
                <TableCell align="center">Product name</TableCell>
                <TableCell align="center">Brand</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <>
                  <TableRow
                    key={row.title}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      padding: "0px",
                      margin: "0px",
                      // paddingLeft: "10px",
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ padding: "0px", margin: "0px" }}
                    >
                      <ImageList
                        sx={{
                          width: "150px",
                          height: "50px",
                          objectFit: "contain",
                          paddingLeft: "20px",
                          // padding: "0px !important"
                        }}
                      >
                        <ImageListItem key={row.thumbnail}>
                          <img
                            srcSet={`${row.thumbnail}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${row.thumbnail}?w=164&h=164&fit=crop&auto=format`}
                            alt={row.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      </ImageList>
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{ padding: "0px", margin: "0px" }}
                    >
                      {row.title}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{ padding: "0px", margin: "0px" }}
                    >
                      {row.brand}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{ padding: "0px", margin: "0px" }}
                    >
                      ${row.price}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{ padding: "0px", margin: "0px" }}
                    >
                      {row.stock}
                    </TableCell>

                    <TableCell
                      align="center"
                      sx={{ padding: "0px", margin: "0px" }}
                    >
                      ${row.price}
                    </TableCell>

                    <TableCell
                      sx={{
                        width: "200px",

                        // backgroundColor: "yellow",
                        height: "80px",
                        padding: "0px",
                        marginLeft: "-40px",
                      }}
                    >
                      {row.isApproved && <ApproveOrder>Approved</ApproveOrder>}
                      {row.isMissing && <Missing>Missing - Urgent</Missing>}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        width: "100px",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        height: "80px",
                        padding: "0px",
                        margin: "0px",
                      }}
                    >
                      {/* {
                        <Box>
                          {cartItems.includes(row) ? (
                            <ApproveOrder>Approved</ApproveOrder>
                          ) : (
                            ""
                          )}
                          {missing && <Missing>Missing - Urgent</Missing>}
                        </Box>
                      } */}
                      <Box
                        sx={{
                          color: "grey",
                          // color: `${approved} ? "green" : "grey"`,
                          display: "flex",
                          marginRight: "20px",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Box
                          sx={{
                            paddingRight: "10px",
                            cursor: "pointer",
                          }}
                        >
                          <TiTick
                            size={20}
                            onClick={() => {
                              let dict = {};
                              dict = { ...row };
                              dict.isApproved = true;
                              //   let res = data[data.findIndex(row)]
                              dispatch(addToCart(dict));
                              dispatch(addTag(row));
                            }}
                          />
                        </Box>
                        <Box sx={{ paddingRight: "10px", cursor: "pointer" }}>
                          <RxCross2
                            size={18}
                            onClick={() => dispatch(removeTag(row))}
                          />
                        </Box>
                        <Box sx={{ cursor: "pointer" }}>
                          <Edit onClick={() => handleOpen(row)}>Edit</Edit>
                        </Box>
                      </Box>
                    </TableCell>
                  </TableRow>
                </>
              ))}
            </TableBody>
            {/* <TableFooter>
              <TablePagination />
            </TableFooter> */}
          </Table>
        </TableContainer>
      </Box>
      {
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, fontSize: "15px", fontWeight: "bold" }}
              variant="h6"
            >
              {modalData.description}
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="subtitle1"
              component="h2"
            >
              {modalData.title}
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ width: "50%" }}>
                  <ImageList
                    sx={{
                      //   width: "150px",
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",

                      // padding: "0px !important"
                    }}
                  >
                    <ImageListItem key={modalData.thumbnail}>
                      <img
                        srcSet={`${modalData.thumbnail}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${modalData.thumbnail}?w=164&h=164&fit=crop&auto=format`}
                        alt={modalData.title}
                        loading="lazy"
                        style={{ maxHeight: "100px" }}
                      />
                    </ImageListItem>
                  </ImageList>
                </Box>
                <Box sx={{ marginLeft: "-80px" }}>
                  <Box sx={{ display: "flex" }}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Price ($)
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, marginLeft: "92px" }}
                    >
                      ${modalData.price}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Quantity
                    </Typography>
                    <Typography>
                      <Box
                        sx={{
                          display: "flex",
                          marginLeft: "54px",
                          marginTop: "10px",
                        }}
                      >
                        <IconButton
                          sx={{ padding: "10px", height: "30px" }}
                          onClick={() => dispatch(decrementItem())}
                        >
                          -
                        </IconButton>
                        <MuiButton
                          variant="outlined"
                          size="small"
                          disableRipple
                          sx={{ marginLeft: "0px" }}
                        >
                          {item}
                          {/* {modalData.stock} */}
                        </MuiButton>
                        <IconButton
                          sx={{ padding: "10px", height: "30px" }}
                          onClick={() => dispatch(incrementItem())}
                        >
                          +
                        </IconButton>
                      </Box>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Total
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, marginLeft: "120px" }}
                    >
                      ${modalData.price * item}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  id="modal-modal-description"
                  variant="h6"
                  sx={{ mt: 2, fontSize: "15px", fontWeight: "bold" }}
                >
                  Choose Reason
                </Typography>
                <Typography
                  id="modal-modal-description"
                  variant="subtitle2"
                  sx={{
                    mt: 2,
                    fontSize: "10px",
                    color: "gray",
                    marginLeft: "20px",
                    marginTop: "20px",
                  }}
                >
                  (Optional)
                </Typography>
              </Box>

              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Icon>Missing Product</Icon>
                <Icon>Quantity is not the same</Icon>
                <Icon>Price is not the same</Icon>
                <Icon>Others</Icon>
              </Box>

              <Box sx={{ position: "absolute", right: "20px", bottom: "10px" }}>
                <Cancel onClick={handleClose}>Cancel</Cancel>
                <Send onClick={handleClose}>Send</Send>
              </Box>
            </Box>
          </Box>
        </Modal>
      }
      {/* {data.map(d => )} */}
    </Paper>
  );
}
