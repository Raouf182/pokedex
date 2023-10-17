import React, {useEffect, useState} from 'react';
import Poke from '../Services/pokemon';
import Pokemon from '../Components/Pokemon';

const HomePage = () => {
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        try {
            const response = await Poke.getPokemon();
            setPokemons(response.data.results)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPokemons()
    }, []);

    return <div>
    {pokemons.map(p => {
        return <Pokemon pokemon={p}/>
    })}
    </div>;
};

export default HomePage;