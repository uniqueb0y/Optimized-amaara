import { useState, ChangeEvent, FormEvent, FC } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { buttonStyles } from "../../styles/button";
import { parentBoxStyles } from "../../styles/box";
import { Spinner } from "../spinner";

interface BillingFormProps {
  schemeData: { amount: number; monthChecked: [] };
}

export const BillingForm: FC<BillingFormProps> = ({ schemeData }) => {
  const amount = schemeData?.amount;
  const [loading, setLoading] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const isFormValid = Object.values(billingInfo).every(Boolean);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Scheme Data: ", schemeData);
    console.log("Billing form submitted:", billingInfo);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    alert("Payment Gateway is coming soon!");
    setBillingInfo({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zipCode: "",
    });
  };

  return (
    <Box sx={parentBoxStyles} style={{ backgroundImage: "none" }}>
      <Box sx={styled.borderBox}>
        <Typography variant="h6" sx={{ marginBottom: 2, color: "#4F0336" }}>
          {" "}
          Billing Information{" "}
        </Typography>
        <Box sx={{ margin: "inherit" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="firstName"
              value={billingInfo.firstName}
              onChange={handleInputChange}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="lastName"
              value={billingInfo.lastName}
              onChange={handleInputChange}
            />
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              margin="normal"
              name="address"
              value={billingInfo.address}
              onChange={handleInputChange}
            />
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              margin="normal"
              name="city"
              value={billingInfo.city}
              onChange={handleInputChange}
            />
            <TextField
              label="Zip Code"
              variant="outlined"
              fullWidth
              margin="normal"
              name="zipCode"
              value={billingInfo.zipCode}
              onChange={handleInputChange}
            />
            <Box mt={0}>
              <Button
                type="submit"
                sx={[
                  buttonStyles,
                  {
                    width: {
                      xs: "100%",
                      "&.Mui-disabled": {
                        background: "#cccccc",
                      },
                    },
                  },
                ]}
                disabled={!isFormValid}
              >
                {loading ? (
                  <Typography>
                    <Spinner />
                  </Typography>
                ) : (
                  <Typography textTransform='none'>Pay Amount: £{amount}</Typography>
                )}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

const styled = {
  borderBox: {
    border: "2px solid #CBAB58",
    borderRadius: "15px",
    margin: "8px 40px",
    textAlign: "center",
    width: "100%",
    py: 2,
  },
};
