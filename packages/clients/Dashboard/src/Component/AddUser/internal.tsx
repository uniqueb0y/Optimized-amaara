import { FC, useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
} from "@mui/material";
import {
  dialogActionsStyles,
  dialogCancelActionStyles,
  dialogContentStyles,
  dialogHeaderStyles,
  dialogSubmitActionStyles,
} from "../../styles/dialog";
import { useMutation } from "@apollo/client";
import { CREATE_USER_BY_ADMIN } from "../../gql/user";
import { Spinner } from "../Spinner";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import { useAuth } from "../../contexts/AuthContext";

interface AddUserProps {
  open: boolean;
  onClose: () => void;
}

export const AddUser: FC<AddUserProps> = ({
  open = false,
  onClose,
}) => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [emergencyPhone, setEmergencyPhone] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>("Date of Birth");
  const [addressProofOne, setAddressProofOne] = useState<string>('');
  const [addressProofTwo, setAddressProofTwo] = useState<string>('');
  const [images, setImages] = useState<FileList>();
  const [createUserMutation] = useMutation(CREATE_USER_BY_ADMIN, {
    refetchQueries: ["GetUsers"],
  });
  const [result, setResult] = useState({ isSubmitted: false, message: "" });

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmergencyPhone('');
    setDateOfBirth("Date of Birth");
    setAddressProofOne('');
    setAddressProofTwo('');
    setImages(undefined);
  };

  const touched =
    firstName || lastName || phone || emergencyPhone || dateOfBirth != "Date of Birth";

  const isDisabled =
    !firstName ||
    !lastName ||
    !phone ||
    !emergencyPhone ||
    !dateOfBirth ||
    dateOfBirth === "Date of Birth" ||
    !touched ||
    (images && images.length > 0 ? !isUploaded : false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setResult({
      isSubmitted: false,
      message: "",
    });
    event.preventDefault();
    if (!phone?.includes('+') || !emergencyPhone?.includes('+')) {
      setResult({
        isSubmitted: false,
        message:
          "Please provide phone/emergency phone with extension.",
      });
      return;
    }
    if (phone?.includes(emergencyPhone)) {
      setResult({
        isSubmitted: false,
        message:
          "Emergency phone number cannot be same as your phone number. Please provide a different contact number.",
      });
      return;
    }
    createUserMutation({
      variables: {
        userByAdminInput: {
          firstName: firstName,
          lastName: lastName,
          dateOfBirth: dateOfBirth,
          phoneNo: phone,
          emergencyPhoneNo: emergencyPhone,
          addressProofOne: addressProofOne,
          addressProofTwo: addressProofTwo,
          createdBy: currentUser?.profileInfo?.id
        },
      },
      onCompleted: (data: any) => {
        if (data?.createUserByAdmin) {
          console.log("User is created");
          setLoading(false);
          onClose();
        }
      },
      onError: (error: any) => {
        console.log(error);
        setLoading(false);
        setResult({
          isSubmitted: false,
          message:
            "Error while processing this request, please try again after sometime.",
        });
      },
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (files.length > 2) {
        alert("You can not upload more than two documents.");
        return;
      } else {
        setImages(files);
      }
    }
  };

  const uploadImages = () => {
    setUploading(true);
    if (images && images.length > 0) {
      const path = `proofs/${phone}-AddressProofOne`;
      const storageRef = ref(storage, path);

      const uploadTask = uploadBytesResumable(storageRef, images[0]);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("Uploading...");
        },
        (error) => {
          alert(
            "Error while uploading image. Please try again after sometime."
          );
          console.log(error);
          setUploading(false);
          return false;
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            setAddressProofOne(downloadURL);
            if (images && images.length > 1) {
              const path = `proofs/${phone}-AddressProofTwo`;
              const storageRef = ref(storage, path);

              const uploadTask = uploadBytesResumable(storageRef, images[1]);

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
                  setUploading(false);
                  return false;
                },
                () => {
                  getDownloadURL(uploadTask.snapshot.ref).then(
                    async (downloadURL) => {
                      setAddressProofTwo(downloadURL);
                      setIsUploaded(true);
                    }
                  );
                }
              );
            } else {
              setIsUploaded(true);
            }
          });
        }
      );
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={dialogHeaderStyles}>Profile Settings</DialogTitle>
      <Box>
        <DialogContent sx={dialogContentStyles}>
          {result && result.message && (
            <Typography
              color={result.isSubmitted ? "#4F0336" : "red"}
              mb={2}
              fontSize={12}
            >
              {result.message}
            </Typography>
          )}
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="First Name*"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                fullWidth
              />
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Last Name*"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                fullWidth
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Phone No*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
              />
              <TextField
                type="tel"
                variant="outlined"
                color="secondary"
                label="Emergency Phone No*"
                onChange={(e) => setEmergencyPhone(e.target.value)}
                value={emergencyPhone}
                fullWidth
              />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
              <TextField
                type="date"
                variant="outlined"
                color="secondary"
                onChange={(e) => setDateOfBirth(e.target.value)}
                value={dateOfBirth}
                fullWidth
                label="Date of Birth"
              />
            </Stack>

            {addressProofOne || addressProofTwo ? (
              <Stack
                spacing={2}
                sx={{ marginBottom: 2 }}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <label style={{ fontSize: 12 }}>Address Proof(s)</label>
                {addressProofOne && (
                  <a
                    href={addressProofOne}
                    target="_blank"
                    style={{
                      color: "#4F0336",
                      marginTop: 0,
                      paddingLeft: 8,
                      fontSize: 12,
                    }}
                  >
                    View
                  </a>
                )}
                {addressProofTwo && (
                  <a
                    href={addressProofTwo}
                    target="_blank"
                    style={{
                      color: "#4F0336",
                      marginTop: 0,
                      paddingLeft: 8,
                      fontSize: 12,
                    }}
                  >
                    View
                  </a>
                )}
              </Stack>
            ) : (
              <Stack spacing={1} sx={{ marginBottom: 2 }}>
                <label>Upload Address Proof(s)(Max 2)</label>
                <input
                  accept="image/*"
                  id="image-upload"
                  type="file"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  multiple
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
                <span>
                  {images
                    ? `${images[0]?.name || ""}, ${images[1]?.name || ""}`
                    : "No file chosen"}
                </span>
                <Button
                  disabled={
                    isUploaded || !images || images.length === 0 || uploading
                  }
                  size="medium"
                  sx={dialogSubmitActionStyles}
                  onClick={() => setImages(undefined)}
                >
                  <span>Remove</span>
                </Button>
                <Button
                  disabled={
                    isUploaded || !images || images.length === 0 || uploading
                  }
                  size="medium"
                  sx={dialogSubmitActionStyles}
                  onClick={uploadImages}
                >
                  {isUploaded ? (
                    <>
                      <span style={{ color: "#4F0336" }}>Uploaded</span>
                      <DownloadDoneIcon style={{ color: "#4F0336" }} />
                    </>
                  ) : (
                    <>
                      {uploading ? (
                        <Spinner />
                      ) : (
                        <>
                          <span>Upload</span>
                        </>
                      )}
                    </>
                  )}
                </Button>
              </Stack>
            )}
            <DialogActions sx={dialogActionsStyles}>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <Button
                    onClick={() => {
                      resetForm();
                      onClose();
                    }}
                    size="small"
                    sx={dialogCancelActionStyles}
                  >
                    Cancel
                  </Button>
                  <Button
                    disabled={isDisabled}
                    type="submit"
                    size="small"
                    sx={dialogSubmitActionStyles}
                  >
                    Save
                  </Button>
                </>
              )}
            </DialogActions>
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
