import React, { FC } from "react";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import { parentBoxStyles } from "../../styles/box";
import { useQuery } from "@apollo/client";
import { GET_RAFFLE } from "../../gql/raffle";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import { Loader } from "../../components/loader";
import { customBodyTextStyle } from "../../styles/card-text";

export const Raffle: FC = () => {
  const { data, loading } = useQuery(GET_RAFFLE);

  const rafflesData = data?.getRaffle;

  return (
    <Box pt={7}>
      <Box
        component="img"
        src="/raffle.jpg"
        alt="Raffle Winners"
        sx={{
          width: "100%",
          cursor: "pointer",
          height: { xs: '50vh', sm: '60vh', md: '75vh' },
        }}
      ></Box>
      <Box sx={parentBoxStyles} style={{ backgroundImage: "none" }}>
        <Typography
          variant="h1"
          fontSize={40}
          fontFamily={"ABC Gravity"}
          fontWeight={700}
          color="#4f0336"
          sx={{ pb: 2 }}
        >
          Meet Our Winners
        </Typography>
        <Typography sx={[customBodyTextStyle, { pb: 2 }]}>
          Welcome to our monthly raffle event! At
          Amaara, we believe in adding excitement to your month
          with our thrilling raffle draws. Every month, participants have the
          chance to win a fantastic prize. Simply visit our store and enter raffle for your
          opportunity to win big! With each entry, you're not just purchasing a
          ticket - you're investing in the excitement and anticipation of
          potentially being our lucky winner. Join us each month for your chance
          to win and experience the thrill of our raffle draw firsthand.
        </Typography>
        {loading ? (
          <Box mt={4}>
            <Loader />
          </Box>
        ) : (
          <>
            {rafflesData && rafflesData.length > 0 ? (
              <Grid container spacing={3}>
                {rafflesData?.map((raffle: any, index: number) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
                    <Card
                      sx={{
                        m: 1,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        //border: "1px solid #4f0336",
                        borderRadius: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "100%",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="100%"
                          image={raffle.image || "/male.svg"}
                          alt={`Raffle Winner ${index + 1}`}
                          style={{ padding: !raffle.image ? 16 : 0 }}
                        />
                        <Box
                          display={"flex"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                          py={2}
                          px={2}
                        >
                          <Box>
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontSize: 14,
                                color: "#4f0336",
                                fontWeight: 700,
                              }}
                            >
                              {raffle.winnerName}
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontSize: 12 }}
                            >
                              {`${raffle.month} ${raffle.year}`}
                            </Typography>
                          </Box>
                          <Box>
                            {raffle.link && (
                              <a href={raffle.link} target="_blank">
                                <ShortcutIcon
                                  style={{ fontSize: 24, color: "#4f0336" }}
                                />
                              </a>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                mt={2}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#4F0336",
                  }}
                >
                  No winners yet.
                </Typography>
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};
