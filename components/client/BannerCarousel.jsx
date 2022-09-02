import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import BlackButton from "../BlackButton";

const CarouselCard = ({ imageURL, title, description }) => {
  return (
    <Stack
      // sx={{ backgroundImage: `url(${imageURL})` }}
      justifyContent="flex-start"
      alignItems={"center"}
      direction="row"
      position="relative"
      width="100%"
      // className="flex justify-start items-center min-h-[700px] pl-[60px] min-w-[100vw]"
    >
      <Box width="100%" paddingTop="44%">
        <Image src={imageURL} alt="title" layout="fill" />
      </Box>
      <Box
        position="absolute"
        paddingLeft="30px"
        className="text-left max-w-[33%]"
      >
        <Typography variant="h2">{title} </Typography>
        <Box paddingY="20px">
          <Typography variant="subtitle1">{description}</Typography>
        </Box>
        <BlackButton title="MUA NGAY" />
      </Box>
    </Stack>
  );
};

export const BannerCarousel = () => {
  return (
    <Carousel autoPlay="true" showThumbs={false}>
      <div>
        <CarouselCard
          imageURL="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/YZY_FOAM_RNR_SAND_HP-ADULT-D_tcm337-926128.jpg"
          title="YZY FOAM RNR SAND"
          description="AUGUST 26 2022 - AVAILABLE THROUGH THE ADIDAS APP. DOWNLOAD, REGISTER, PARTICIPATE"
        />
      </div>

      <div>
        <CarouselCard
          imageURL="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/viVN/Images/originals-fw22-nmd_s1_coreblack-hp-mh-d_tcm337-922398.png"
          title="NMD_S1"
          description="AUGUST 26 2022 - AVAILABLE THROUGH THE ADIDAS APP. DOWNLOAD, REGISTER, PARTICIPATE"
        />
      </div>
    </Carousel>
  );
};
