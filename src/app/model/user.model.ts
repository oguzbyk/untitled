export enum Permission {
  manager, assist_manager, teacher
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  permission: Permission;
}
