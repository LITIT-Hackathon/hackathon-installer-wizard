import React from 'react';
import {Composition} from 'remotion';
import {SmartInstallerDemo} from './sequences/SmartInstallerDemo';
import {VIDEO} from './theme/timing';

export const RemotionRoot: React.FC = () => (
  <Composition
    id="SmartInstallerDemo"
    component={SmartInstallerDemo}
    durationInFrames={VIDEO.duration}
    fps={VIDEO.fps}
    width={VIDEO.width}
    height={VIDEO.height}
  />
);
