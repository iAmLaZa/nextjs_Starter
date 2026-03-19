import { getTranslations } from 'next-intl/server';

export const metadata = { title: 'Orders' };

export default async function OrdersPage() {
  const ts = await getTranslations('System');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Orders</h1>
          <p className="text-muted-foreground text-sm mt-1">Track and manage shop orders</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
          + {ts('create')} Order
        </button>
      </div>

      {/* Filter bar */}
      <div className="flex gap-2 flex-wrap">
        {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((status) => (
          <button key={status}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              status === 'All'
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border text-muted-foreground hover:bg-accent'
            }`}>
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-muted/40">
            <tr>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Order ID</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Customer</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Amount</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">Status</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{ts('date')}</th>
              <th className="text-start px-4 py-3 font-medium text-muted-foreground">{ts('options')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="px-4 py-12 text-center text-muted-foreground">
                Connect your data source to display orders
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
