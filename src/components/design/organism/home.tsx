import React, { ChangeEvent, useEffect, useState } from 'react';
import NavBar from '../molecule/navbar';
import PainelHero from '../molecule/painel-hero';
import { SuperHeroInterface } from '../../../interface/superhero-interface';
import { SuperHeroesData } from '../../../services/getSuperHeroesData';
import filterHeroes from '../atom/filterHeroes';
import Footer from '../molecule/footer';

const Home: React.FC = () => {
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

    const onSearchHero = (event: ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchHero(term);
        const filtered = filterHeroes(heroes, term);
        setFilteredHeroes(filtered);
    };
    const displayedHeroes = searchHero ? filteredHeroes : heroes;

    return (
        <section className="row px-0 bg-dark text-light">
            <NavBar searchHero={searchHero} onSearchHero={onSearchHero} />
            <div className="px-0">
                <PainelHero heroes={displayedHeroes} />
            </div>
            <Footer/>
        </section>
    );
};

export default Home;



