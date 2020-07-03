import React from "react"

export function Pokemon({ pokemon }) {
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image}></img>
            <h5>{pokemon.height.minimum}</h5>
            <div>
                {pokemon.attacks.special
                    .map(attack =>
                        <div>
                            <span>Name: {attack.name}</span>
                            <span>Type: {attack.type}</span>
                            <span>Damage: {attack.damage}</span>
                        </div>
                    )}
            </div>
        </div>
    )
}


