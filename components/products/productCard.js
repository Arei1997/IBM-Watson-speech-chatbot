import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
  InputBase,
} from "@mui/material";
import Image from "next/image";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slices/cart.slice";

const ProductCard = ({ item }) => {
  const [qt, setQt] = useState(1);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ ...item, qt }));
  };
  return (
    <Card
      key={item.id}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        p: 2,
      }}
    >
      <CardMedia
        sx={{
          minWidth: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={item.img} alt={item.name} width={72} height={72} />
      </CardMedia>
      <CardContent
        sx={{
          textAlign: {
            xs: "center",
            lg: "start",
          },
        }}
      >
        <Typography variant="h5">{item.name}</Typography>
        <Typography color={"secondary"}>{item.price} / pc</Typography>
      </CardContent>
      <CardActions
        sx={{
          ml: {
            lg: "auto",
          },
          width: {
            xs: "100%",
            lg: "fit-content",
          },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <ToggleButtonGroup sx={{ width: "100%" }}>
          <ToggleButton
            size="small"
            onClick={() => {
              if (qt > 1) setQt(qt - 1);
            }}
            sx={{ borderRight: "none" }}
          >
            <RemoveSharpIcon />
          </ToggleButton>
          <InputBase
            sx={{
              width: "100%",
              minHeight: "40px",
              justifyContent: "flex-end",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
              borderTop: "1px solid rgba(0, 0, 0, 0.12)",
            }}
            inputProps={{
              style: {
                textAlign: "center",
              },
            }}
            size="small"
            value={qt}
            type="number"
            onChange={(e) => {
              if (e.target.value > 0) setQt(e.target.value);
            }}
            variant="standard"
          />
          <ToggleButton size="small" onClick={() => setQt(qt + 1)}>
            <AddSharpIcon />
          </ToggleButton>
        </ToggleButtonGroup>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "100%",
            fontWeight: 600,
          }}
          startIcon={<AddShoppingCartIcon />}
          onClick={addToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
