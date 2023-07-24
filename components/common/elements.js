import { Box, styled } from "@mui/material";

export const NavBox = styled(Box)(({ theme }) => ({
  background: "#fff",
  minHeight: "72px",
  boxShadow: "rgb(234, 234, 234) 0px -1px 0px 0px inset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const BaseContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "540px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "720px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "960px",
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1140px",
  },
  [theme.breakpoints.up("xxl")]: {
    maxWidth: "1320px",
  },
}));



export const NavbarInner = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));