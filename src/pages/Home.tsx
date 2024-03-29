import { useGetRestaurantsQuery } from "../services/api";

import styled from "styled-components";

import HomeCard from "../components/HomeCard";
import Header from "../components/Header";

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 40px 80px;
  padding-inline: 2rem;

  margin-bottom: 120px;

  > * {
    min-width: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, auto);
    place-content: center;
  }
`;

export type Cardapio = {
  foto: string;
  id: number;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  avaliacao: number;
  capa: string;
  descricao: string;
  tipo: string;
  cardapio: Cardapio[];
};

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery();

  if (restaurants) {
    return (
      <>
        <Header />
        <CardList className="container">
          {restaurants.map((restaurant) => (
            <HomeCard key={restaurant.id} {...restaurant} />
          ))}
        </CardList>
      </>
    );
  } else {
    return <h4>Carregando...</h4>;
  }
};

export default Home;
