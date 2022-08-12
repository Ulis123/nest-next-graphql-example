import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { useApolloClient } from "@apollo/client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { addApolloState, initializeApollo } from "config/apolloClient";
import { Header, Footer, CustomNextLink as Link } from "components/common";
import { DialogLogIn, DialogJoinAsExpert } from "components/dialogs";
import { PureSliderCategoriesHome } from "components/sliders";
import { ISkillsQuery } from "graphql/__generated__/queries";
import { GET_CATEGORIES, GET_SKILLS, ME } from "graphql/gql/queries";
import { AppRoutes } from "types";

const Home: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const client = useApolloClient();
  const skillsData = client.readQuery<ISkillsQuery>({ query: GET_SKILLS });

  return (
    <>
      <Header />

      <Box sx={{ minHeight: "calc(100vh - 67px - 77px)" }}>
        <Container>
          <Box component="section" sx={{ py: "60px" }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
              <Box sx={{ flexBasis: { xs: "100%", md: "50%" } }}>
                <Typography variant="h4" paragraph>
                  Thousands of businesses trust our experts to turn their ideas into reality.
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Browse through thousands of top quality, verified experts through reviews, past projects or clients to
                  find the right talent to accelerate your business.
                </Typography>

                <Link href={{ pathname: AppRoutes.HOME }}>
                  <Button
                    // onClick={handleScrollToSearch}
                    variant="contained"
                    color="primary"
                    startIcon={<SearchIcon />}
                  >
                    Browse Experts
                  </Button>
                </Link>
                <Button /*onClick={() => setOpenHelpDialog(true)}*/ className="transparent-btn">Get Help</Button>
              </Box>
            </Stack>
          </Box>

          <Box component="section" sx={{ py: "60px" }}>
            <Typography style={{ width: "100%" }} variant="h6" component="h6" paragraph>
              Featured Skills
            </Typography>

            <Grid container>
              {skillsData?.skills.slice(0, 20).map(el => {
                return (
                  <Grid item key={el.name} xs={12} sm={6} md={3} sx={{ m: "5px 0" }}>
                    <Link href={{ pathname: AppRoutes.HOME, query: { skill: el.name } }}>{el.name}</Link>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>

        <Box component="section" sx={{ bgcolor: "common.white", py: "60px" }}>
          <Container>
            <PureSliderCategoriesHome />
          </Container>
        </Box>
      </Box>

      <Footer />

      <DialogLogIn />
      <DialogJoinAsExpert />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const apolloClient = initializeApollo();

  // const res = await fetch("http://localhost:3000/api/hello");
  // const data = await res.json();

  // return {
  //   props: { data },
  // };

  try {
    await apolloClient.query({ query: GET_CATEGORIES });
    await apolloClient.query({ query: GET_SKILLS });

    return addApolloState(apolloClient, {
      props: {},
    });
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default Home;
