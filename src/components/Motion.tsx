import React from 'react';
import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {colors, type} from '../theme/tokens';

export const ScreenTransition: React.FC<React.PropsWithChildren<{camera?: number}>> = ({children, camera = 1.018}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame, fps, config: {damping: 26, stiffness: 160, mass: 0.8}});
  const opacity = interpolate(frame, [0, 12], [0, 1], {extrapolateRight: 'clamp'});
  return <div style={{width: '100%', height: '100%', opacity, transform: `scale(${interpolate(enter, [0, 1], [camera, 1])})`}}>{children}</div>;
};

export const Callout: React.FC<{children: React.ReactNode; delay?: number}> = ({children, delay = 0}) => {
  const frame = useCurrentFrame();
  const y = interpolate(frame, [delay, delay + 18], [10, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.out(Easing.cubic)});
  const opacity = interpolate(frame, [delay, delay + 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <div style={{position: 'absolute', top: 48, left: '50%', transform: `translate(-50%, ${y}px)`, opacity, color: '#d8e1ed', fontFamily: type.sans, fontSize: 23, letterSpacing: '.01em'}}>{children}</div>;
};

export const ClickRipple: React.FC<{active: boolean}> = ({active}) => {
  const frame = useCurrentFrame();
  if (!active) return null;
  const scale = interpolate(frame % 18, [0, 18], [0.35, 1.5]);
  const opacity = interpolate(frame % 18, [0, 18], [0.38, 0]);
  return <span style={{position: 'absolute', left: -12, top: -12, width: 34, height: 34, border: `2px solid ${colors.blue}`, borderRadius: '50%', transform: `scale(${scale})`, opacity}} />;
};

export type CursorPoint = {frame: number; x: number; y: number; click?: boolean};

export const Cursor: React.FC<{points: CursorPoint[]}> = ({points}) => {
  const frame = useCurrentFrame();
  if (points.length === 0 || frame < points[0].frame) return null;
  let from = points[0]; let to = points[points.length - 1];
  for (let i = 0; i < points.length - 1; i++) {
    if (frame >= points[i].frame && frame <= points[i + 1].frame) {from = points[i]; to = points[i + 1]; break;}
  }
  const progress = interpolate(frame, [from.frame, to.frame], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.cubic)});
  const x = interpolate(progress, [0, 1], [from.x, to.x]);
  const y = interpolate(progress, [0, 1], [from.y, to.y]);
  const click = points.some((p) => p.click && frame >= p.frame && frame < p.frame + 9);
  return <div style={{position: 'absolute', zIndex: 50, left: x, top: y, width: 30, height: 38, transform: `scale(${click ? 0.88 : 1})`, transformOrigin: '3px 3px', filter: 'drop-shadow(0 2px 2px rgba(0,0,0,.28))'}}>
    <ClickRipple active={click} />
    <svg width="30" height="38" viewBox="0 0 30 38" fill="none"><path d="M3 2.5v26.2l6.9-6.5 5.2 11.4 5.2-2.4-5.1-11.1h10.1L3 2.5Z" fill="white" stroke="#172033" strokeWidth="2" strokeLinejoin="round"/></svg>
  </div>;
};

export const TitleCard: React.FC<{closing?: boolean}> = ({closing = false}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const s = spring({frame, fps, config: {damping: 24, stiffness: 110}});
  return <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', fontFamily: type.sans, color: colors.white}}>
    <div style={{display: 'flex', alignItems: 'center', gap: 20, opacity: s, transform: `translateY(${interpolate(s, [0,1], [20,0])}px)`}}>
      <div style={{width: 56, height: 56, borderRadius: 14, background: colors.blue, display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 24}}>LI</div>
      <div style={{fontSize: closing ? 54 : 64, fontWeight: 720, letterSpacing: '.08em'}}>SMART INSTALL</div>
    </div>
    <div style={{marginTop: 25, color: '#b8c3d2', fontSize: 28, letterSpacing: '.01em'}}>{closing ? 'LITIT AI Desktop' : 'Installation that understands your environment.'}</div>
  </div>;
};
