import { RefreshRounded } from "@mui/icons-material";
import { Box, ListItemAvatar, Typography } from "@mui/material";
import { url } from "inspector";

export const LivePrice = () => {
  const commodities = [
    {
      name: "Gold per Gram",
      price: "£ 48.95",
      icon: "/gold.svg",
    },
    {
      name: "Gold Sovereign",
      price: "£ 48.95",
      icon: "/gold.svg",
    },
    {
      name: "Gold Britannia",
      price: "£ 48.95",
      icon: "/gold.svg",
    },
    {
      name: "Silver per Pound",
      price: "£ 48.95",
      icon: "/silver.svg",
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: "url('/liveGoldBg2.png')",
        backgroundSize: "cover",
        padding: 3,
        paddingBottom: 5,
        display: "flex",
        justifyContent: { xs: "center", sm: "flex-end" },
        marginBottom: { xs: 0, sm: 1 },
        flexDirection: 'column'
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={3}
      >
        <Box sx={{ display: { xs: "none", sm: "contents" } }}>
          <Box
            component="img"
            src="/promotion1.png"
            alt="current rates banner"
            sx={{ width: { xs: "100%", sm: "50%" }, cursor: "pointer" }}
          ></Box>
        </Box>
        <Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            paddingX={3}
            paddingBottom={1}
            alignItems={"center"}
          >
            <Typography sx={headerStyled}>
              Live Price
            </Typography>
            <RefreshRounded sx={headerStyled} />
          </Box>
          <Box
            sx={{
              border: "1px solid white",
              borderRadius: 3,
              padding: 2,
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              borderBottom="1px solid white"
              paddingBottom={1}
              paddingLeft={0}
              marginX={0}
            >
              <Typography sx={nameStyled}>
                Commodity
              </Typography>
              <Typography sx={nameStyled} mr={"0"}>
                Current Rate
              </Typography>
            </Box>
            <Box mt={3}>
              {commodities &&
                commodities.map((item, index) => {
                  return (
                    <Box
                      key={index}
                      mt={1}
                      sx={[
                        flexStyled,
                        nameBoxStyled,
                        { gap: { xs: 12, sm: 8, lg: 20 } },
                      ]}
                    >
                      <Box sx={flexStyled} gap={2}>
                        <Box component="img" src={item.icon} alt="image" sx={{ height: { xs: 15, sm: 25 }}} />
                        <Box>
                          <Typography sx={nameStyled}>{item.name}</Typography>
                        </Box>
                      </Box>
                      <Box sx={nameStyled}>{item.price}</Box>
                    </Box>
                  );
                })}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "contents", sm: "none" } }}>
          <Box
            component="img"
            src="/promotion1.png"
            alt="current rates banner"
            sx={{ width: { xs: "100%", sm: "50%" }, mt: 3 }}
          ></Box>
        </Box>
    </Box>
  );
};

const flexStyled = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};
const nameBoxStyled = {
  paddingX: 0,
  gap: 5,
};
const nameStyled = {
  fontSize: { xs: 14, sm: 18, lg: 22 },
  color: "white",
};
const headerStyled = {
  fontSize: { xs: 18, sm: 22, lg: 24 },
  color: "white",
};