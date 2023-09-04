import { routes } from "@/core/router/routes";
import Button from "@mui/material/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Tooltip from "@mui/material/Tooltip";
import Switch from "@mui/material/Switch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {
  pageLinksList: string[];
  showShoppingCart: boolean;
  setShowShoppingCart: (showCart: boolean) => void;
}
const showCartText: string = "Show Cart";
const hideCartText: string = "Hide Cart";

export const NavigationBarComponent: React.FC<Props> = ({
  pageLinksList,
  showShoppingCart,
  setShowShoppingCart,
}) => {
  const HandleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setShowShoppingCart(checked);
    setButtonFunctionText(checked ? hideCartText : showCartText);
  };
  const [buttonFunctionText, setButtonFunctionText] = React.useState<string>(
    showShoppingCart ? hideCartText : showCartText
  );
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            {pageLinksList.map((petBreed) => (
              <Button
                key={petBreed}
                onClick={() => navigate(routes.list(petBreed))}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {petBreed}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", flexGrow: 0, flexDirection: "row" }}>
            <ShoppingCartIcon sx={{ alignSelf: "center" }}> </ShoppingCartIcon>
            <Tooltip title={buttonFunctionText}>
              <Switch
                checked={showShoppingCart}
                onChange={HandleChange}
                aria-label="show cart"
                color="default"
              />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
