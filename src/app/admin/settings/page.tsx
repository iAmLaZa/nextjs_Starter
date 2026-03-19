import { getTranslations } from 'next-intl/server';

export const metadata = { title: 'Settings' };

export default async function AdminSettingsPage() {
  const t = await getTranslations('Settings');
  const ts = await getTranslations('System');

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage your account settings</p>
      </div>

      {/* Profile section */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <h2 className="font-semibold">{t('personalinfo')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">{t('username')}</label>
            <input type="text" className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">{t('email')}</label>
            <input type="email" className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
          {ts('save')}
        </button>
      </div>

      {/* Password section */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <h2 className="font-semibold">{t('resetpassword')}</h2>
        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">{t('currentpassword')}</label>
            <input type="password" className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">{t('newpassword')}</label>
            <input type="password" className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
          {ts('update')}
        </button>
      </div>
    </div>
  );
}
