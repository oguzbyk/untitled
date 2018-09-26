export enum Branch {
  math = 'matematik',
  chemistry = 'kimya',
  pyschic = 'fizik',
  computer = 'bilgisayar'
}

export interface Teacher {
  id: number;
  name: string;
  sname: string;
  branch: Branch;
}
