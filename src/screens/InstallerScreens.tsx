import React from 'react';
import {Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {AlertPanel, HealthCheckRow, ProgressStage, RequirementRow, StatusCheck} from '../components/Status';
import {Button, InstallerWindow, WizardStep} from '../components/InstallerWindow';
import {configuration, healthChecks, healthyMachine, installStages, missingPython, resolvedPython, Status} from '../data/scenarios';
import {colors, type} from '../theme/tokens';

const Footer: React.FC<{label?: string; back?: boolean}> = ({label='Continue', back=true}) => <>{back && <Button>Back</Button>}<Button primary>{label}</Button></>;

export const WelcomeScreen: React.FC = () => {
  const frame = useCurrentFrame(); const {fps} = useVideoConfig();
  const p = spring({frame, fps, config: {damping: 24, stiffness: 130}});
  return <InstallerWindow activeStep={0}><WizardStep title="Welcome to Smart Install" subtitle="We’ll check this computer before making any changes." footer={<Footer label="Continue" back={false} />}>
    <div style={{display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 52, marginTop: 22, alignItems: 'center', opacity: p}}>
      <div><div style={{fontSize: 24, lineHeight: 1.45, fontWeight: 650, maxWidth: 560}}>Install LITIT AI Desktop with confidence.</div><p style={{fontSize: 17, lineHeight: 1.6, color: colors.textMuted, maxWidth: 600}}>Smart Install analyzes compatibility, guides any required fixes, and verifies that the application works before you finish.</p>
        <div style={{marginTop: 28, display: 'grid', gap: 17}}>{[['✓','Checks stay on this computer'],['✓','No system changes without confirmation'],['✓','Usually takes less than two minutes']].map(([i,t]) => <div key={t} style={{display:'flex',gap:12,alignItems:'center',fontSize:15}}><span style={{color:colors.green,fontWeight:800}}>{i}</span>{t}</div>)}</div>
      </div>
      <div style={{height: 300, borderRadius: 14, background: colors.surfaceSubtle, display:'grid',placeItems:'center', border:`1px solid ${colors.border}`}}><div style={{textAlign:'center'}}><div style={{width:76,height:76,borderRadius:20,background:colors.blue,color:'white',display:'grid',placeItems:'center',margin:'0 auto 20px',fontSize:28,fontWeight:800}}>LI</div><div style={{fontSize:19,fontWeight:700}}>LITIT AI Desktop</div><div style={{fontSize:14,color:colors.textMuted,marginTop:7}}>Local AI, confidently installed</div></div></div>
    </div></WizardStep></InstallerWindow>;
};

export const ScanScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const rows = missingPython.map((r, i) => {
    const start = 22 + i * 39; let status: Status = frame < start ? 'pending' : frame < start + 24 ? 'checking' : r.status;
    return {...r, status};
  });
  return <InstallerWindow activeStep={0}><WizardStep title="Analyzing this computer" subtitle="Checking the environment against LITIT AI Desktop requirements.">
    <div style={{display:'grid',gridTemplateColumns:'1fr 295px',gap:36}}><div>{rows.map((r,i)=><RequirementRow key={r.id} {...r} delay={14+i*10}/>)}</div><div style={{border:`1px solid ${colors.border}`,borderRadius:9,padding:22,height:205,background:colors.surfaceSubtle}}><div style={{fontSize:13,color:colors.textMuted,textTransform:'uppercase',letterSpacing:'.07em',fontWeight:700}}>Computer</div><div style={{fontSize:18,fontWeight:680,marginTop:16}}>Windows workstation</div><div style={{fontSize:14,color:colors.textMuted,marginTop:8,lineHeight:1.6}}>64-bit operating system<br/>Local installation<br/>Standard user session</div></div></div>
  </WizardStep></InstallerWindow>;
};

export const RemediationScreen: React.FC = () => {
  const frame = useCurrentFrame(); const details = frame >= 70 && frame < 126;
  return <InstallerWindow activeStep={1}><WizardStep title="One requirement needs attention" subtitle="Resolve this item to continue with installation." footer={<><Button>Choose existing installation</Button><Button primary>Install automatically</Button></>}>
    <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:32}}><div><AlertPanel tone="error" title="Python was not found">Python is required by the local AI service but was not found. Smart Install can add an isolated runtime without changing your existing developer tools.</AlertPanel>
      <div style={{marginTop:22,border:`1px solid ${colors.border}`,borderRadius:9,overflow:'hidden'}}><div style={{padding:'18px 20px',display:'flex',alignItems:'center',justifyContent:'space-between',fontWeight:650}}><span>Technical details</span><span style={{color:colors.textMuted,transform:`rotate(${details?180:0}deg)`}}>⌄</span></div>{details&&<div style={{borderTop:`1px solid ${colors.border}`,padding:'17px 20px',background:colors.surfaceSubtle,display:'grid',gridTemplateColumns:'150px 1fr',rowGap:10,fontFamily:type.mono,fontSize:14}}><span style={{color:colors.textMuted}}>Required</span><span>Python &gt;= 3.11</span><span style={{color:colors.textMuted}}>Detected</span><span style={{color:colors.red}}>Not found</span><span style={{color:colors.textMuted}}>Searched</span><span>PATH, py launcher, registry</span></div>}</div>
    </div><div style={{background:colors.surfaceSubtle,borderRadius:9,padding:22,border:`1px solid ${colors.border}`,height:230}}><div style={{fontSize:15,fontWeight:700}}>What will change</div><div style={{fontSize:14,color:colors.textMuted,lineHeight:1.6,marginTop:13}}>An isolated Python 3.12 runtime will be installed for LITIT AI Desktop only.</div><div style={{borderTop:`1px solid ${colors.border}`,marginTop:16,paddingTop:14,fontSize:13,color:colors.textMuted}}>No global PATH changes<br/>No administrator access required</div></div></div>
  </WizardStep></InstallerWindow>;
};

export const ResolvingScreen: React.FC = () => {
  const frame = useCurrentFrame(); const done = frame >= 96;
  const width = interpolate(frame,[12,90],[8,100],{extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.cubic)});
  return <InstallerWindow activeStep={1}><WizardStep title={done?'Requirement resolved':'Installing Python runtime…'} subtitle={done?'Python is ready for LITIT AI Desktop.':'Adding an isolated runtime. Your existing environment will not be changed.'}>
    <div style={{maxWidth:780,margin:'56px auto 0',border:`1px solid ${done?'#a8d8bd':colors.border}`,borderRadius:10,padding:28,background:done?colors.greenSoft:colors.surface}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><div style={{fontSize:18,fontWeight:700}}>Python 3.12</div><div style={{fontSize:14,color:colors.textMuted,marginTop:7}}>Private runtime for LITIT AI Desktop</div></div><StatusCheck status={done?'ready':'checking'} /></div><div style={{height:8,borderRadius:4,background:'#e4e7ec',marginTop:26,overflow:'hidden'}}><div style={{height:'100%',width:`${width}%`,background:done?colors.green:colors.blue,borderRadius:4}}/></div>{done&&<div style={{marginTop:18,color:colors.green,fontWeight:650}}>✓ Requirement resolved</div>}</div>
  </WizardStep></InstallerWindow>;
};

export const CompatibilityScreen: React.FC = () => <InstallerWindow activeStep={1}><WizardStep title="System ready" subtitle="This computer meets all requirements for LITIT AI Desktop." footer={<Footer />}>
  <AlertPanel tone="success" title="Compatible and ready to install">All required checks passed. You can review settings before anything is installed.</AlertPanel><div style={{marginTop:22}}>{resolvedPython.map((r,i)=><RequirementRow key={r.id} {...r} status="pass" delay={12+i*10}/>)}</div>
</WizardStep></InstallerWindow>;

const Field: React.FC<{label:string;value:string}> = ({label,value}) => <div><div style={{fontSize:14,fontWeight:680,marginBottom:8}}>{label}</div><div style={{height:44,border:`1px solid ${colors.border}`,borderRadius:6,padding:'0 13px',display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:14}}><span>{value}</span><span style={{color:colors.textMuted}}>⌄</span></div></div>;

export const ConfigurationScreen: React.FC = () => {
  const frame=useCurrentFrame(); const advanced=frame>=62&&frame<129;
  return <InstallerWindow activeStep={2}><WizardStep title="Configure installation" subtitle="Recommended settings are ready. Adjust locations or access before continuing." footer={<Footer label="Review installation" />}>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'22px 28px'}}><Field label="Installation directory" value={configuration.installDirectory}/><Field label="Model directory" value={configuration.modelDirectory}/><Field label="GPU acceleration" value={configuration.gpu}/><Field label="Microphone access" value={configuration.microphone}/></div>
    <div style={{marginTop:22,borderTop:`1px solid ${colors.border}`,paddingTop:18}}><div style={{fontWeight:680,fontSize:15,display:'flex',gap:8,alignItems:'center'}}><span style={{transform:`rotate(${advanced?90:0}deg)`}}>›</span> Advanced settings</div>{advanced&&<div style={{marginTop:16,width:390}}><Field label="Local backend port" value={configuration.backendPort}/></div>}</div>
  </WizardStep></InstallerWindow>;
};

export const SummaryScreen: React.FC = () => {
  const items=[['Application','184 MB'],['Configuration','Less than 1 MB'],['AI Model','3.8 GB'],['Local Backend','Python 3.12 runtime']];
  return <InstallerWindow activeStep={3}><WizardStep title="Ready to install" subtitle="Review what Smart Install will add to this computer." footer={<Footer label="Install" />}>
    <div style={{display:'grid',gridTemplateColumns:'1fr 350px',gap:32}}><div style={{border:`1px solid ${colors.border}`,borderRadius:9,overflow:'hidden'}}>{items.map(([a,b],i)=><div key={a} style={{height:65,padding:'0 20px',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:i<items.length-1?`1px solid ${colors.border}`:'none'}}><span style={{fontWeight:650}}>✓ &nbsp;{a}</span><span style={{color:colors.textMuted,fontSize:14}}>{b}</span></div>)}</div><div style={{border:`1px solid ${colors.border}`,borderRadius:9,padding:21,background:colors.surfaceSubtle,fontSize:14,lineHeight:1.65}}><div style={{fontWeight:700,fontSize:15,marginBottom:9}}>Installation plan</div><div style={{color:colors.textMuted}}>4.0 GB download<br/>4.2 GB disk usage<br/>No system PATH changes<br/>No administrator access<br/>Microphone requested on launch</div></div></div>
  </WizardStep></InstallerWindow>;
};

export const InstallationScreen: React.FC = () => {
  const frame=useCurrentFrame(); const thresholds=[26,67,108,150,198];
  return <InstallerWindow activeStep={3}><WizardStep title="Installing LITIT AI Desktop" subtitle="You can continue using your computer while installation completes.">
    <div style={{maxWidth:850,margin:'0 auto'}}>{installStages.map((s,i)=>{const status:Status=frame>=thresholds[i]?(i===4?'running':'complete'):frame>=thresholds[i]-28?'running':'pending'; return <ProgressStage key={s} label={s} status={status}/>;})}<div style={{marginTop:24,fontSize:14,color:colors.textMuted}}>Verified steps are preserved if installation is interrupted.</div></div>
  </WizardStep></InstallerWindow>;
};

export const HealthScreen: React.FC = () => {
  const frame=useCurrentFrame();
  return <InstallerWindow activeStep={4} zoom={1.025}><WizardStep title="Verifying installation" subtitle="Running LITIT AI Desktop checks before completion.">
    <div style={{maxWidth:850,margin:'0 auto'}}>{healthChecks.map((h,i)=>{const at=20+i*27; const status:Status=frame>=at+18?'pass':frame>=at?'checking':'pending'; return <HealthCheckRow key={h} label={h} status={status}/>;})}</div>
  </WizardStep></InstallerWindow>;
};

export const SuccessScreen: React.FC = () => {
  const frame=useCurrentFrame(); const {fps}=useVideoConfig(); const p=spring({frame,fps,config:{damping:20,stiffness:120}});
  return <InstallerWindow activeStep={5} zoom={interpolate(frame,[0,120],[1.025,.96],{extrapolateRight:'clamp'})}><div style={{height:'100%',display:'grid',placeItems:'center',textAlign:'center'}}><div style={{opacity:p,transform:`translateY(${interpolate(p,[0,1],[18,0])}px)`}}><div style={{width:78,height:78,borderRadius:39,background:colors.greenSoft,color:colors.green,display:'grid',placeItems:'center',fontSize:38,fontWeight:800,margin:'0 auto 24px'}}>✓</div><h1 style={{fontSize:34,margin:0}}>LITIT AI Desktop is ready.</h1><p style={{color:colors.textMuted,fontSize:17,margin:'13px 0 28px'}}>Installation and all health checks completed successfully.</p><Button primary>Launch application</Button><div style={{marginTop:28,fontSize:13,color:colors.textMuted}}>Version 1.0.0 · Installed and verified</div></div></div></InstallerWindow>;
};
