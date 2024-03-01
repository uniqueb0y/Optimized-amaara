import { FC, useState } from "react";
import {
  TextField,
  Button,
  Stack,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import {
  dialogActionsStyles,
  dialogCancelActionStyles,
  dialogContentStyles,
  dialogHeaderStyles,
  dialogSubmitActionStyles,
} from "../../styles/dialog";
import { useAuth } from "../../contexts/AuthContext";
import { useMutation } from "@apollo/client";
import { CREATE_RAFFLE } from "../../gql/raffle";
import { Spinner } from "../Spinner";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";

interface RaffleFormProps {
  open: boolean;
  onClose: () => void;
}

export const RaffleForm: FC<RaffleFormProps> = ({ open = false, onClose }) => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [winnerName, setWinnerName] = useState<String>("");
  const [image, setImage] = useState<File | null>(null);
  const [link, setLink] = useState<string>("");
  const [yearMonth, setYearMonth] = useState<any>(null);
  const monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "December",
  ];
  const [createRaffleMutation] = useMutation(CREATE_RAFFLE, {
    refetchQueries: ["GetRaffle"],
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (image) {
      const path = `raffle/${winnerName}-${yearMonth}`;
      const storageRef = ref(storage, path);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("Uploading");
        },
        (error) => {
          alert(
            "Error while uploading image. Please try again after sometime."
          );
          console.log(error);
          setLoading(false);
          return false;
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            saveRaffle(downloadURL);
          });
        }
      );
    } else {
      saveRaffle();
    }
  };

  const saveRaffle = (imageUrl?: string) => {
    const month = monthsArr[yearMonth?.$d?.getMonth()];
    const year = yearMonth?.$y?.toString();
    const raffleObj = {
      winnerName,
      month,
      year,
      image: imageUrl,
      link,
      createdBy: currentUser?.profileInfo?.id,
    };
    createRaffleMutation({
      variables: {
        raffleInput: raffleObj,
      },
      onCompleted: (data: any) => {
        if (data?.createRaffle?.isSuccess) {
          console.log("Raffle Winner created");
          setLoading(false);
          setWinnerName('');
          setYearMonth(null);
          setLink('');
          setImage(null);
          onClose();
        }
      },
      onError: (error: any) => {
        console.log(error);
        setLoading(false);
        alert(
          "Error while processing this request, please try again after sometime."
        );
      },
    });
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle sx={dialogHeaderStyles}>Add Winner</DialogTitle>
        <Box>
          <DialogContent sx={dialogContentStyles}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2} sx={{ marginBottom: 4 }}>
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Winner Name"
                  onChange={(e: any) => setWinnerName(e.target.value)}
                  value={winnerName}
                  fullWidth
                  required
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label={"Month and Year*"}
                    views={["month", "year"]}
                    value={yearMonth}
                    onChange={(value: any) => setYearMonth(value)}
                  />
                </LocalizationProvider>
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Link"
                  onChange={(e: any) => setLink(e.target.value)}
                  value={link}
                  fullWidth
                />
                <input
                  accept="image/*"
                  id="image-upload"
                  type="file"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                />
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
                    <Button
                      onClick={onClose}
                      size="small"
                      sx={dialogCancelActionStyles}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      size="small"
                      sx={dialogSubmitActionStyles}
                      disabled={!winnerName || !yearMonth}
                    >
                      Add
                    </Button>
                  </>
                )}
              </DialogActions>
            </form>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};
