export const VIDEO = {fps: 30, width: 1920, height: 1080, duration: 2100};

export const scenes = {
  title: {from: 0, duration: 120},
  welcome: {from: 120, duration: 180},
  scan: {from: 300, duration: 240},
  remediation: {from: 540, duration: 240},
  resolving: {from: 780, duration: 150},
  compatible: {from: 930, duration: 180},
  configuration: {from: 1110, duration: 210},
  summary: {from: 1320, duration: 210},
  installation: {from: 1530, duration: 240},
  health: {from: 1770, duration: 180},
  success: {from: 1950, duration: 150},
} as const;

export const motion = {
  screenFade: 14,
  cursorMove: 28,
  clickHold: 7,
  stagger: 16,
};
