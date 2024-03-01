import React from 'react';
import { Box, Avatar, Typography, Card, CardContent, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Button } from '@mui/material';
import { parentBoxStyles } from '../../styles/box';
import { ExpandLess, ExpandMore, Diamond } from '@mui/icons-material';
import { AccountTable } from '../../components/accountsetting';
import { buttonStyles } from '../../styles/button';

interface Scheme {
  id: number;
  name: string;
}

const schemes: Scheme[] = [
  { id: 1, name: 'Scheme 1' },
  { id: 2, name: 'Scheme 2' },
  { id: 3, name: 'Scheme 3' },
  // Add more schemes as needed
];

export const AccountSetting = () => {
  const items = [
    { item: 'Account Number', description: 'A0010' },
    { item: 'Months Saved', description: '15' },
    { item: 'Main Account Balance', description: '€ 1500' },
    { item: 'Bonus Balance', description: '€ 100' },
    { item: 'Redeemable Balance', description: '€ 1600' },
  ];

  const [openScheme, setOpenScheme] = React.useState<number | null>(null);

  const handleClick = (schemeId: number) => {
    setOpenScheme((prevScheme) => (prevScheme === schemeId ? null : schemeId));
  };


  return (
    <Box pt={7}>
      <Box sx={parentBoxStyles}>
        <Box sx={{ display: 'flex', paddingRight: '50%', backgroundColor: "F2EEE5" }}>
          <Avatar
            alt="Profile Picture"
            src={require("../../images/profile.png")}
            sx={{ width: 80, height: 80, mb: 2 }}
          />
          <Box sx={{ display: "flex", flexDirection: "column", padding: "12px" }}>
            <Typography
              variant="body2"
              color="#777777"
              sx={{ fontFamily: "Roboto", fontSize: 15, fontWeight: "bold" }}
            >
              Hello,
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              sx={{ fontFamily: "Roboto", fontSize: 20, fontWeight: "bold" }}
            >
              Amaara
            </Typography>
          </Box>
        </Box>

        <Box textAlign={'left'} width={'100%'}>
          <Typography
            variant="body1"
            color="#777777"
            sx={{ display: "flex", paddingTop: "20px", flexDirection: "column" }}
          >
            Account Details
          </Typography>
        </Box>

        <Card sx={{ marginTop: 2, width: '100%', borderRadius: '20px', border: '1px solid #4f0336' }}>
          <CardContent sx={{}} >
            <List>
              {items.map((data, index) => (
                <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography
                    variant="body2"
                    color="#777777"
                    sx={{ fontFamily: "Roboto", fontSize: 14, fontWeight: "regular" }}
                  >
                    {data.item}:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="black"
                    sx={{ fontFamily: "Roboto", fontSize: 16, fontWeight: "medium" }}
                  >
                    {data.description}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>

        <Box textAlign={'left'} width={'100%'}>
          <Typography
            variant="body1"
            color="#777777"
            sx={{ display: "flex", paddingTop: "20px", flexDirection: "column" }}
          >
            Account Statement
          </Typography>
        </Box>

        {schemes.map((scheme) => (
          <Box key={scheme.id} sx={{ marginTop: 2, width: '100%', borderRadius: '20px', color: '#4f0336', border: '1px solid #4f0336' }}>
            <ListItemButton onClick={() => handleClick(scheme.id)}>
              <ListItemIcon>
                <Diamond sx={{ color: '#4f0336' }} />
              </ListItemIcon>
              <ListItemText primary={scheme.name} />
              {openScheme === scheme.id ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            {openScheme === scheme.id && (
              <Box>
                <AccountTable schemeId={scheme.id} />
                <Box sx={{ display: 'flex', m: 3, justifyContent: 'center' }}>
                  <Button sx={{ ...buttonStyles, minWidth: '4 0%' }}> Pay</Button>
                </Box>
              </Box>
            )}

          </Box>
        ))}
      </Box>
    </Box>
  );
};