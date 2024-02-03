import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import RenderPage from './renderPage';

interface PageProps {
  params: {
    page: string[];
  };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const slug = `${props.params.page.join('/')}`;
  const headersList = headers();
  let res = await fetch(`${process.env.VISIO_END_POINT}/api/pages/${slug}/meta`, {
    next: { revalidate: 0 },
    method: 'GET',
    headers: {
      'x-api-key': `Bearer ${process.env.API_KEY}`,
      'x-project-id': `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
    },
  });
  const meta = await res.json();
  const url = new URL(headersList.get('referer') || 'http://localhost:3000');

  return {
    metadataBase: new URL(meta?.origin || 'http://localhost:3000'),
    ...meta,
    openGraph: { ...meta?.openGraph, url: url.origin },
  };
}

export default async function Page(props: PageProps) {
  const slug = `${props.params.page.join('/')}`;
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  // const filter = {
  //   slug: '/index-5287-7640-9103',
  // };
  // let res = await fetch(`${process.env.VISIO_END_POINT}/api/pages?filter=${JSON.stringify(filter)}`, {
  //   next: { revalidate: 0 },
  //   method: 'GET',
  //   headers: {
  //     'x-api-key': `${process.env.API_KEY}`,
  //     'x-project-id': `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
  //   },
  // });
  // const data = await res.json();
  // console.log(data);

  // return <div>Hello</div>;

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

  return (
    <RenderPage data={pageData?.blocks || []} globals={data?.globals} slug={slug} isValidToken={data.isValidToken} />
  );
}
