import { useState, useEffect } from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/firebase";
import { v4 as uuid } from "uuid";
import { useMutation } from "@apollo/client";
import { UPDATE_USER_INFO } from "../../gql/user-info";
import { useAuth } from "../../contexts/AuthContext";
import { buttonStyles } from "../../styles/button";

export const ProfileSettings = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const returnUrl = searchParams.get("returnUrl");
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState({ isSubmitted: false, message: "" });
  const genders = ["Male", "Female"];
  const [img, setImg] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [updateUserProfileMutation, { loading }] =
    useMutation(UPDATE_USER_INFO);

  useEffect(() => {
    if (!currentUser) navigate("/login?returnUrl=/profile");
    else if (currentUser?.profileInfo?.userInfo) {
      const userInfo = currentUser?.profileInfo?.userInfo;
      setFirstName(userInfo?.firstName);
      setLastName(userInfo?.lastName);
      setDateOfBirth(userInfo?.dateOfBirth);
      setAddress(userInfo?.address);
    }
  }, [currentUser, navigate]);

  const handleSubmit: any = async (event: any) => {
    setProcessing(true);
    const userInfo = currentUser?.profileInfo?.userInfo;
    let { __typename, ...userInfoObj } = userInfo;
    userInfoObj = {
      ...userInfoObj,
      firstName,
      lastName,
      dateOfBirth,
      address,
    };
    if (img) {
      const storageRef = ref(storage, `users/${firstName}-${uuid()}`);
      const uploadTask = await uploadBytesResumable(storageRef, img);
      const downloadURL = await getDownloadURL(uploadTask.ref);
      userInfoObj.image = downloadURL;
    }
    updateUserProfileMutation({
      variables: {
        userInfoInput: {
          ...userInfoObj,
          isHost: true,
        },
      },
      onCompleted: (data) => {
        if (data.updateUserInfo) {
          setResult({
            isSubmitted: true,
            message: "Thanks for becoming host.",
          });
          setProcessing(false);
          if (returnUrl) {
            navigate(returnUrl);
            navigate(0);
            return;
          } else {
            navigate("/profile");
            navigate(0);
            return;
          }
        }
      },
      onError: (error) => {
        console.log(error);
        setResult({
          isSubmitted: false,
          message: "We are facing some issue. Please try again after sometime.",
        });
        setProcessing(false);
      },
    });
  };

  const formIsValid = () => {
    const isValid = firstName && lastName && dateOfBirth;
    return isValid;
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      style={{ backgroundColor: "white", borderRadius: 10, padding: 40 , paddingTop: 64 }}
    >
      <Typography margin={2} fontSize={24} fontWeight={"bold"}>
        Update your profile
      </Typography>
      {result && result.message && (
        <Typography color={result.isSubmitted ? "#4F0336" : "red"} margin={2}>
          {result.message}
        </Typography>
      )}
      <form autoComplete="off">
        <Box
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          gap={"1%"}
        >
          <Box sx={styled.inputBox}>
            <Typography style={styled.label}>Upload profile pic</Typography>
            <Button style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
              <TextField
                key="image"
                onChange={(event: any) => setImg(event.target.files[0])}
                name="image"
                type="file"
                style={{
                  width: "100%",
                  padding: 20,
                  borderColor: "#f5f5f5",
                }}
              />
            </Button>
          </Box>
          <Box sx={styled.inputBox}>
            <Typography style={styled.label}>First Name*</Typography>
            <TextField
              key="firstName"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              onBlur={(e) => {
                setFirstName(e.target.value);
              }}
              name="firstName"
              label="Enter your first name"
              fullWidth
              autoComplete="none"
              type="text"
              value={firstName}
              style={styled.textField}
            />
          </Box>
          <Box sx={styled.inputBox}>
            <Typography style={styled.label}>Last Name*</Typography>
            <TextField
              key="lastName"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              onBlur={(e) => {
                setLastName(e.target.value);
              }}
              name="lastName"
              label="Enter your last name"
              fullWidth
              autoComplete="none"
              type="text"
              value={lastName}
              style={styled.textField}
            />
          </Box>
          <Box sx={styled.inputBox}>
            <Typography style={styled.label}>Date of Birth*</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                onChange={(newValue: any) => {
                  setDateOfBirth(newValue.$d.toDateString());
                }}
                format="YYYY-MM-DD"
                name="DOB"
                label={dateOfBirth ? dateOfBirth : "YYYY-MM-DD"}
                sx={{
                  backgroundColor: "white",
                  width: '100%'
                }}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={styled.inputBox}>
            <Typography style={styled.label}>Address</Typography>
            <TextField
              key="address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              onBlur={(e) => {
                setAddress(e.target.value);
              }}
              name="address"
              label="Provide your current address"
              fullWidth
              autoComplete="none"
              type="text"
              value={address}
              style={styled.textField}
            />
          </Box>
        </Box>
        <Box>
          <Typography style={styled.label}>* fields are mandatory</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Button
            variant="contained"
            color="primary"
            disabled={!formIsValid()}
            sx={[buttonStyles, { width: "100%" }]}
            onClick={handleSubmit}
          >
            {!processing ? (
              <Typography fontSize={14}>Update</Typography>
            ) : (
              <Typography fontSize={14}>Updating...</Typography>
            )}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

const styled = {
  inputBox: {
    marginBottom: 2,
    flex: "100%",
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    color: "rgba(0, 0, 0, 0.6)",
  },
  textField: {
    width: "100%"
  }
};
