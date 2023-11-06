import { SuperHeroInterface } from "../../../interface/superhero-interface";

const filterHeroes = (heroes: SuperHeroInterface[], searchHero: string): SuperHeroInterface[] => {
    return heroes.filter(hero => hero.name.toLowerCase().includes(searchHero.toLowerCase()));
};

export default filterHeroes;
