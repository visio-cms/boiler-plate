import { ImageT, LinkT } from 'visio-cms';
import Image from 'next/image';

type CollectionsT = {
  title: string;
  headline: string;
  image: ImageT;
  key: string;
  link: LinkT;
};

export default function Collections({ collections, title }: { collections: CollectionsT[]; title: string }) {
  return (
    <div className="tw-bg-gray-100">
      <div className="tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-px-6 lg:tw-px-8">
        <div className="tw-mx-auto tw-max-w-2xl tw-py-16 sm:tw-py-24 lg:tw-max-w-none lg:tw-py-32">
          <h2 className="tw-text-2xl tw-font-bold tw-text-gray-900">{title}</h2>

          <div className="tw-mt-6 tw-space-y-12 lg:tw-grid lg:tw-grid-cols-3 lg:tw-gap-x-6 lg:tw-space-y-0">
            {collections.map((collection) => (
              <div key={collection.key} className="group tw-relative">
                <div className="tw-relative tw-h-80 tw-w-full tw-overflow-hidden tw-rounded-lg tw-bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:tw-opacity-75 sm:tw-h-64">
                  <Image
                    src={collection.image?.url || ''}
                    alt={collection.image?.alt || ''}
                    fill
                    className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                  />
                </div>
                <h3 className="tw-mt-6 tw-text-sm tw-text-gray-500">
                  <a href={collection?.link?.url} target={collection?.link?.target}>
                    <span className="tw-absolute tw-inset-0" />
                    {collection.headline}
                  </a>
                </h3>
                <p className="tw-text-base tw-font-semibold tw-text-gray-900">{collection.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
