import { FC, useState, SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { SavingScheme, BillingForm } from "../../components/select-account";

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

const TabPanel: FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export const OpenAccount: FC = () => {
  const [value, setValue] = useState("one");
  const [openBillingForm, setOpenBillingForm] = useState(false);
  const [schemeData, setSchemeData] = useState<{
    amount: number;
    monthChecked: [];
  }>({ amount: 0, monthChecked: [] });

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    if (openBillingForm) {
      setValue(newValue);
    } else {
      setValue("one");
    }
  };

  return (
    <Box pt={7} pb={3}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
        centered
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          p: 1,
          "& .MuiTabs-indicator": { backgroundColor: "#cbab58" },
          "& .MuiTab-root": {
            "&.Mui-selected": {
              color: "#cbab58",
            },
            "&:not(.Mui-selected)": {
              color: "#808080",
            },
          },
        }}
      >
        <Tab value="one" label="Saving Scheme" />
        <Tab value="two" label="Billing Form" />
      </Tabs>
      <TabPanel value={value} index="one">
        <SavingScheme
          proceed={(event: any, tab: string, data: any) => {
            event?.preventDefault();
            setSchemeData({ ...data });
            setOpenBillingForm(true);
            if (tab === "one") {
              setOpenBillingForm(false);
            }
            handleChange(event, "two");
          }}
        />
      </TabPanel>
      <TabPanel value={value} index="two">
        <BillingForm schemeData={schemeData} />
      </TabPanel>
    </Box>
  );
};
