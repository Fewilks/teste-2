import React, { useState, useEffect } from 'react';
import { getPokemonSpriteHierarchy, SpriteSources } from '../utils/cardImages';

interface PokemonSpriteProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const getPokemonSpriteUrl = (pokemonName: string): string => {
  if (!pokemonName) return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';
  const hierarchy: SpriteSources = getPokemonSpriteHierarchy(pokemonName);
  return hierarchy.artwork || hierarchy.primary;
};

export default function PokemonSprite({ name, className = '', size = 'md' }: PokemonSpriteProps) {
  const [level, setLevel] = useState<number>(0);

  useEffect(() => {
    setLevel(0);
  }, [name]);

  const hierarchy: SpriteSources = getPokemonSpriteHierarchy(name);

  const getSource = (): string => {
    switch (level) {
      case 0:
        return hierarchy.artwork || hierarchy.primary;
      case 1:
        return hierarchy.battleSprite;
      case 2:
        return hierarchy.dexSprite;
      default:
        return hierarchy.fallback;
    }
  };

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  const handleImgError = () => {
    setLevel(prev => prev + 1);
  };

  return (
    <div className={`flex items-center justify-center overflow-hidden shrink-0 ${sizeClasses[size]} ${className}`}>
      <img
        id={`sprite-${name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
        src={getSource()}
        alt={name}
        className="max-w-full max-h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-110"
        onError={handleImgError}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

