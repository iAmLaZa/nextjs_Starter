export type Locale = 'en' | 'fr' | 'ar';


//exemples of types for a shop management system
export interface Shop {
  id: string;
  name: string;
  slug: string;          
  customDomain?: string;
  ownerId: string;
  createdAt: Date;
}

export interface User {
  id: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  isAdmin: boolean;
  shopId?: string;
  roles: Role[];
}

export interface Role {
  id: string;
  name: string;
  permissions: Permission[];
}

export type Permission =
  | 'admin:access'
  | 'users:view' | 'users:create' | 'users:update' | 'users:delete'
  | 'roles:view' | 'roles:create' | 'roles:update' | 'roles:delete'
  | 'shop:access'
  | 'orders:view' | 'orders:create' | 'orders:update' | 'orders:delete'
  | 'products:view' | 'products:create' | 'products:update' | 'products:delete';
