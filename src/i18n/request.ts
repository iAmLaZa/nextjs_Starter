import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import path from 'path';
import fs from 'fs/promises';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get('lang')?.value || 'en';
  const supported = ['en', 'fr', 'ar'];
  const selected = supported.includes(locale) ? locale : 'en';

  const messagesPath = path.join(process.cwd(), 'messages', `${selected}.json`);
  const messages = JSON.parse(await fs.readFile(messagesPath, 'utf-8'));

  return { locale: selected, messages };
});