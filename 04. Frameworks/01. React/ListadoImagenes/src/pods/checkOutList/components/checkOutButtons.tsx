import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box } from "@mui/material";
import { routes } from "@/core/router/routes";

export const CheckOutButtons: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
      }}
    >
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <Button
        variant="contained"
        startIcon={<ShoppingCartCheckoutIcon />}
        onClick={() => navigate(routes.payment)}
      >
        Payment
      </Button>
    </Box>
  );
};
