import BuilderBlocks from './builderBlocks';

interface PageProps {
  searchParams: {
    page: string;
  };
}
const PreviewPage = async (props: PageProps) => {
  let slug = `${props.searchParams.page}`;

  return <BuilderBlocks slug={slug} apiKey={process.env.API_KEY || ''} />;
};

export default PreviewPage;
