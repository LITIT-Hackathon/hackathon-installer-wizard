import React from 'react';
import {colors, shadow, type} from '../theme/tokens';

const steps = ['Analyze', 'Review', 'Configure', 'Install', 'Verify'];

export const InstallerWindow: React.FC<React.PropsWithChildren<{activeStep: number; title?: string; zoom?: number}>> = ({activeStep, children, title = 'LITIT AI Desktop — Smart Installer', zoom = 1}) => (
  <div style={{position: 'absolute', left: '50%', top: '53%', width: 1390, height: 830, transform: `translate(-50%, -50%) scale(${zoom})`, borderRadius: 16, background: colors.surface, boxShadow: shadow, overflow: 'hidden', border: '1px solid rgba(255,255,255,.16)', fontFamily: type.sans, color: colors.text}}>
    <div style={{height: 58, background: '#eef2f7', borderBottom: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', padding: '0 22px', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, fontWeight: 650}}><span style={{width: 26, height: 26, borderRadius: 7, display: 'grid', placeItems: 'center', background: colors.blue, color: 'white', fontSize: 11}}>LI</span>{title}</div>
      <div style={{display: 'flex', gap: 9}}>{['—','□','×'].map((x) => <span key={x} style={{width: 28, height: 28, display: 'grid', placeItems: 'center', color: '#667085', fontSize: 17}}>{x}</span>)}</div>
    </div>
    <div style={{height: 76, borderBottom: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center', padding: '0 72px', gap: 0}}>
      {steps.map((step, i) => <React.Fragment key={step}>
        <div style={{display: 'flex', alignItems: 'center', gap: 9, color: i <= activeStep ? colors.text : '#98a2b3', fontSize: 14, fontWeight: i === activeStep ? 680 : 520}}>
          <span style={{width: 26, height: 26, borderRadius: 13, display: 'grid', placeItems: 'center', background: i < activeStep ? colors.green : i === activeStep ? colors.blue : '#e4e7ec', color: i <= activeStep ? 'white' : '#667085', fontSize: 12}}>{i < activeStep ? '✓' : i + 1}</span>{step}
        </div>
        {i < steps.length - 1 && <div style={{height: 1, background: i < activeStep ? '#7fc5a1' : colors.border, flex: 1, margin: '0 18px'}} />}
      </React.Fragment>)}
    </div>
    <main style={{height: 696, background: colors.surface, position: 'relative'}}>{children}</main>
  </div>
);

export const WizardStep: React.FC<React.PropsWithChildren<{title: string; subtitle: string; footer?: React.ReactNode}>> = ({title, subtitle, footer, children}) => (
  <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
    <div style={{padding: '42px 72px 26px'}}><h1 style={{fontSize: 31, lineHeight: 1.2, margin: 0, fontWeight: 720, letterSpacing: '-.02em'}}>{title}</h1><p style={{margin: '10px 0 0', color: colors.textMuted, fontSize: 17, lineHeight: 1.5}}>{subtitle}</p></div>
    <div style={{padding: '0 72px', flex: 1, minHeight: 0}}>{children}</div>
    {footer && <div style={{height: 86, borderTop: `1px solid ${colors.border}`, padding: '0 72px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 12}}>{footer}</div>}
  </div>
);

export const Button: React.FC<{children: React.ReactNode; primary?: boolean; compact?: boolean}> = ({children, primary, compact}) => (
  <div style={{height: compact ? 38 : 44, padding: compact ? '0 16px' : '0 21px', borderRadius: 6, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: primary ? colors.blue : colors.surface, border: primary ? `1px solid ${colors.blue}` : `1px solid ${colors.border}`, color: primary ? 'white' : colors.text, fontWeight: 650, fontSize: compact ? 14 : 15, boxShadow: primary ? '0 1px 2px rgba(0,0,0,.08)' : 'none'}}>{children}</div>
);
