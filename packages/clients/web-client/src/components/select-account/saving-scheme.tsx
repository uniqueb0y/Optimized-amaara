import { FC, useState, useEffect } from "react";
import {
    Box,
    Button,
    Checkbox,
    InputAdornment,
    List,
    ListItem,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { buttonStyles } from "../../styles/button";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { BillingForm } from "./billing-form";
import { parentBoxStyles } from "../../styles/box";

export const SavingScheme: FC<any> = ({ proceed }) => {
    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const navigate = useNavigate();
    const schemeBenefits = ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"];
    const [checked, setChecked] = useState(false);
    const currentMonth = new Date().getMonth();
    const monthsArr = [monthsArray[currentMonth], monthsArray[currentMonth + 1], monthsArray[currentMonth + 2]];
    const [monthChecked, setMonthChecked] = useState([monthsArr[0]]);
    const [amount, setAmount] = useState(100);
    const accounts = ['A00001', 'A00001-01'];
    const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
    const [schemeData, setSchemeData] = useState({ amount, monthChecked });

    const handleMonthCheck = (index: number) => {
        let updatedList: any = [];
        if (!monthChecked[index]) {
            for (let i = 0; i <= index; i++) {
                updatedList.push(monthsArr[i]);
            }
        } else {
            updatedList = [...monthChecked];
            for (let j = monthChecked.length; j >= index; j--) {
                updatedList.splice(j, 1);
            }
        }
        const amount = 100 * updatedList.length;
        setAmount(amount);
        setMonthChecked(updatedList);
        setSchemeData({ amount, monthChecked: updatedList });
    };

    useEffect(() => {
        if (!amount || !checked) {
            proceed(null, 'one', schemeData);
        }
    }, [amount, checked])

    return (
      <Box sx={parentBoxStyles} style={{ backgroundImage: "none" }}>
        <Box sx={styled.borderBox}>
          <Typography sx={{ fontSize: 18, color: "#4F0336" }}>
            Monthly Savings Scheme
          </Typography>
          <TextField
            select
            fullWidth
            size="small"
            value={selectedAccount}
            color="secondary"
            onChange={(e) => setSelectedAccount(e.target.value as string)}
            sx={{ p: 2 }}
          >
            {accounts.map((account: string, index: number) => {
              return (
                <MenuItem
                  value={account}
                  key={index}
                >{`Account: ${account}`}</MenuItem>
              );
            })}
          </TextField>
          <Typography sx={[styled.text, { px: "4px" }]} component="span">
            You can select upto 3 months:
          </Typography>
          <Box sx={[styled.flex, { flexDirection: "row" }]}>
            {monthsArr.map((month: string, index: number) => {
              return (
                <Box key={index}>
                  <Checkbox
                    checked={!!monthChecked[index]}
                    onChange={() => handleMonthCheck(index)}
                    sx={{ color: "#CBAB58" }}
                  />
                  <Typography sx={styled.text} component="span">
                    {month}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <TextField
            fullWidth
            disabled={true}
            size="small"
            value={`Amount: £${amount}`}
            sx={{
              p: 2,
              input: { textAlign: "center" },
              "& .MuiInputBase-input.Mui-disabled": {
                color: "#000000",
                WebkitTextFillColor: "#000000",
              },
            }}
            //   InputProps={{startAdornment: (
            //     <InputAdornment position="start">
            //       <CurrencyPoundIcon />
            //     </InputAdornment>
            // )}}
          ></TextField>
          <Box sx={styled.flex}>
            <CalendarMonthIcon sx={{ color: "#4F0336", fontSize: 18 }} />
            <Typography sx={[styled.text, { px: "4px" }]} component="span">
              Plan Duration:
            </Typography>
            <Typography
              sx={[styled.text, { color: "#4F0336" }]}
              component="span"
            >
              12 Months
            </Typography>
          </Box>
        </Box>
        <Box sx={styled.borderBox}>
          <Typography sx={{ fontSize: 18, color: "#4F0336" }}>
            Scheme Benefits
          </Typography>
          <Box sx={styled.flex}>
            <List>
              {schemeBenefits.map((benefit: string, index: number) => {
                return (
                  <ListItem key={index}>
                    <Box sx={styled.flex}>
                      <DoubleArrowIcon
                        sx={{ color: "#CBAB58", fontSize: 18 }}
                      />
                      <Typography component="span" sx={styled.text}>
                        {benefit}
                      </Typography>
                    </Box>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
        <Box
          sx={[styled.flex, { mb: 1, width: "100%", flexDirection: "column" }]}
        >
          <Box>
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
              sx={{ color: "#CBAB58" }}
            />
            <Typography sx={styled.text} component="span">
              I agree to{" "}
            </Typography>
            <Typography
              component="span"
              sx={[
                styled.text,
                {
                  color: "#4F0336",
                  cursor: "pointer",
                  textDecoration: "underline",
                },
              ]}
              onClick={() => navigate("/t&c")}
            >
              Terms and Condition
            </Typography>
          </Box>
          <Button
            sx={[
              buttonStyles,
              {
                width: {
                  xs: "100%",
                  "&.Mui-disabled": {
                    background: "#F2EEE5",
                  },
                },
              },
            ]}
            onClick={(event) => {
              event?.preventDefault();
              proceed(event, "two", schemeData);
            }}
            disabled={!amount || !checked}
          >
            Proceed
          </Button>
        </Box>
      </Box>
    );
};

const styled = {
    flex: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    borderBox: {
        border: "2px solid #CBAB58",
        borderRadius: "15px",
        margin: "8px 40px",
        textAlign: "center",
        width: "100%",
        py: 2,
    },
    text: {
        fontSize: 14,
        color: "#777777",
    },
};


