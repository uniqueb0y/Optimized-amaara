import { Box } from "@mui/material";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Notification } from "./Notifiation";

export const NotificationCarousel: FC<any> = ({ notifications }) => {
    
  return (
    <Carousel autoPlay showThumbs={false} infiniteLoop interval={3000}>
      {notifications.map((item: any, index: number) => {
        return (
          <Notification notification={item} key={index} />
        );
      })}
    </Carousel>
  );
};
