import { getTranslations } from 'next-intl/server';

export const metadata = { title: 'Admin Dashboard' };

export default async function AdminPage() {
  const ts = await getTranslations('System');

  const stats = [
    { label: 'Total Shops',  value: '—', icon: '🏪', change: '—', up: true },
    { label: ts('users'),    value: '—', icon: '👥', change: '—', up: true },
    { label: 'Total Orders', value: '—', icon: '📦', change: '—', up: true },
    { label: 'Revenue',      value: '—', icon: '💰', change: '—', up: true },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{ts('dashboard')}</h1>
        <p className="text-muted-foreground text-sm mt-1">Platform overview</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-5 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <span className="text-lg">{s.icon}</span>
            </div>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.change}</p>
          </div>
        ))}
      </div>
      <div className="bg-card border border-border rounded-xl p-6 h-64 flex items-center justify-center text-muted-foreground text-sm">
        📊 Connect recharts for charts
      </div>
    </div>
  );
}
