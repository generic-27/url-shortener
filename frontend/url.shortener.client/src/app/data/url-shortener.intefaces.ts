export interface NavigationItem {
  readonly label: string;
  readonly route: string;
  readonly icon: string;
}

export interface User {
  readonly id: string;
  readonly username: string;
  readonly email?: string;
}
