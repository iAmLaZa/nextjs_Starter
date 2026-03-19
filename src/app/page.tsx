import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import LanguageSwitcher from '@/components/shared/language-switcher';
import ThemeToggle from '@/components/shared/theme-toggle';

export default async function LandingPage() {
  const t = await getTranslations('Header');
  const ts = await getTranslations('System');

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">

      {/* ── Navbar ─────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl shrink-0">
            <span className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-black text-sm">S</span>
            <span className="hidden sm:inline">ShopManager</span>
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link href="/auth/login" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-accent transition-colors">
              {t('login')}
            </Link>
            <Link href="/auth/register" className="px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              {ts('register')}
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────── */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-28 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      </section>

      {/* ── Features ───────────────────────────────── */}
      <section className="bg-muted/30 border-y border-border py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">Everything you need to manage your shops</h2>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────── */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} LaZa. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
