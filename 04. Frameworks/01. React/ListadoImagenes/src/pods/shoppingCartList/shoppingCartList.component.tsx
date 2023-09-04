import React from "react";
import { ElementCard } from "./components/elementCard.component";
import { ShoppingCartListElement } from "./shoppingCartListElement.VM";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/material";
import classNames from "classnames";
import css from "./shoppingCartList.styles.css";

interface Props {
  cartElements: ShoppingCartListElement[];
  onDeleteElement: (id: string) => void;
}

export const ShoppingCartListComponent: React.FC<Props> = ({
  cartElements,
  onDeleteElement,
}) => {
  return (
    <div className={classNames(css.shoppingCartListContainer)}>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "flex-end",
          padding: "10px",
        }}
      >
        <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
      </Box>
      <>
        {cartElements && cartElements.length > 0 ? (
          <>
            {cartElements.map((cartElement) => (
              <ElementCard
                key={cartElement.id}
                element={cartElement}
                onDelete={onDeleteElement}
              ></ElementCard>
            ))}
          </>
        ) : (
          <Typography variant="body1" component="div">
            {"The cart is Empty"}
          </Typography>
        )}
      </>
    </div>
  );
};
