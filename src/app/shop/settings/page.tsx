import { getTranslations } from 'next-intl/server';

export const metadata = { title: 'Shop Settings' };

export default async function ShopSettingsPage() {
  const t = await getTranslations('Settings');
  const ts = await getTranslations('System');

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <p className="text-muted-foreground text-sm mt-1">Configure your shop</p>
      </div>

      {/* Shop info */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <h2 className="font-semibold">Shop Information</h2>
        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">Shop Name</label>
            <input type="text" className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Subdomain</label>
            <div className="flex items-center">
              <input type="text" placeholder="myshop"
                className="flex-1 px-3 py-2 text-sm rounded-s-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
              <span className="px-3 py-2 text-sm bg-muted border border-s-0 border-input rounded-e-lg text-muted-foreground">
                .yourdomain.com
              </span>
            </div>
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
          {ts('save')}
        </button>
      </div>

      {/* Danger zone */}
      <div className="bg-card border border-destructive/30 rounded-xl p-6 space-y-3">
        <h2 className="font-semibold text-destructive">Danger Zone</h2>
        <p className="text-sm text-muted-foreground">Permanently delete this shop and all its data.</p>
        <button className="px-4 py-2 rounded-lg bg-destructive text-destructive-foreground text-sm font-semibold hover:bg-destructive/90 transition-colors">
          Delete Shop
        </button>
      </div>
    </div>
  );
}
