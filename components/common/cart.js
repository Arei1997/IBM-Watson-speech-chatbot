import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Alert, AlertTitle, Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CartRow from "./cartRow";

export default function ShoppingCart() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cartItems = useSelector((state) => state.products);

  return (
    <div>
      <Button
        variant="text"
        color="primary"
        sx={{ px: 3, fontWeight: 600, textTransform: "unset" }}
        endIcon={<ShoppingCartIcon />}
        onClick={handleClickOpen}
      >
        Shopping Cart
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        maxWidth={"md"}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle sx={{ px: 4 }}>
          <Typography variant="h5" mt={3}>
            Shopping Cart
          </Typography>
          <Divider sx={{ my: 2 }} />
        </DialogTitle>
        <DialogContent sx={{ p: 4, m: 0 }}>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <CartRow item={item} key={item.id} />
              ))}
            </>
          ) : (
            <Alert
              severity="info"
              sx={{
                m: 0,
                minWidth: {
                  xs: "100%",
                  md: "400px",
                },
              }}
            >
              <AlertTitle sx={{ m: 0 }}>Shopping Cart is empty!</AlertTitle>
            </Alert>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 4 }}>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
