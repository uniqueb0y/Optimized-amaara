import { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  CardMedia,
  Typography,
  CardActions,
  Box,
  Stack,
} from "@mui/material";
import { DropZone } from "../../Component/DropZone/internal";

export function AppSetting() {
  const [cardIndexToUpdate, setCardIndexToUpdate] = useState<number | null>(
    null
  );
  const [images, setImages] = useState<string[]>(
    Array.from({ length: 7 }, (_, index) => `../../images/Amaara${index}.png`)
  );
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (cardIndex: number) => {
    setDialogOpen(true);
    setCardIndexToUpdate(cardIndex);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setCardIndexToUpdate(null);
  };

  const handleFileUpload = (files: File[]) => {
    if (files.length === 0 || cardIndexToUpdate === null) {
      // No files were selected or no card index to update
      return;
    }

    const updatedImages = [...images];
    const file = files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const newImageSrc = event.target?.result as string;
      updatedImages[cardIndexToUpdate] = newImageSrc;
      setImages(updatedImages);
    };

    reader.readAsDataURL(file);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ padding: "40px", width: "95vw" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: 24, fontWeight: "bold", color: "#4F0336" }}
          >
            App Settings
          </Typography>
        </Box>
        <Stack
          direction="row"
          spacing={3}
          sx={{ p: 8 }}
          useFlexGap
          flexWrap="wrap"
        >
          {images.map((imageSrc, index) => (
            <Card key={index} sx={{ height: "200px", width: "200px" }}>
              <CardMedia sx={{ height: 150 }}>
                <img
                  src={imageSrc}
                  style={{ width: "100%", height: "100%", padding: "5px" }}
                  alt="Company Logo"
                />
              </CardMedia>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CardContent>
                  {index === 0 ? (
                    <Typography sx={{ color: "#4F0336", fontWeight: "600" }}>
                      Banner
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        color: "#4F0336",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Promotion {index}
                    </Typography>
                  )}
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleOpenDialog(index)}
                    sx={{ color: "#d4a11e" }}
                  >
                    Change
                  </Button>
                </CardActions>
              </Box>
            </Card>
          ))}
        </Stack>
      </Box>
      <DropZone
        open={isDialogOpen}
        onClose={handleCloseDialog}
        onFilesChange={handleFileUpload}
        onSubmit={handleCloseDialog}
      />
    </Box>
  );
}
