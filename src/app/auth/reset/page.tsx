import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export const metadata = { title: 'Reset Password' };

export default async function ResetPage() {
  const t = await getTranslations('Settings');
  const ts = await getTranslations('System');

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center space-y-2">
        <div className="size-12 rounded-xl bg-primary mx-auto flex items-center justify-center text-primary-foreground font-black text-lg">S</div>
        <h1 className="text-2xl font-bold">{t('resetpassword')}</h1>
        <p className="text-muted-foreground text-sm">Enter your email to receive a reset link</p>
      </div>
      <div className="bg-card border border-border rounded-2xl p-6 space-y-4 shadow-sm">
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('email')}</label>
          <input type="email" placeholder="you@example.com"
            className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <button className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
          {ts('reset')}
        </button>
      </div>
      <p className="text-center text-sm">
        <Link href="/auth/login" className="text-primary font-medium hover:underline">← {ts('backtologin')}</Link>
      </p>
    </div>
  );
}
