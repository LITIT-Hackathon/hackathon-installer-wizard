export type Status = 'pending' | 'checking' | 'pass' | 'fail' | 'ready' | 'complete' | 'running';

export type Requirement = {id: string; label: string; value: string; status: Status};

export const healthyMachine: Requirement[] = [
  {id: 'os', label: 'Operating system', value: 'Windows 11', status: 'pass'},
  {id: 'memory', label: 'Memory', value: '16 GB', status: 'pass'},
  {id: 'disk', label: 'Disk space', value: '20 GB available', status: 'pass'},
  {id: 'python', label: 'Python', value: 'Python 3.12', status: 'pass'},
];

export const missingPython: Requirement[] = healthyMachine.map((r) =>
  r.id === 'python' ? {...r, value: 'Not found', status: 'fail'} : r,
);

export const resolvedPython: Requirement[] = healthyMachine.map((r) =>
  r.id === 'python' ? {...r, status: 'ready'} : r,
);

export const configuration = {
  installDirectory: 'C:\\Program Files\\LITIT AI Desktop',
  modelDirectory: 'D:\\AI Models\\LITIT',
  gpu: 'Automatic — use GPU when compatible',
  microphone: 'Request access on first launch',
  backendPort: '8080',
};

export const installStages = ['Preparing', 'Application', 'Configuration', 'AI Model', 'Health Check'];
export const healthChecks = ['Application files', 'Configuration', 'AI Model', 'Microphone', 'Local backend'];
