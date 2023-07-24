import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeItem } from "@/redux/slices/cart.slice";

const CartRow = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        border: "1px solid lightgray",
        borderRadius: "10px",
        p: 3,
        gap: 3,
        my: 2,
        minWidth: {
          xs: "100%",
          md: "400px",
        },
      }}
      display={"flex"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Box
        sx={{
          minWidth: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={item.img} alt={item.name} width={60} height={60} />
      </Box>
      <Box>
        <Typography paragraph sx={{ mb: 0 }}>
          {item.name}
        </Typography>
        <Typography color={"secondary"}>{item.price} / pc</Typography>
      </Box>
      <Box
        sx={{
          ml: {
            md: "auto",
          },
          width: {
            xs: "100%",
            md: "auto",
          },
        }}
      >
        <Typography
          paragraph
          sx={{
            textAlign: {
              xs: "center",
              md: "end",
            },
          }}
        >
          {item.qt} pcs
        </Typography>
        <Button
          variant="text"
          color="danger"
          sx={{
            ml: {
              md: "auto",
            },
            width: {
              xs: "100%",
              md: "auto",
            },
            px: {
              md: 1,
            },
          }}
          onClick={() => dispatch(removeItem(item))}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
};

export default CartRow;
