import React from 'react';
import { SuperHeroInterface } from '../interface/superhero-interface';

type HeroList = {
    heroes: SuperHeroInterface[];
};

const PainelHero: React.FC<HeroList> = ({ heroes }) => {
    return (
        <ul>
            {heroes.map((hero) => (
                <li key={hero.id}>
                    {hero.name}
                </li>
            ))}
        </ul>
    );
};

export default PainelHero;
