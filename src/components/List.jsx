import { useEffect, useState } from 'react'
import Pokemon from './Pokemon.jsx'

function List(){
    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function fetchData(id){
            try{
                const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                const res = await data.json()
                const name = res.name
                const image = res.sprites.front_default
                return {name: name, image: image}
            }catch(e){
                console.log(e)
                return null
            }
        }

        async function allPokemon(){
            const catchThemAll = []
            for(let i = 1; i< 151; i++){
                const data = await fetchData(i)
                if(data){
                    catchThemAll.push(allPokemon)
                }
                catchThemAll.push(data)
            }
            setPokemon(catchThemAll);
            setLoading(false);
        }
        allPokemon();
    },[pokemon.length])

    return (
        <div>
            <p>Liste des Pokemon 1G</p>
            {loading ? (
                <p>Loading...</p>
            ) : (
                pokemon.map((p, i) => <Pokemon key={i} name={p.name} image={p.image}  />
            ))}
        </div>
    )
}

export default List;