'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  LayoutDashboard, Users, ShieldCheck, Settings,
  Store, Package, ShoppingCart, ChevronLeft, ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  labelKey: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  variant: 'admin' | 'shop';
}

const ADMIN_NAV: NavItem[] = [
  { href: '/admin',          labelKey: 'dashboard', icon: <LayoutDashboard size={18} /> },
  { href: '/admin/users',    labelKey: 'users',     icon: <Users size={18} /> },
  { href: '/admin/roles',    labelKey: 'roles',     icon: <ShieldCheck size={18} /> },
  { href: '/admin/settings', labelKey: 'settings',  icon: <Settings size={18} /> },
];

const SHOP_NAV: NavItem[] = [
  { href: '/shop',           labelKey: 'dashboard', icon: <LayoutDashboard size={18} /> },
  { href: '/shop/orders',    labelKey: 'orders',    icon: <ShoppingCart size={18} /> },
  { href: '/shop/products',  labelKey: 'products',  icon: <Package size={18} /> },
  { href: '/shop/settings',  labelKey: 'settings',  icon: <Settings size={18} /> },
];

export default function Sidebar({ variant }: SidebarProps) {
  const t = useTranslations('Menu');
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const nav = variant === 'admin' ? ADMIN_NAV : SHOP_NAV;
  const label = variant === 'admin' ? 'Admin' : 'Shop';

  return (
    <aside className={cn(
      'hidden md:flex flex-col border-e border-border bg-card transition-all duration-200 shrink-0',
      collapsed ? 'w-16' : 'w-56'
    )}>
      {/* Logo */}
      <div className={cn('h-16 flex items-center border-b border-border px-4 gap-3 shrink-0', collapsed && 'justify-center px-2')}>
        <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black text-sm shrink-0">
          {variant === 'admin' ? 'A' : <Store size={15} />}
        </div>
        {!collapsed && <span className="font-bold text-sm truncate">{label}</span>}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-1">
        {nav.map((item) => {
          const isActive = item.href === (variant === 'admin' ? '/admin' : '/shop')
            ? pathname === item.href
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? t(item.labelKey as any) : undefined}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                collapsed && 'justify-center px-2'
              )}
            >
              <span className="shrink-0">{item.icon}</span>
              {!collapsed && <span>{t(item.labelKey as any)}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <div className="border-t border-border p-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-muted-foreground hover:bg-accent transition-colors',
            collapsed && 'justify-center px-2'
          )}
        >
          {collapsed ? <ChevronRight size={16} /> : <><ChevronLeft size={16} /><span>Collapse</span></>}
        </button>
      </div>
    </aside>
  );
}
