export interface User {
  id: number;
  username: string;
  role: 'Admin' | 'Employee';
}