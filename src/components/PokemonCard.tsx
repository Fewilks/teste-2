import React, { useState } from 'react';
import { resolveCard, POKEMON_CARD_BACK, POKEMON_CARD_BACK_FALLBACK, CardMetadata } from '../utils/cardImages';
import { Eye, Zap, Flame, ShieldAlert, Sparkles, ExternalLink } from 'lucide-react';

export interface PokemonCardProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isBack?: boolean;
  damage?: number;
  energiesCount?: number;
  energyType?: string;
  isActiveSpot?: boolean;
  activeColor?: 'purple' | 'rose' | 'amber';
  onClick?: () => void;
  showNameLabel?: boolean;
  className?: string;
  showInspectButton?: boolean;
  hasEvolvedInTurn?: boolean;
}

export default function PokemonCard({
  name,
  size = 'md',
  isBack = false,
  damage = 0,
  energiesCount = 0,
  energyType,
  isActiveSpot = false,
  activeColor = 'purple',
  onClick,
  showNameLabel = false,
  className = '',
  showInspectButton = false,
  hasEvolvedInTurn = false
}: PokemonCardProps) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInspecting, setIsInspecting] = useState(false);

  const cardData: CardMetadata = resolveCard(name);

  // Size specifications matching standard Pokémon card 2.5 x 3.5 ratio
  const sizeClasses = {
    xs: 'w-9 h-12 rounded-sm',
    sm: 'w-14 h-20 md:w-16 md:h-22 rounded-md',
    md: 'w-24 h-34 sm:w-28 sm:h-40 rounded-lg',
    lg: 'w-32 h-44 sm:w-36 sm:h-50 rounded-xl',
    xl: 'w-56 h-78 sm:w-64 sm:h-90 rounded-2xl'
  };

  const ringClasses = {
    purple: 'ring-2 ring-purple-500 shadow-lg shadow-purple-500/30',
    rose: 'ring-2 ring-rose-500 shadow-lg shadow-rose-500/30',
    amber: 'ring-2 ring-amber-500 shadow-lg shadow-amber-500/30'
  };

  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
    }
  };

  const cardSrc = isBack 
    ? (imgError ? POKEMON_CARD_BACK_FALLBACK : POKEMON_CARD_BACK)
    : (imgError ? `https://play.pokemonshowdown.com/sprites/gen5/${cardData.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.png` : cardData.imageUrl);

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Card Outer Container */}
      <div
        onClick={onClick ? onClick : () => setIsInspecting(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative ${sizeClasses[size]} shrink-0 cursor-pointer transition-all duration-200 transform ${
          isHovered ? '-translate-y-1 scale-105 z-20' : 'z-10'
        } ${
          hasEvolvedInTurn 
            ? 'ring-2 ring-amber-300 animate-evolution-glow scale-[1.02]' 
            : (isActiveSpot ? ringClasses[activeColor] : 'shadow-md shadow-black/60')
        } group`}
        title={`${cardData.name}${hasEvolvedInTurn ? ' (Evoluiu neste turno!)' : ''} (Clique para ampliar)`}
      >
        {/* Floating Evolution Sparkle Badge */}
        {hasEvolvedInTurn && !isBack && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-full shadow-lg border border-yellow-100 flex items-center gap-1 z-30 animate-bounce tracking-wide uppercase whitespace-nowrap">
            <Sparkles className="w-2.5 h-2.5 fill-slate-950 text-slate-950" />
            <span>Evoluiu!</span>
          </div>
        )}

        {/* Card Border & Artwork */}
        <div className={`w-full h-full rounded-inherit overflow-hidden bg-slate-950 border relative flex items-center justify-center ${
          hasEvolvedInTurn ? 'border-amber-300' : 'border-slate-700/60'
        }`}>
          <img
            src={cardSrc}
            alt={isBack ? 'Carta de Prêmio' : cardData.name}
            onError={handleImageError}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-300"
          />

          {/* Shimmer Evolution Light Sweep Overlay */}
          {hasEvolvedInTurn && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer pointer-events-none z-20" />
          )}

          {/* Holographic Glossy Overlay effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Damage Counters Badge */}
          {damage > 0 && !isBack && (
            <div className="absolute top-1 right-1 bg-rose-600/95 text-white font-black text-[9px] px-1.5 py-0.5 rounded shadow-md border border-rose-400 flex items-center gap-0.5 animate-pulse z-20">
              <ShieldAlert className="w-2.5 h-2.5" />
              <span>-{damage}</span>
            </div>
          )}

          {/* Attached Energies Badge */}
          {energiesCount > 0 && !isBack && (
            <div className="absolute bottom-1 left-1 bg-amber-500/95 text-slate-950 font-black text-[9px] px-1.5 py-0.5 rounded shadow-md border border-amber-300 flex items-center gap-0.5 z-20">
              <Flame className="w-2.5 h-2.5 text-slate-950" />
              <span>x{energiesCount}</span>
            </div>
          )}

          {/* Active Spot Indicator Pill */}
          {isActiveSpot && !isBack && (
            <div className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider text-white shadow-md z-20 ${
              activeColor === 'rose' ? 'bg-rose-600' : 'bg-purple-600'
            }`}>
              Ativo
            </div>
          )}

          {/* Quick Inspect Icon on Hover */}
          {showInspectButton && (
            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
              <span className="p-1.5 rounded-full bg-purple-600 text-white shadow-lg">
                <Eye className="w-3.5 h-3.5" />
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Optional Card Label below */}
      {showNameLabel && !isBack && (
        <div className="mt-1.5 text-center max-w-[115px]">
          <div className="text-xs font-bold text-slate-100 capitalize truncate" title={cardData.name}>
            {cardData.name}
          </div>
          {hasEvolvedInTurn ? (
            <div className="text-[9px] font-extrabold text-amber-400 uppercase tracking-wide flex items-center justify-center gap-0.5 animate-pulse">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Evoluiu</span>
            </div>
          ) : cardData.stage ? (
            <div className="text-[9px] font-semibold text-purple-400 uppercase tracking-wide">
              {cardData.stage}
            </div>
          ) : null}
        </div>
      )}

      {/* Card Inspection Modal */}
      {isInspecting && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={(e) => {
            e.stopPropagation();
            setIsInspecting(false);
          }}
        >
          <div 
            className="bg-slate-900 border border-purple-500/40 rounded-3xl p-6 max-w-sm w-full shadow-2xl space-y-4 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsInspecting(false)}
              className="absolute top-4 right-4 p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              ✕
            </button>

            <div className="text-sm font-bold text-purple-400 uppercase tracking-wider">
              {isBack ? 'Carta de Prêmio' : cardData.category}
            </div>

            {/* High Res Card Display */}
            <div className="w-56 h-78 sm:w-64 sm:h-90 mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-950 flex items-center justify-center relative">
              <img
                src={cardSrc}
                alt={cardData.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-black text-white">{isBack ? 'Prêmio em Jogo' : cardData.name}</h3>
              {cardData.setCode && (
                <p className="text-xs font-mono text-slate-400">
                  {cardData.setCode} #{cardData.setNumber || '001'}
                </p>
              )}
            </div>

            <button
              onClick={() => setIsInspecting(false)}
              className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-purple-600/30"
            >
              Fechar Visualização
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
