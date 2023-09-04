import React from "react";
import { PicElementVM } from "../picElementVM";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material/";

interface Props {
  picElement: PicElementVM;
  onSelected: (id: string) => void;
  onUnselected: (id: string) => void;
}

export const PicElementCard: React.FC<Props> = ({
  picElement,
  onSelected,
  onUnselected,
}) => {
  const [selected, setSelected] = React.useState<boolean>(picElement.selected);

  React.useEffect(() => {
    picElement.selected = selected;
  }, [selected]);

  React.useEffect(() => {
    setSelected(picElement.selected);
  }, [picElement]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.checked);
    e.target.checked ? onSelected(picElement.id) : onUnselected(picElement.id);
  };

  return (
    <Card
      sx={{
        width: 200,
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <CardMedia
          sx={{ height: 140 }}
          image={picElement.picUrl}
          title={picElement.id}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {picElement.title}
          </Typography>
        </CardContent>
      </Box>
      <FormControlLabel
        control={<Checkbox checked={selected} onChange={handleChange} />}
        label="Buy"
        sx={{ paddingLeft: "16px" }}
      />
    </Card>
  );
};

//onChange={(e) => setSelected(e.target.checked)}
