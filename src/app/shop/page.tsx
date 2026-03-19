import { getTranslations } from 'next-intl/server';

export const metadata = { title: 'Shop Dashboard' };

export default async function ShopPage() {
  const ts = await getTranslations('System');

  const stats = [
    { label: "Today's Orders",   value: '—', icon: '📦', up: true },
    { label: "Revenue Today",    value: '—', icon: '💰', up: true },
    { label: 'Total Products',   value: '—', icon: '🛍️', up: true },
    { label: 'Pending Orders',   value: '—', icon: '⏳', up: false },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{ts('dashboard')}</h1>
        <p className="text-muted-foreground text-sm mt-1">Your shop overview</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-5 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <span className="text-lg">{s.icon}</span>
            </div>
            <p className="text-2xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>
      {/* Chart placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-xl p-6 h-56 flex items-center justify-center text-muted-foreground text-sm">
          📊 Orders chart — connect recharts
        </div>
        <div className="bg-card border border-border rounded-xl p-6 h-56 flex items-center justify-center text-muted-foreground text-sm">
          📈 Revenue chart — connect recharts
        </div>
      </div>
    </div>
  );
}
