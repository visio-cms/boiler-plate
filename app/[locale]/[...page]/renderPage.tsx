'use client';
import registeredBlocks from '@/components/blocks_registry';
import { JWTPayload } from 'jose';
import { RenderPageContent, EditPageButton, type PageBlock, type GlobalBlock } from 'visio-cms';

const RenderPage = ({
  data,
  isValidToken,
  slug,
  locale,
}: {
  data: PageBlock[];
  isValidToken: JWTPayload | null;
  slug: string;
  locale: string;
}) => {
  return (
    <>
      {isValidToken && <EditPageButton slug={slug} />}
      <RenderPageContent locale={locale} data={data} registeredBlocks={registeredBlocks} />
    </>
  );
};

export default RenderPage;
