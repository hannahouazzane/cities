import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Image from "next/image";

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 50px;
  line-height: 0.2;
`;

export const Subtitle = styled.h2`
  text-align: center;
  color: white;
  font-size: 20px;
  line-height: 2;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-right: auto;
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
    image: "/rome.jpeg",
    description: "A lot of history!",
  },
];

export const HomePage = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid item md={2}>
          <Logo src={"logo .png"} />
        </Grid>

        <Grid item md={8}>
          <Paper>
            <br></br>
            <Title> Cities To Visit Across The World</Title>
            <Subtitle> Find your ideal destination</Subtitle>
          </Paper>
        </Grid>

        <Grid item md={2}></Grid>
      </Grid>

      <div>
        <Grid container spacing={3}>
          {cities.map((city) => (
            <Grid item md={4} key={city.id}>
              <Paper>
                <h2>{city.name}</h2>
              </Paper>
              <Paper>
                <Image
                  src={city.image}
                  width={500}
                  height={400}
                  alt={`image of ${city.name}`}
                />
              </Paper>

              <Paper>{city.description}</Paper>
              <Paper> </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
