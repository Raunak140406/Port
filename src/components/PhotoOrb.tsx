import React from 'react';
import Orb from './Orb';

interface PhotoOrbProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

export default function PhotoOrb({ imageUrl, alt, className = "" }: PhotoOrbProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Orb Background Animation - More Prominent and Larger */}
      <div className="absolute inset-0 z-0 scale-125">
        <Orb 
          hue={270} 
          forceHoverState={true} 
          rotateOnHover={true} 
          hoverIntensity={0.7}
        />
      </div>
      
      {/* Additional Outer Glow Layer - Even Larger */}
      <div className="absolute inset-0 z-1 scale-150 opacity-50">
        <Orb 
          hue={320} 
          forceHoverState={true} 
          rotateOnHover={false} 
          hoverIntensity={0.5}
        />
      </div>
      
      {/* Photo Container - Larger */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-[22rem] h-[22rem] rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-sm shadow-2xl">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Enhanced overlay glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-stellar-400/20 to-nebula-400/20 z-20 pointer-events-none"></div>
      
      {/* Pulsing outer ring - Larger */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="w-full h-full rounded-full border-2 border-stellar-400/40 animate-pulse"></div>
      </div>
    </div>
  );
}