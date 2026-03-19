import { getTranslations } from 'next-intl/server';

export const metadata = { title: 'Roles' };

export default async function RolesPage() {
  const t = await getTranslations('Roles');
  const ts = await getTranslations('System');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t('title')}</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage roles and permissions</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
          + {t('addrole')}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Role card placeholder */}
        {['Admin', 'Shop Manager', 'Staff'].map((role) => (
          <div key={role} className="bg-card border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{role}</h3>
              <div className="flex gap-1">
                <button className="px-2 py-1 text-xs rounded border border-border hover:bg-accent transition-colors">{ts('edit')}</button>
                <button className="px-2 py-1 text-xs rounded border border-destructive text-destructive hover:bg-destructive/10 transition-colors">{ts('delete')}</button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">0 {ts('users')}</p>
            <div className="flex flex-wrap gap-1">
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">view</span>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">create</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
