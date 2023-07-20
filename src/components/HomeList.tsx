import styled from "styled-components";
import HomeCard from "./HomeCard";

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 40px 80px;

  margin-bottom: 120px;
`;

const HomeList = () => (
  <CardList className="container">
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
    <HomeCard />
  </CardList>
);

export default HomeList;