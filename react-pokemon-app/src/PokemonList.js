import React from 'react'
import './styles/pokemonlist.css'


export default function PokemonList({pokemonZ}) {
    return (
        <>
        <div className="test-grid">
        {pokemonZ.map(p => (
                <div class="test-grid-item" key={p.name}>{p.name  + " " +p.url}</div>
            ))}
        </div>
        
        </>
    )
}



