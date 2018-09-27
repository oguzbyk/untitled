export enum Permission {
  manager = 'manager', assist_manager = 'assist_manager', teacher= 'teacher'
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  permission: Permission;
}
