import React, { useState } from 'react';
import { SuperHeroInterface } from '../../../interface/superhero-interface';
import ModalHero from '../atom/modal';

type HeroList = {
  heroes: SuperHeroInterface[];
};

const PainelHero: React.FC<HeroList> = ({ heroes }) => {
  const [selectedItem, setSelectedItem] = useState<SuperHeroInterface | null>(null);
  const [secondSelectedItem, setSecondSelectedItem] = useState<SuperHeroInterface | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: SuperHeroInterface) => {
    if (!selectedItem) {
      setSelectedItem(item);
    } else if (!secondSelectedItem) {
      setSecondSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedItem(null);
    setSecondSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <ModalHero
          selectedItem={selectedItem}
          secondSelectedItem={secondSelectedItem}
          closeModal={closeModal}
        />
      )}
      <ul>
        {heroes.map((hero) => (
          <li key={hero.id} onClick={() => handleItemClick(hero)}>
            {hero.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PainelHero;
