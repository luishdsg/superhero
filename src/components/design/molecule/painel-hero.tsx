import React, { useState } from 'react';
import { SuperHeroInterface } from '../../../interface/superhero-interface';
import ModalHero from './modal';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { bebas, card, nameHero } from '../../styles/style';
type HeroList = {
  heroes: SuperHeroInterface[];
};

const PainelHero: React.FC<HeroList> = ({ heroes }) => {
  const [selectedHero, setSelectedHero] = useState<SuperHeroInterface | null>(null);
  const [secondSelectedHero, setSecondSelectedHero] = useState<SuperHeroInterface | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (hero: SuperHeroInterface) => {
    if (!selectedHero) {
      setSelectedHero(hero);
    } else if (!secondSelectedHero) {
      setSecondSelectedHero(hero);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedHero(null);
    setSecondSelectedHero(null);
    setIsModalOpen(false);
  };

  const [pageNumber, setPageNumber] = useState(0);
  const heroesPerPage = 40;

  const pageCount = Math.ceil(heroes.length / heroesPerPage);
  const handlePageClick = (data: { selected: number }) => {
    window.scrollTo(0, 0);
    setPageNumber(data.selected);
  };

  const superHeroes = heroes.slice(pageNumber * heroesPerPage, (pageNumber + 1) * heroesPerPage);
  const limitedHeroes = superHeroes.slice(0, 10);
  const limitedHeroes2 = superHeroes.slice(10, 20);
  const limitedHeroes3 = superHeroes.slice(20, 30);
  const limitedHeroes4 = superHeroes.slice(30, 40);
  return (
    <div className="px-0">

      <Box sx={{ margin: '6rem 0' }} className="row px-0 mx-2">

        <div className="col-3">
          <Card className="bg-transparent bs-none">
            {limitedHeroes.map((hero) => (
              <CardActionArea key={hero.id} onClick={() => handleItemClick(hero)}  >
                <CardMedia
                  sx={card}
                  component="img"
                  image={hero?.images?.lg}
                  alt="green iguana"
                />
                <Typography variant="h5" sx={{ ...nameHero, ...bebas, top: '-50px', }} component="div">
                  {hero.name}
                </Typography>
                <Typography sx={{
                  ...nameHero,
                  fontSize: '.4em',
                  top: '-60px',
                  maxWidth: '100px'
                }} className="d-inline-block text-truncate" component="div">
                  {hero?.connections?.relatives}
                </Typography>
              </CardActionArea>
            ))}
          </Card>
        </div>
        <div className="col-3">
          <Card className="bg-transparent bs-none">
            {limitedHeroes2.map((hero) => (
              <CardActionArea key={hero.id} onClick={() => handleItemClick(hero)} >
                <CardMedia
                  sx={card}
                  component="img"
                  image={hero?.images?.lg}
                  alt="green iguana"
                />
                <Typography variant="h5" sx={{ ...nameHero, ...bebas, top: '-50px', }} component="div">
                  {hero.name}
                </Typography>
                <Typography sx={{
                  ...nameHero,
                  fontSize: '.4em',
                  top: '-60px',
                  maxWidth: '100px'
                }} className="d-inline-block text-truncate" component="div">
                  {hero?.connections?.relatives}
                </Typography>
              </CardActionArea>
            ))}
          </Card>
        </div>
        <div className="col-3">
          <Card className="bg-transparent bs-none">
            {limitedHeroes3.map((hero) => (
              <CardActionArea key={hero.id} onClick={() => handleItemClick(hero)} >
                <CardMedia
                  sx={card}
                  component="img"
                  image={hero?.images?.lg}
                  alt="green iguana"
                />
                <Typography variant="h5" sx={{ ...nameHero, ...bebas, top: '-50px', }} component="div">
                  {hero.name}
                </Typography>
                <Typography sx={{
                  ...nameHero,
                  fontSize: '.4em',
                  top: '-60px',
                  maxWidth: '100px'
                }} className="d-inline-block text-truncate" component="div">
                  {hero?.connections?.relatives}
                </Typography>
              </CardActionArea>
            ))}
          </Card>
        </div>
        <div className="col-3">
          <Card className="bg-transparent bs-none">
            {limitedHeroes4.map((hero) => (
              <CardActionArea key={hero.id} onClick={() => handleItemClick(hero)} >
                <CardMedia
                  sx={card}
                  component="img"
                  image={hero?.images?.lg}
                  alt="green iguana"
                />
                <Typography variant="h5" sx={{ ...nameHero, ...bebas, top: '-50px', }} component="div">
                  {hero.name}
                </Typography>
                <Typography sx={{
                  ...nameHero,
                  fontSize: '.4em',
                  top: '-60px',
                  maxWidth: '100px'
                }} className="d-inline-block text-truncate" component="div">
                  {hero?.connections?.relatives}
                </Typography>
              </CardActionArea>
            ))}
          </Card>
        </div>

      </Box>

      <ReactPaginate
        previousLabel={<BsChevronLeft />}
        nextLabel={<BsChevronRight />}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        previousLinkClassName={'previous'}
        nextLinkClassName={'next'}
        disabledClassName={'disabled'}
      />

      {isModalOpen && (
        <ModalHero
          selectedHero={selectedHero}
          secondSelectedHero={secondSelectedHero}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default PainelHero;
