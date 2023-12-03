'use client';

import registeredBlocks from '@/components/blocks_registry';
import { Builder, type BuilderProps } from 'visio-cms';

const VisioBuilderPage = ({
  slug,
  apiKey,
}: Partial<BuilderProps> & {
  apiKey: string;
}) => {
  return (
    <Builder
      slug={slug || ''}
      registeredBlocks={registeredBlocks}
      apiKey={apiKey}
      projectId={process.env.NEXT_PUBLIC_PROJECT_ID || ''}
    />
  );
};

export default VisioBuilderPage;
