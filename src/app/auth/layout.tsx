import Link from 'next/link';
import LanguageSwitcher from '@/components/shared/language-switcher';
import ThemeToggle from '@/components/shared/theme-toggle';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="h-14 flex items-center justify-between px-6 border-b border-border/50">
        <Link href="/" className="flex items-center gap-2 font-bold text-sm">
          <span className="size-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-black text-xs">S</span>
          ShopManager
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-10">{children}</div>
    </div>
  );
}
