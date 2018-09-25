export enum Branch {
  math = 'matematik',
  chemistry = 'kimya'
}

export interface Teacher {
  id: number;
  name: string;
  branch: Branch;
}
