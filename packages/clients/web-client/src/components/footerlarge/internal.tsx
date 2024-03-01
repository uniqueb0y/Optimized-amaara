import { Box, List, ListItem, Avatar, ListItemText, Button, Typography, Icon } from "@mui/material";
import { buttonStyles } from "../../styles/button";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter, LinkedIn }  from "@mui/icons-material";
export const LargeScreenFooterComponent = () => {
  const navigate = useNavigate();
    const icons = [
      { src: Facebook, alt: 'Facebook', link: 'https://www.facebook.com/dockdevelopers' },
      { src: Instagram, alt: 'Instagram', link: 'https://www.instagram.com/dockdevelopers' },
      { src: Twitter, alt: 'Twitter', link: 'https://twitter.com/dockdevelopers' },
      { src: LinkedIn, alt: 'LinkedIn', link: 'https://www.linkedin.com/company/dockdevelopers' },
    ];
    const listItems = [
      { src: '/Clock.svg', alt: 'SVG 1', text: 'Operating Hours', link: '/operting-hours' },
      { src: '/Loc.svg', alt: 'SVG 2', text: 'Store Locations', link: '/store-locations' },
      { src: '/Term.svg', alt: 'SVG 3', text: 'Terms and Conditions', link: '/t&c' },
    ];
  
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#f2eee5",
          width: "100vw",
          paddingX: 4,
          paddingY: 8
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={require('../../images/amaaraOriginal.png')}
            alt="Image Alt Text"
            style={{ width: "20em", height: "10em", marginBottom: "8px" }}
          />

          <List
            sx={{
              display: "flex",
              flexDirection: "row",
              marginTop: "8px",
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {icons.map((icon, index) => (
              <ListItem key={index} onClick={() => window.location.href = icon.link} sx={{ cursor: 'pointer', paddingX: 1 }}>
                <icon.src style={{ color: "#4F0336", fontSize: 22 }} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <List>
            {listItems.map((item, index) => (
              <ListItem key={index} sx={{ lineHeight: "1.2", cursor: 'pointer' }} onClick={() => navigate(item.link)}>
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{ width: "30px", height: "30px", marginRight: "8px" }}
                />
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    variant: "body2",
                    fontSize: "14px",
                    color: "#4F0336",
                  }}
                  sx={{ marginLeft: "8px" }}
                />
              </ListItem>
            ))}
          </List>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <Button variant="contained" color="primary" sx={[buttonStyles, { paddingX: 2}]} size="small" onClick={() => navigate('/contact-us')}>
              <Typography style={{ textTransform: "none", fontSize: 12 }} component={'span'}>
                Contact Us
              </Typography>
            </Button>
            <Button variant="contained" color="primary" sx={[buttonStyles, { paddingX: 2}]} size="small" onClick={() => navigate('/about-us')}>
              <Typography style={{ textTransform: "none", fontSize: 12 }} component={'span'}>
                About Us
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };