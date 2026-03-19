'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/shared/language-switcher';
import ThemeToggle from '@/components/shared/theme-toggle';
import { Bell } from 'lucide-react';

interface TopbarProps {
  title?: string;
}

export default function Topbar({ title }: TopbarProps) {
  const ts = useTranslations('System');

  return (
    <header className="h-16 border-b border-border bg-card/60 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 shrink-0">
      <div className="text-sm font-semibold text-foreground">{title || ts('dashboard')}</div>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
        <button className="size-9 rounded-lg border border-border flex items-center justify-center hover:bg-accent transition-colors text-muted-foreground hover:text-foreground relative">
          <Bell size={16} />
        </button>
        <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary cursor-pointer hover:bg-primary/30 transition-colors">
          U
        </div>
      </div>
    </header>
  );
}
