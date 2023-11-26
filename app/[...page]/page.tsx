import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import RenderPage from './renderPage';
import { cookies } from 'next/headers';

interface PageProps {
  params: {
    page: string[];
  };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const slug = `${props.params.page.join('/')}`;
  let res = await fetch(`${process.env.VISIO_END_POINT}/api/pages/${slug}/meta`, {
    next: { revalidate: 0 },
    method: 'GET',
    headers: {
      'x-api-key': `Bearer ${process.env.API_KEY}`,
      'x-project-id': `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
    },
  });
  const meta = await res.json();
  return meta;
}

export default async function Page(props: PageProps) {
  const slug = `${props.params.page.join('/')}`;
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  let res = await fetch(`${process.env.VISIO_END_POINT}/api/pages/${slug}/${token?.value}`, {
    next: { revalidate: 0 },
    method: 'GET',
    headers: {
      'x-api-key': `${process.env.API_KEY}`,
      'x-project-id': `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
    },
  });

  const data = await res.json();

  if (data.error != null) {
    redirect('/404');
  }
  const pageData = data.page;

  return <RenderPage data={pageData?.blocks || []} slug={slug} isValidToken={data.isValidToken} />;
}
