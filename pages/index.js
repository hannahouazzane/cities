import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "../Components/styles.module.css";
import Image from "next/image";
import { Name } from "../Components/cityStyle";
import Link from "next/link";

import { Description } from "../Components/cityStyle";

/// how do you import the styles for a div that are in one docuement

export const Title = styled.h1`
  text-align: center;
  color: white;s
  font-size: 150px;
  line-height: 0.2;
`;

export const Heading = styled.div`
  align-items: center;
  background-color: teal;
`;

export const Subtitle = styled.h2`
  text-align: center;
  color: white;
  font-size: 30px;
  line-height: 2;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-right: auto;
`;

export const StyledLink = styled.div`
  color: white;
  background-color: teal;
  display: inline-block;
  width: 19.5%;
  text-align: center;
  line-height: 3;
`;

const LayoutCenter = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
`;

const cities = [
  {
    id: "LDN",
    name: "London",
    image: "/london.jpeg",
    description:
      "London is full of people who scowl at you if you look at them but there is also cool stuff so you know",
  },
  {
    id: "PRS",
    name: "Paris",
    image: "/paris.jpeg",
    description: "Beautiful city but probs less friendly than London even",
  },

  {
    id: "RME",
    name: "Rome",
    image: "/rome.jpg",
    description: "A lot of history!",
  },
];

export const HomePage = () => {
  return (
    <body>
      <Grid container spacing={0}>
        <Grid item md={12}>
          <Heading>
            <br></br>
            <Title> Cities To Visit Across The World</Title>
            <Subtitle> Find your ideal destination</Subtitle>
          </Heading>
        </Grid>
      </Grid>

      <div>
        <Grid container spacing={3}>
          {cities.map((city) => (
            <Grid item md={4} key={city.id}>
              <Paper>
                <Name> {city.name}</Name>
              </Paper>
              <Paper>
                <LayoutCenter>
                  <Image
                    src={city.image}
                    width={500}
                    height={400}
                    alt={`image of ${city.name}`}
                  />{" "}
                </LayoutCenter>
              </Paper>

              <Description>{city.description}</Description>

              <Paper>
                <LayoutCenter>
                  <StyledLink>
                    <a href="/about">About Us</a>
                  </StyledLink>
                </LayoutCenter>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </body>
  );
};

export default HomePage;
