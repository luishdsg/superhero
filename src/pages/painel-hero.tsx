import React, { useEffect, useState } from 'react';
import { SuperHeroesData } from '../services/getSuperHeroesData';
import { SuperHeroInterface } from '../interface/superhero-interface';

const PainelHero: React.FC = () => {
    const [heroes, setHeroes] = useState<SuperHeroInterface[]>([]);
    const [searchHero, setSearchHero] = useState<string>('');
    const [filteredHeroes, setFilteredHeroes] = useState<SuperHeroInterface[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await SuperHeroesData();
                setHeroes(result);
            } catch (error) {
                console.error('Erro:', error);
            }
        };

        fetchData();
    }, []);


    const onSearchHero = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchHero(term); 

        const filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(term));
        setFilteredHeroes(filteredHeroes);
    };
    const listFilterHero = searchHero ? filteredHeroes : heroes;
    return (
        <section className="row bg-dark p-4 text-light">
            <h1>Home Page</h1>
            <div>
                <h1>Lista de Heróis:</h1>
                <input
                    type="text"
                    value={searchHero}
                    onChange={onSearchHero}
                    placeholder="Search by name..."
                />
                <ul>
                    {listFilterHero.map((hero) => (
                        <li key={hero.id}>
                            {hero.name}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default PainelHero;
