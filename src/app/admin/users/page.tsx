import { getTranslations } from 'next-intl/server';

export const metadata = { title: 'Users' };

export default async function UsersPage() {
  const t = await getTranslations('Users');
  const ts = await getTranslations('System');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t('title')}</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage platform users</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
          + {t('adduser')}
        </button>
      </div>

      {/* Search */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder={`${ts('search')}...`}
          className="flex-1 max-w-sm px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-muted/40">
            <tr>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t('username')}</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t('email')}</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{t('roles')}</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{ts('options')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="px-4 py-12 text-center text-muted-foreground">
                Connect your data source to display users
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
