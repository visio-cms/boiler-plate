import Image from 'next/image';
import { ImageT, RenderRichText } from 'visio-cms';

type PropsT = {
  title: string;
  subTitle: string;
  image: ImageT;
};

export default function MyFirstBlock({ title, subTitle, image }: PropsT) {
  return (
    <div className="text-center md:flex py-10 justify-center">
      <div className="grid p-4 place-items-center mb-3 md:mb-0  md:w-1/2 flex-shrink-0">
        <div className="text-left w-full lg:p-36 ">
          <h1 className="text-4xl pb-5">{title}</h1>
          <RenderRichText htmlContent={subTitle} />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <Image
          src={image?.url || ''}
          alt={image?.alt || ''}
          width={image?.width || 0}
          height={image?.height || 0}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
