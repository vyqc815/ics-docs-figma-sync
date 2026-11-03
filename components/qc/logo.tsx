/** QC PLS wordmark: violet Q with a check inside, the rest in the text colour (SVG, sharp at any size). */
export function Logo({ className = "" }: { className?: string }): React.JSX.Element {
  return (
    <svg viewBox="0 0 2000 680" role="img" aria-label="QC PLS" className={className}>
      <circle cx="305" cy="335" r="174" fill="none" stroke="#a685f7" strokeWidth="72" />
      <path d="M352 468 L440 558 L546 558 L462 470 Z" fill="#a685f7" />
      <path d="M228 330 L275 378 L392 262" fill="none" stroke="currentColor" strokeOpacity="0.9" strokeWidth="44" strokeLinecap="square" />
      <text x="525" y="530" fill="currentColor" fontFamily="Montserrat, 'Be Vietnam Pro', Arial, sans-serif" fontWeight="800" fontSize="500" textLength="1400" lengthAdjust="spacingAndGlyphs">
        C PLS
      </text>
    </svg>
  );
}
