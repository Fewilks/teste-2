import React, { useState, useEffect } from 'react';
import { resolveCard, getBasePokemonName, POKEMON_DEX_MAP } from '../utils/cardImages';

interface PokemonSpriteProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const getPokemonSpriteUrl = (pokemonName: string): string => {
  if (!pokemonName) return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';
  
  const baseName = getBasePokemonName(pokemonName);
  const dexId = POKEMON_DEX_MAP[baseName];

  // If we have National Dex ID, PokeAPI official artwork is ultra-high resolution and always 200 OK
  if (dexId) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${dexId}.png`;
  }

  // Check card database
  const card = resolveCard(pokemonName);
  if (card && card.imageUrl) {
    return card.imageUrl;
  }

  return `https://play.pokemonshowdown.com/sprites/gen5/${baseName}.png`;
};

export default function PokemonSprite({ name, className = '', size = 'md' }: PokemonSpriteProps) {
  const [src, setSrc] = useState<string>(getPokemonSpriteUrl(name));
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setSrc(getPokemonSpriteUrl(name));
    setHasError(false);
  }, [name]);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  const handleImgError = () => {
    if (!hasError) {
      setHasError(true);
      // Try PokeAPI pixel sprite or Poke-Ball fallback
      const baseName = getBasePokemonName(name);
      setSrc(`https://play.pokemonshowdown.com/sprites/gen5/${baseName}.png`);
    } else {
      setSrc('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png');
    }
  };

  return (
    <div className={`flex items-center justify-center overflow-hidden shrink-0 ${sizeClasses[size]} ${className}`}>
      <img
        id={`sprite-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
        src={src}
        alt={name}
        className="max-w-full max-h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-110"
        onError={handleImgError}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

