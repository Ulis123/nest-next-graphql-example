import React, { createRef, useState } from "react";
import SlickSlider from "react-slick";
import { useApolloClient } from "@apollo/client";

import { Box, Fab, Typography, useTheme, Theme, Paper, SxProps, Chip } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { CustomNextLink as Link } from "components/common";
import { colors } from "config/globals";
import { ICategoriesQuery } from "graphql/__generated__/queries";
import { GET_CATEGORIES } from "graphql/gql/queries";

const chip: SxProps<Theme> = {
  bgcolor: "common.white",
  color: colors.sliderCardBg,
  borderRadius: "4px",
  fontSize: 15,
  fontWeight: 500,
};

const slide: SxProps<Theme> = {
  position: "relative",
  height: "360px",
  width: "272px",
  transition: "0.4s",
  margin: "25px 5px",
  bgcolor: colors.sliderCardBg,
  boxShadow: "0 3px 10px rgba(0,0,0, 0.2)",
  "&:hover": {
    boxShadow: "0 4px 12px rgba(42,65,232, 0.25)",
    transform: "translateY(-10px)",
  },
};

const PureSliderCategoriesHome = () => {
  const theme = useTheme();

  const client = useApolloClient();
  const data = client.readQuery<ICategoriesQuery>({ query: GET_CATEGORIES });

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slickRef = createRef<SlickSlider>();

  const handleNextSlide = () => {
    slickRef.current?.slickNext();
  };
  const handlePreviousSlide = () => {
    slickRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    focusOnSelect: true,
    afterChange: (currentSlide: number) => {
      setCurrentSlide(currentSlide);
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (!data) return null;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: "60px 0 30px 0" }}>
        <Typography variant="h6">Featured Categories</Typography>

        <div>
          <Fab
            sx={{ borderRadius: "4px", mr: "20px" }}
            color="primary"
            size="medium"
            title="Slide Back"
            onClick={handlePreviousSlide}
            disabled={currentSlide === data.categories.indexOf(data.categories[0])}
          >
            <KeyboardArrowLeftIcon />
          </Fab>
          <Fab
            sx={{ borderRadius: "4px" }}
            color="primary"
            size="medium"
            title="Slide Forward"
            onClick={handleNextSlide}
            disabled={currentSlide >= data.categories.indexOf(data.categories[data.categories.length - 1])}
          >
            <KeyboardArrowRightIcon />
          </Fab>
        </div>
      </Box>

      {/*// @ts-ignore*/}
      <SlickSlider ref={slickRef} {...settings}>
        {data.categories.map(el => {
          return (
            <Link key={el.id} href={{ /*pathname: "/search-results",*/ query: { categories: el.name } }}>
              <Paper
                sx={[
                  slide,
                  {
                    backgroundImage: el.picture ? `url(${el.picture})` : "none",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  },
                ]}
              >
                <Box sx={{ position: "absolute", bottom: "30px", left: "30px" }}>
                  <Typography color="common.white" sx={{ fontSize: 20 }} gutterBottom>
                    {el.name}
                  </Typography>
                  <Chip label="47 Experts" sx={chip} />
                </Box>
              </Paper>
            </Link>
          );
        })}
      </SlickSlider>
    </>
  );
};

export default PureSliderCategoriesHome;
