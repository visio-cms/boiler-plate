import Image from 'next/image';
import { ImageT, RenderRichText } from 'visio-cms';

type PropsT = {
  title: string;
  subTitle: string;
  image: ImageT;
  alignment: string;
};

export default function MyFirstBlock({ title, alignment, subTitle, image }: PropsT) {
  return (
    <div
      className="tw-text-center md:tw-flex tw-py-10 tw-justify-center"
      style={{ flexDirection: alignment == 'right' ? 'row-reverse' : 'row' }}
    >
      <div className="tw-grid tw-p-4 tw-place-items-center tw-mb-3 md:tw-mb-0  md:tw-w-1/2 tw-flex-shrink-0">
        <div className="tw-text-left tw-w-full lg:tw-p-36 ">
          <h1 className="tw-text-4xl tw-pb-5">{title}</h1>
          <RenderRichText htmlContent={subTitle} />
        </div>
      </div>
      <div className="tw-w-full md:tw-w-1/2 tw-p-4">
        <Image
          src={image?.url || ''}
          alt={image?.alt || ''}
          width={image?.width || 0}
          height={image?.height || 0}
          className="tw-rounded-md"
        />
      </div>
    </div>
  );
}
