import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Box, Typography, TextField } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { commonTextFieldStyle } from "../../styles/text-field";
import { buttonStyles } from "../../styles/button";
import { parentBoxStyles } from "../../styles/box";
import { Spinner } from "../../components/spinner";
import { useMutation } from "@apollo/client";
import { CREATE_CONTACT_US } from "../../gql/contact-us";

export const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [createContactUsMutation] = useMutation(CREATE_CONTACT_US);

  const [contactUsInfo, setContactUsInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [result, setResult] = useState({ isSubmitted: false, message: '' });

  const isFormValid = Object.values(contactUsInfo).every(Boolean);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactUsInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    createContactUsMutation({
      variables: {
        contactUsInput: {
          ...contactUsInfo,
        },
      },
      onCompleted: (data: any) => {
        if (data?.createContactUs?.isSuccess) {
          setResult({
            isSubmitted: true,
            message: "Thanks for contacting us. We'll get back to you soon!",
          });
          setContactUsInfo({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          })
          setLoading(false);
        }
        else {
          setResult({
            isSubmitted: true,
            message: "We are facing some issue. Please try again after sometime.",
          });
          document.forms[0]?.reset();
          setLoading(false);
        }
      },
      onError: (error: any) => {
        console.log(error);
        setResult({
          isSubmitted: false,
          message:
            "We are facing some issue. Please try again after sometime.",
        });
        setLoading(false);
      },
    });
  };

  return (
    <Box pt={8}>
      <Box sx={parentBoxStyles} style={{ backgroundImage: "none" }}>
        <Box style={{ width: "100%", textAlign: "center" }}>
          <Box>
            <Typography
              variant="h1"
              fontSize={40}
              fontFamily={"ABC Gravity"}
              fontWeight={700}
              color="#4f0336"
              sx={{ pb: 2 }}
            >
              Get in Touch
            </Typography>
            <Typography variant="body2" fontSize="12px" color="black" mb={1}>
              For inquiries about our products or services
            </Typography>
          </Box>
          {result && result.message && <Typography color={result.isSubmitted ? 'primary' : 'red'} margin={2}>{result.message}</Typography>}
          <form onSubmit={handleSubmit} id="contact-us-form">
            <TextField
              label="First Name"
              variant="outlined"
              name="firstName"
              fullWidth
              sx={[commonTextFieldStyle, { mt: 1, mb: 0 }]}
              value={contactUsInfo.firstName}
              onChange={handleInputChange}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              name="lastName"
              fullWidth
              sx={[commonTextFieldStyle, { mt: 1, mb: 0 }]}
              value={contactUsInfo.lastName}
              onChange={handleInputChange}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              name="email"
              fullWidth
              sx={[commonTextFieldStyle, { mt: 1, mb: 0 }]}
              value={contactUsInfo.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              name="phone"
              fullWidth
              sx={[commonTextFieldStyle, { mt: 1, mb: 0 }]}
              type="numeric"
              value={contactUsInfo.phone}
              onChange={handleInputChange}
            />
            <TextField
              label="Additional Information"
              variant="outlined"
              name="message"
              fullWidth
              multiline
              rows={6}
              sx={[commonTextFieldStyle, { mt: 1, mb: 0 }]}
              value={contactUsInfo.message}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={!isFormValid}
              sx={[
                buttonStyles,
                {
                  width: {
                    xs: "100%",
                    "&.Mui-disabled": {
                      background: "#cccccc",
                    },
                  },
                  mt: 1,
                },
              ]}
            >
              {loading ? (
                <Typography>
                  <Spinner />
                </Typography>
              ) : (
                <Typography textTransform='none'>Get in touch</Typography>
              )}
            </Button>
          </form>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <PhoneIcon sx={{ color: "primary.main", marginRight: "8px" }} />
            <Typography
              variant="subtitle2"
              color="black"
              fontWeight="semibold"
              fontSize="16px"
            >
              +44 7448994451
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 1,
            }}
          >
            <LocationOnIcon sx={{ color: "primary.main", marginRight: "8px" }} />
            <Typography
              variant="subtitle2"
              color="black"
              fontWeight="semibold"
              fontSize="16px"
            >
              15 Ealing Road, Wembley HA0 4AA
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
