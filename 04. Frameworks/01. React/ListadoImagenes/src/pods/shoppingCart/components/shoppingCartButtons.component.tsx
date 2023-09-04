import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Box } from "@mui/material";
import { routes } from "@/core/router/routes";
import { ShoppingCartContext } from "@/core/providers/shoppingCart";

export const ShoppingCartButtons: React.FC = () => {
  const { emptyCart } = React.useContext(ShoppingCartContext);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",

        justifyContent: "space-between",
      }}
    >
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={emptyCart}
      >
        Empty Cart
      </Button>
      <Button
        variant="contained"
        startIcon={<ShoppingCartCheckoutIcon />}
        onClick={() => navigate(routes.checkOut)}
      >
        Check Out
      </Button>
    </Box>
  );
};
