import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { open } from "../store/cart";
import { RootReducer } from "../store";

import styled from "styled-components";

import logo from "../assets/images/logo.jpg";
import headerBg from "../assets/images/header-bg.jpg";

import { Restaurant } from "../pages/Home";
import { capitalizeWord } from "../utils";

const Head = styled.header`
  background-image: url("${headerBg}");

  text-align: center;
  margin-bottom: 80px;

  img {
    margin-inline: auto;
  }

  .title {
    padding: 40px 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > * {
      flex-basis: 100%;
    }

    h3:nth-child(1) {
      text-align: left;
    }

    h3:last-child {
      text-align: right;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      padding-block: 1rem;
    }
  }

  .banner {
    background-size: cover;

    width: 100%;
    height: 280px;

    text-align: left;

    position: relative;

    .container {
      z-index: 1;
      position: relative;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: white;
      font-size: 32px;

      p {
        font-weight: 100;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

// interface Props extends Restaurant { }

const CustomHeader = ({ titulo, tipo, capa }: Restaurant) => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const openCart = () => {
    if (items.length === 0) {
      return;
    }
    dispatch(open());
  };

  return (
    <Head>
      <div className="title">
        <h3>Restaurantes</h3>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <h3 onClick={openCart}>{items.length} produtos(s) no carrinho</h3>
      </div>
      <div className="banner" style={{ backgroundImage: `url(${capa})` }}>
        <div className="container">
          <p>{capitalizeWord(tipo)}</p>
          <h2>{titulo}</h2>
        </div>
      </div>
    </Head>
  );
};

export default CustomHeader;
