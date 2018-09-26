export enum Branch {
  sport = 'spor',
  math = 'matematik',
  chemistry = 'kimya',
  pyschic = 'fizik',
  computer = 'bilgisayar'
}
export enum ClassOptions{
  '8-A' = '8-A',
  '8-B' = '8-B',
  '8-C' = '8-C',
  '8-D' = '8-D',
  '8-E' = '8-E',
  '8-F' = '8-F',
  '9-A' = '9-A',
  '9-B' = '9-B',
  '9-C' = '9-C',
  '9-D' = '9-D',
  '9-E' = '9-E',
  '9-F' = '9-F',
  '10-A' = '10-A',
  '10-B' = '10-B',
  '10-C' = '10-C',
  '10-D' = '10-D',
  '10-E' = '10-E',
  '10-F' = '10-F',
  '11-A' = '11-A',
  '11-B' = '11-B',
  '11-C' = '11-C',
  '11-D' = '11-D',
  '11-E' = '11-E',
  '11-F' = '11-F',
  '12-A' = '12-A',
  '12-B' = '12-B',
  '12-C' = '12-C',
  '12-D' = '12-D',
  '12-E' = '12-E',
  '12-F' = '12-F',
  ' ' = ' ',

}
export interface Teacher {
  id: number;
  name: string;
  sname: string;
  branch: Branch;
  mainClass: string;
}
