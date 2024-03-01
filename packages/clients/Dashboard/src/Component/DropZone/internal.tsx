import React, { useCallback, useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import {
  dialogActionsStyles,
  dialogCancelActionStyles,
  dialogContentStyles,
  dialogHeaderStyles,
  dialogSubmitActionStyles,
} from "../../styles/dialog";
import { Spinner } from "../Spinner";

interface MyDropzoneProps {
  open: boolean;
  onClose: () => void;
  onFilesChange: (files: File[]) => void;
  onSubmit: () => void; // New callback for submit action
}

export const DropZone: React.FC<MyDropzoneProps> = ({
  open,
  onClose,
  onFilesChange,
  onSubmit,
}) => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  const handleSubmit = () => {
    alert("Upload Image");
  };

  const handleFilesChange = useCallback(
    (files: File[]) => {
      console.log("Files:", files);
      onFilesChange(files);
    },
    [onFilesChange]
  );

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={dialogHeaderStyles}>Select Image</DialogTitle>
      <Box>
        <DialogContent sx={dialogContentStyles}>
          {/* <Box sx={{paddingTop:'10px'}}><DropzoneArea
            acceptedFiles={['image/*']}
            dropzoneText="Drag and drop an image here or click"
            onChange={handleFilesChange}
            showAlerts={false}
          /></Box> */}
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{ marginBottom: 4 }}>
              <input
                accept="image/*"
                id="image-upload"
                type="file"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              {/* <label htmlFor="image-upload">
                  <Button
                    variant="contained"
                    component="span"
                    sx={{
                      backgroundColor: "#4F0336",
                      "&:hover": { backgroundColor: "#390227" },
                    }}
                  >
                    Upload Image
                  </Button>
                </label> */}
              <label htmlFor="image-upload">
                <Box
                  style={{ cursor: "pointer" }}
                  component="img"
                  src="/upload.svg"
                  alt="Upload"
                  height="80px"
                />
              </label>
              <span>{image?.name || "No file chosen"}</span>
            </Stack>
          <DialogActions sx={dialogActionsStyles}>
            {loading ? (
              <Spinner />
            ) : (
              <>
                <Button onClick={onClose} size="small" sx={dialogCancelActionStyles}>
                  Cancel
                </Button>
                <Button type="submit" size="small" sx={dialogSubmitActionStyles}>
                  Add
                </Button>
              </>
            )}
          </DialogActions>
          </form>
        </DialogContent>
      </Box>
      {/* 
      <DialogActions sx={dialogActionsStyles}>
        <Button onClick={onClose} sx={{ color: "red" }}>
          Cancel
        </Button>
        <Button
          onClick={() => {
            onSubmit();
            onClose();
          }}
          sx={{ color: "#4F0336" }}
        >
          Submit
        </Button>
      </DialogActions> */}
    </Dialog>
  );
};
