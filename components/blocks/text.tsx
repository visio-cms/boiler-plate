import { RenderRichText } from 'visio-cms';

export default function Text({ content }: { content: string }) {
  return <RenderRichText htmlContent={content} />;
}
