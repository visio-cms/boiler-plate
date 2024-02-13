import { type ImageT, RenderRichText } from 'visio-cms';

type HeroProps = {
  title: string;
  subTitle: string;
  color: string;
  initialCount: number;
  backgroundColor: string;
  image: ImageT;
};

const Hero = ({ title, subTitle, color, backgroundColor, image }: HeroProps) => {
  return (
    <div className="tw-relative tw-overflow-hidden tw-bg-white" style={{ background: backgroundColor }}>
      <div className="tw-pb-80 tw-pt-16 sm:tw-pb-40 sm:tw-pt-24 lg:tw-pb-48 lg:tw-pt-40">
        <div className="tw-relative tw-mx-auto tw-max-w-7xl tw-px-4 sm:tw-static sm:tw-px-6 lg:tw-px-8">
          <div className="sm:tw-max-w-lg">
            <h1 className="tw-text-4xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-6xl">{title}</h1>
            <div className="tw-mt-4 tw-text-xl ">
              <RenderRichText htmlContent={subTitle} />
            </div>
          </div>
          <div>
            <div className="tw-mt-10">
              {/* Decorative image tw-grid */}
              <div
                aria-hidden="true"
                className="tw-pointer-events-none lg:tw-absolute lg:tw-inset-y-0 lg:tw-mx-auto lg:tw-w-full lg:tw-max-w-7xl"
              >
                <div className="tw-absolute tw-transform sm:tw-left-1/2 sm:tw-top-0 sm:tw-translate-x-8 lg:tw-left-1/2 lg:tw-top-1/2 lg:tw--translate-y-1/2 lg:tw-translate-x-8">
                  <div className="tw-flex tw-items-center tw-space-x-6 lg:tw-space-x-8">
                    <div className="tw-grid tw-flex-shrink-0 tw-grid-cols-1 tw-gap-y-6 lg:tw-gap-y-8">
                      <div className="tw-h-64 tw-w-44 tw-overflow-hidden tw-rounded-lg sm:tw-opacity-0 lg:tw-opacity-100">
                        <img
                          src={image?.url || ''}
                          alt={image?.alt || ''}
                          className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                        />
                      </div>
                      <div className="tw-h-64 tw-w-44 tw-overflow-hidden tw-rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                          alt=""
                          className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                        />
                      </div>
                    </div>
                    <div className="tw-grid tw-flex-shrink-0 tw-grid-cols-1 tw-gap-y-6 lg:tw-gap-y-8">
                      <div className="tw-h-64 tw-w-44 tw-overflow-hidden tw-rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                          alt=""
                          className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                        />
                      </div>
                      <div className="tw-h-64 tw-w-44 tw-overflow-hidden tw-rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                          alt=""
                          className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                        />
                      </div>
                      <div className="tw-h-64 tw-w-44 tw-overflow-hidden tw-rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                          alt=""
                          className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                        />
                      </div>
                    </div>
                    <div className="tw-grid tw-flex-shrink-0 tw-grid-cols-1 tw-gap-y-6 lg:tw-gap-y-8">
                      <div className="tw-h-64 tw-w-44 tw-overflow-hidden tw-rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                          alt=""
                          className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                        />
                      </div>
                      <div className="tw-h-64 tw-w-44 tw-overflow-hidden tw-rounded-lg">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                          alt=""
                          className="tw-h-full tw-w-full tw-object-cover tw-object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="tw-inline-block tw-rounded-md tw-border tw-border-transparent tw-bg-indigo-600 tw-px-8 tw-py-3 tw-text-center tw-font-medium tw-text-white hover:tw-bg-indigo-700"
                style={{ backgroundColor: color }}
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
