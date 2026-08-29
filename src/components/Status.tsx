import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Status} from '../data/scenarios';
import {colors, type} from '../theme/tokens';

const map = {
  pass: {label: 'PASS', fg: colors.green, bg: colors.greenSoft, icon: '✓'},
  ready: {label: 'READY', fg: colors.green, bg: colors.greenSoft, icon: '✓'},
  complete: {label: 'COMPLETE', fg: colors.green, bg: colors.greenSoft, icon: '✓'},
  fail: {label: 'FAILED', fg: colors.red, bg: colors.redSoft, icon: '!'},
  checking: {label: 'CHECKING', fg: colors.blue, bg: colors.blueSoft, icon: '•'},
  running: {label: 'RUNNING', fg: colors.blue, bg: colors.blueSoft, icon: '•'},
  pending: {label: 'WAITING', fg: colors.textMuted, bg: colors.surfaceMuted, icon: '·'},
};

export const StatusCheck: React.FC<{status: Status; delay?: number; labelOverride?: string}> = ({status, delay = 0, labelOverride}) => {
  const frame = useCurrentFrame(); const {fps} = useVideoConfig();
  const p = spring({frame: Math.max(0, frame - delay), fps, config: {damping: 22, stiffness: 180}});
  const v = map[status];
  return <div style={{opacity: interpolate(p,[0,1],[0,1]), transform: `translateY(${interpolate(p,[0,1],[6,0])}px)`, display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 10px', borderRadius: 16, background: v.bg, color: v.fg, fontSize: 12, fontWeight: 760, letterSpacing: '.055em'}}><span style={{width: 16, height: 16, borderRadius: 8, color: 'white', background: v.fg, display: 'grid', placeItems: 'center', fontSize: 10}}>{v.icon}</span>{labelOverride ?? v.label}</div>;
};

export const RequirementRow: React.FC<{label: string; value: string; status: Status; delay?: number}> = ({label, value, status, delay = 0}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 12], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return <div style={{height: 67, borderBottom: `1px solid ${colors.border}`, display: 'grid', gridTemplateColumns: '1.35fr 1fr 150px', alignItems: 'center', opacity, fontFamily: type.sans}}><div style={{fontWeight: 620, fontSize: 16}}>{label}</div><div style={{color: colors.textMuted, fontSize: 15}}>{value}</div><div style={{justifySelf: 'end'}}><StatusCheck status={status} delay={delay + 4} /></div></div>;
};

export const AlertPanel: React.FC<React.PropsWithChildren<{tone?: 'error'|'success'|'info'; title: string}>> = ({tone='info', title, children}) => {
  const style = tone === 'error' ? {fg: colors.red, bg: colors.redSoft} : tone === 'success' ? {fg: colors.green, bg: colors.greenSoft} : {fg: colors.blue, bg: colors.blueSoft};
  return <div style={{borderLeft: `4px solid ${style.fg}`, background: style.bg, borderRadius: 7, padding: '17px 20px', color: colors.text}}><div style={{fontWeight: 720, fontSize: 17, marginBottom: 6}}>{title}</div><div style={{fontSize: 15, color: '#465268', lineHeight: 1.45}}>{children}</div></div>;
};

export const ProgressStage: React.FC<{label: string; status: Status}> = ({label, status}) => <div style={{height: 61, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${colors.border}`}}><div style={{display: 'flex', alignItems: 'center', gap: 12}}><span style={{width: 24, height: 24, borderRadius: 12, background: status === 'complete' ? colors.greenSoft : status === 'running' ? colors.blueSoft : colors.surfaceMuted, color: status === 'complete' ? colors.green : status === 'running' ? colors.blue : colors.textMuted, display: 'grid', placeItems: 'center', fontWeight: 800}}>{status === 'complete' ? '✓' : status === 'running' ? '•' : '·'}</span><span style={{fontWeight: status === 'running' ? 680 : 560}}>{label}</span></div><StatusCheck status={status} /></div>;

export const HealthCheckRow = ProgressStage;
