import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Button,
  Box,
  CardMedia,
  TextField,
} from "@mui/material";
import { BaseContainer } from "../common/elements";
import { config } from "@/helpers/config";
import Image from "next/image";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import ProductCard from "./productCard";

const Products = () => {
  return (
    <>
      <BaseContainer
        sx={{
          py: 5,
        }}
      >
        <Typography variant="h1" fontSize={35} fontWeight={400}>
          Products
        </Typography>
        <Typography paragraph sx={{ mb: 2, mt: 1 }}>
          use add button to add products to the shopping cart, you can also use
          ai assistant to do for you
        </Typography>
        <Divider />
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          sx={{
            p: {
              xs: 2,
              lg: 0,
            },
          }}
        >
          {config.products.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </Box>
      </BaseContainer>
    </>
  );
};

export default Products;
