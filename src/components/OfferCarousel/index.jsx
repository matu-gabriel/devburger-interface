import { useEffect, useState } from "react";
import {
  Container,
  ContainerItems,
  Image,
  PriceOffer,
  Description,
  Button,
  Teste,
} from "./style";
import Carousel from "react-elastic-carousel";
import api from "../../services/api";
import formatedCurrency from "../../utils/formatedCurrency";

const OfferCarousel = () => {
  const [offers, setoffers] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get("/products");
      const offerFilter = data
        .filter((filtered) => filtered.offer)
        .map((formatCurrency) => {
          return {
            ...formatCurrency,
            formatedPrice: formatedCurrency(formatCurrency.price),
          };
        });
      setoffers(offerFilter);
    };
    loadCategories();
  }, []);

  console.log(offers);

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <Container>
      <h1>OFERTAS DO DIA</h1>
      <Carousel itemsToShow={4} breakPoints={breakpoints}>
        {offers &&
          offers.map((offer) => (
            <ContainerItems key={offer.id}>
              <Image src={offer.url} />
              <h2>{offer.name}</h2>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                odio facilis ratione dignissimos voluptas quisquam ea velit
              </Description>
              <Teste>
                <PriceOffer>{offer.formatedPrice}</PriceOffer>
                <Button>Peça agora</Button>
              </Teste>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
};

export default OfferCarousel;