'use client';
import registeredBlocks from '@/components/blocks_registry';
import { JWTPayload } from 'jose';
import { RenderPageContent, EditPageButton, type PageBlock, type GlobalBlock } from 'visio-cms';

const RenderPage = ({
  data,
  isValidToken,
  slug,
  globals,
}: {
  data: PageBlock[];
  isValidToken: JWTPayload | null;
  slug: string;
  globals: GlobalBlock[];
}) => {
  return (
    <>
      {isValidToken && <EditPageButton slug={slug} />}
      <RenderPageContent globals={globals} data={data} registeredBlocks={registeredBlocks} />
    </>
  );
};

export default RenderPage;
