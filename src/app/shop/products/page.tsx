import { getTranslations } from 'next-intl/server';

export const metadata = { title: 'Products' };

export default async function ProductsPage() {
  const ts = await getTranslations('System');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-muted-foreground text-sm mt-1">Manage your shop products</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
          + {ts('create')} Product
        </button>
      </div>

      {/* Search & filter */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder={`${ts('search')} products...`}
          className="flex-1 max-w-sm px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <select className="px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring">
          <option>{ts('all')}</option>
          <option>Active</option>
          <option>Draft</option>
        </select>
      </div>

      {/* Grid placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="h-40 bg-muted/50 flex items-center justify-center text-2xl">🛍️</div>
            <div className="p-4 space-y-1">
              <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
              <div className="h-3 bg-muted rounded w-1/2 animate-pulse mt-2" />
              <div className="h-3 bg-muted rounded w-1/3 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground">Connect your data source to display products</p>
    </div>
  );
}
