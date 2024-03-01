import { Box } from "@mui/material";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const TeaserCarousel: FC<any> = ({ images }) => {
  return (
    <Carousel  autoPlay showThumbs={true} infiniteLoop interval={3000} stopOnHover={false}>
      {images.map((item: any, index: number) => {
        return (
          <Box key={index}>
            <Box component="img" alt="Scheme Banner" src={item} />
            {/* <p className="legend"> Legend 1 </p> */}
          </Box>
        );
      })}
    </Carousel>
  );
};
