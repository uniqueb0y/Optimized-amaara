import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  MenuItem,
  Select,
} from "@mui/material";
import { otpTextFieldStyle, commonTextFieldStyle } from '../../styles/text-field';
import { buttonStyles } from "../../styles/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import EditIcon from "@mui/icons-material/Edit";
import { parentBoxStyles } from "../../styles/box";
import OtpInput from 'react-otp-input';

export const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const returnUrl = searchParams.get("returnUrl");
  const { currentUser, signInWithPhone } = useAuth();
  const [otpVerifier, setOtpVerifier] = useState<any>();
  const [otpSent, setOtpSent] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState({ isSubmitted: false, message: "" });
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const phoneExtensions = ["+44", "+91"];
  const [selectedExtension, setSelectedExtension] = useState(
    phoneExtensions[0]
  );

  useEffect(() => {
    if (currentUser) {
      if (returnUrl) navigate(returnUrl);
      else navigate("/");
    }
  }, [currentUser, navigate, returnUrl]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const logInWithPhone = async () => {
    setOtpSent(false);
    setResult({
      isSubmitted: false,
      message: "",
    });
    try {
      setProcessing(true);
      const otpVerifier = await signInWithPhone(
        selectedExtension + phoneNumber
      );
      setOtpVerifier(otpVerifier);
      setProcessing(false);
      setOtpSent(true);
      setMinutes(2);
      setSeconds(59);
    } catch (error) {
      setProcessing(false);
      console.error(error);
      setResult({
        isSubmitted: false,
        message: "Incorrect phone number",
      });
    }
  };

  const verifyOtp = async () => {
    try {
      setProcessing(true);
      await otpVerifier?.confirm(otp);
      setProcessing(false);
      setOtpSent(false);
      if (returnUrl) navigate(returnUrl);
      else navigate("/");
    } catch (error) {
      setProcessing(false);
      console.error(error);
      setResult({
        isSubmitted: false,
        message: "Wrong OTP entered",
      });
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");

    if (onlyNums.length <= 10) {
      setPhoneNumber(onlyNums);
    }
  };

  const phoneEndAdornment = otpSent
    ? {
        endAdornment: (
          <InputAdornment position="end">
            <EditIcon
              onClick={() => {
                setOtpSent(false);
                setProcessing(false);
              }}
            />
          </InputAdornment>
        ),
        startAdornment: (
          <InputAdornment position="start">
            <Select
              value={selectedExtension}
              onChange={(e) => {
                setSelectedExtension(e.target.value);
              }}
              fullWidth
              style={{ backgroundColor: "#F2EEE5" }}
              name={"PhoneExtension"}
              variant="standard"
              disableUnderline={true}
              disabled={processing || otpSent}
            >
              {phoneExtensions.map((extension, index) => {
                return (
                  <MenuItem key={index} value={extension}>
                    {extension}
                  </MenuItem>
                );
              })}
            </Select>
          </InputAdornment>
        ),
      }
    : {
        startAdornment: (
          <InputAdornment position="start">
            <Select
              value={selectedExtension}
              onChange={(e) => {
                setSelectedExtension(e.target.value);
              }}
              fullWidth
              // style={{ backgroundColor: "#F2EEE5", "&. Mui-disabled": { backgroundColor: 'red'} }}
              name={"PhoneExtension"}
              variant="standard"
              disableUnderline={true}
              disabled={processing || otpSent}
            >
              {phoneExtensions.map((extension, index) => {
                return (
                  <MenuItem key={index} value={extension}>
                    {extension}
                  </MenuItem>
                );
              })}
            </Select>
          </InputAdornment>
        ),
      };

  return (
    <Box pt={5} pb={3}>
      <div id="recaptcha-container"></div>
      <Box sx={parentBoxStyles}>
        <Box
          component="img"
          src={require("../../images/amaaraOriginal.png")}
          alt="login_logo"
          sx={{ width: "100%", height: "auto", maxWidth: "100%", padding: 6 }}
        />
        {result && result.message && (
          <Typography
            color={result.isSubmitted ? "#4F0336" : "red"}
            mt={2}
            fontSize={12}
          >
            {result.message}
          </Typography>
        )}
        <Box mt={1} sx={{ width: "100%" }}>
          <TextField
            placeholder="Enter Your Number"
            variant="outlined"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            sx={commonTextFieldStyle}
            disabled={processing || otpSent}
            InputProps={phoneEndAdornment}
            type="numeric"
            style={{ paddingLeft: 32, paddingRight: 32, width: "100%" }}
          />
        </Box>
        {otpSent && (
          <Box
            sx={{ display: "inline-flex", mt: 2, width: "100%", gap: 0, px: 4 }}
          >
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputStyle={{ ...otpTextFieldStyle }}
              containerStyle={{ justifyContent: "space-between" }}
              renderSeparator={<span></span>}
              inputType="tel"
            />
          </Box>
        )}
        <Box marginY={1}>
          {otpSent && (
            <Box>
              {seconds > 0 || minutes > 0 ? (
                <Typography color="#4F0336" fontSize={12}>
                  Resend OTP in: {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </Typography>
              ) : (
                <Typography color="#777777" fontSize={12}>
                  Didn't recieve code?{" "}
                  <Typography
                    component={"span"}
                    color="#4F0336"
                    fontSize={12}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => logInWithPhone()}
                  >
                    Resend OTP
                  </Typography>
                </Typography>
              )}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            px: 4,
            width: "100%",
          }}
        >
          {!otpSent ? (
            <Button
              variant="contained"
              color="primary"
              onClick={logInWithPhone}
              sx={[buttonStyles, { width: "100%" }]}
              disabled={!phoneNumber}
            >
              <Typography style={{ textTransform: "none" }}>
                {processing ? "Sending..." : "Send OTP"}
              </Typography>
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={verifyOtp}
              sx={[buttonStyles, { width: "100%" }]}
              disabled={!otp}
            >
              <Typography style={{ textTransform: "none" }}>
                {processing ? "Verifying..." : "Verify OTP"}
              </Typography>
            </Button>
          )}
        </Box>
        {/* <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body1" color="#777777">
            Don’t have an account?{' '}
            <Link href="#" color="#4F0336" sx={{ fontWeight: 'bold' }}>
              Signup
            </Link>
          </Typography>
        </Box> */}
        <Box mt={"12px"} width={"100%"} px={5}>
          <Typography fontSize={10}>Standard rates may apply*</Typography>
          <Typography fontSize={10}>
            By continuing, I agree to{" "}
            <Typography
              component={"span"}
              color="#4F0336"
              fontSize={10}
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => navigate("/t&c")}
            >
              Terms & Conditions
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
