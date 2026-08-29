import React from 'react';
import {AbsoluteFill, interpolate, Series, useCurrentFrame} from 'remotion';
import {Callout, Cursor, ScreenTransition, TitleCard} from '../components/Motion';
import {CompatibilityScreen, ConfigurationScreen, HealthScreen, InstallationScreen, RemediationScreen, ResolvingScreen, SuccessScreen, SummaryScreen, ScanScreen, WelcomeScreen} from '../screens/InstallerScreens';
import {colors, type} from '../theme/tokens';
import {scenes} from '../theme/timing';

const Scene: React.FC<React.PropsWithChildren<{callout?: string; camera?: number}>> = ({children, callout, camera}) => (
  <AbsoluteFill>{callout && <Callout delay={6}>{callout}</Callout>}<ScreenTransition camera={camera}>{children}</ScreenTransition></AbsoluteFill>
);

const WelcomeSequence: React.FC = () => <Scene><WelcomeScreen/><Cursor points={[
  {frame:18,x:1390,y:650},{frame:80,x:1572,y:870},{frame:115,x:1572,y:870},{frame:132,x:1572,y:870,click:true},
]}/></Scene>;

const ScanSequence: React.FC = () => <Scene callout="Automatic environment analysis"><ScanScreen/></Scene>;

const RemediationSequence: React.FC = () => <Scene callout="Actionable remediation"><RemediationScreen/><Cursor points={[
  {frame:15,x:1320,y:460},{frame:55,x:1000,y:492},{frame:68,x:1000,y:492,click:true},{frame:104,x:1000,y:492},{frame:122,x:1000,y:492,click:true},{frame:151,x:1000,y:492},{frame:197,x:1568,y:870},{frame:213,x:1568,y:870,click:true},
]}/></Scene>;

const ResolveSequence: React.FC = () => <Scene callout="Safe recovery"><ResolvingScreen/></Scene>;

const CompatibleSequence: React.FC = () => <Scene><CompatibilityScreen/><Cursor points={[
  {frame:20,x:1300,y:650},{frame:105,x:1570,y:870},{frame:130,x:1570,y:870},{frame:144,x:1570,y:870,click:true},
]}/></Scene>;

const ConfigurationSequence: React.FC = () => <Scene><ConfigurationScreen/><Cursor points={[
  {frame:15,x:1250,y:560},{frame:48,x:430,y:587},{frame:62,x:430,y:587,click:true},{frame:105,x:430,y:587},{frame:124,x:430,y:587,click:true},{frame:150,x:430,y:587},{frame:178,x:1540,y:870},{frame:192,x:1540,y:870,click:true},
]}/></Scene>;

const SummarySequence: React.FC = () => <Scene><SummaryScreen/><Cursor points={[
  {frame:20,x:1350,y:650},{frame:142,x:1575,y:870},{frame:174,x:1575,y:870},{frame:187,x:1575,y:870,click:true},
]}/></Scene>;

const InstallSequence: React.FC = () => <Scene><InstallationScreen/></Scene>;
const HealthSequence: React.FC = () => <Scene callout="Verified installation" camera={1.01}><HealthScreen/></Scene>;

const SuccessSequence: React.FC = () => {
  const frame=useCurrentFrame();
  const lineOpacity=interpolate(frame,[35,52,102,118],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  const endOpacity=interpolate(frame,[112,132],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  return <Scene camera={1.01}><SuccessScreen/><Cursor points={[
    {frame:12,x:1280,y:650},{frame:48,x:960,y:690},{frame:68,x:960,y:690,click:true},
  ]}/><div style={{position:'absolute',left:'50%',bottom:42,transform:'translateX(-50%)',fontFamily:type.sans,color:'white',fontSize:29,fontWeight:680,letterSpacing:'.055em',opacity:lineOpacity,textShadow:'0 2px 12px rgba(0,0,0,.4)'}}>Understand. &nbsp; Remediate. &nbsp; Install. &nbsp; Verify.</div>
  <AbsoluteFill style={{background:colors.canvas,opacity:endOpacity}}><TitleCard closing/></AbsoluteFill></Scene>;
};

export const SmartInstallerDemo: React.FC = () => (
  <AbsoluteFill style={{background: `radial-gradient(circle at 50% 44%, ${colors.canvasSoft} 0%, ${colors.canvas} 68%)`, overflow:'hidden'}}>
    <Series>
      <Series.Sequence durationInFrames={scenes.title.duration}><TitleCard/></Series.Sequence>
      <Series.Sequence durationInFrames={scenes.welcome.duration}><WelcomeSequence/></Series.Sequence>
      <Series.Sequence durationInFrames={scenes.scan.duration}><ScanSequence/></Series.Sequence>
      <Series.Sequence durationInFrames={scenes.remediation.duration}><RemediationSequence/></Series.Sequence>
      <Series.Sequence durationInFrames={scenes.resolving.duration}><ResolveSequence/></Series.Sequence>
      <Series.Sequence durationInFrames={scenes.compatible.duration}><CompatibleSequence/></Series.Sequence>
      <Series.Sequence durationInFrames={scenes.configuration.duration}><ConfigurationSequence/></Series.Sequence>
      <Series.Sequence durationInFrames={scenes.summary.duration}><SummarySequence/></Series.Sequence>
      <Series.Sequence durationInFrames={scenes.installation.duration}><InstallSequence/></Series.Sequence>
      <Series.Sequence durationInFrames={scenes.health.duration}><HealthSequence/></Series.Sequence>
      <Series.Sequence durationInFrames={scenes.success.duration}><SuccessSequence/></Series.Sequence>
    </Series>
  </AbsoluteFill>
);
