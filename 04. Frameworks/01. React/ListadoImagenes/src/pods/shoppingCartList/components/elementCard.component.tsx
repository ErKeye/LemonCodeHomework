import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { ShoppingCartListElement } from "../shoppingCartListElement.VM";

interface Props {
  element: ShoppingCartListElement;
  onDelete: (id: string) => void;
}

export const ElementCard: React.FC<Props> = ({ element, onDelete }) => {
  return (
    <Card
      sx={{
        height: 50,
        display: "flex",
        justifyContent: "space-between",
        gap: "5px",
      }}
    >
      {" "}
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <CardMedia sx={{ width: 100 }} image={element.picUrl} />

        <CardContent sx={{ alignItems: "center" }}>
          <Typography variant="body2" component="div">
            {element.title}
          </Typography>
        </CardContent>
      </Box>
      <IconButton
        aria-label="delete"
        color="primary"
        onClick={() => onDelete(element.id)}
      >
        <DeleteIcon />
      </IconButton>
    </Card>
  );
};
