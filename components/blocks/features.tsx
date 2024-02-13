const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
];

export default function Features() {
  return (
    <div className="tw-bg-white">
      <div className="tw-mx-auto tw-grid tw-max-w-2xl tw-grid-cols-1 tw-items-center tw-gap-x-8 tw-gap-y-16 tw-px-4 tw-py-24 sm:tw-px-6 sm:tw-py-32 lg:tw-max-w-7xl lg:tw-grid-cols-2 lg:tw-px-8">
        <div>
          <h2 className="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-4xl">
            Technical Specifications
          </h2>
          <p className="tw-mt-4 tw-text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
          </p>

          <dl className="tw-mt-16 tw-grid tw-grid-cols-1 tw-gap-x-6 tw-gap-y-10 sm:tw-grid-cols-2 sm:tw-gap-y-16 lg:tw-gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="tw-border-t tw-border-gray-200 tw-pt-4">
                <dt className="tw-font-medium tw-text-gray-900">{feature.name}</dt>
                <dd className="tw-mt-2 tw-text-sm tw-text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-grid-rows-2 tw-gap-4 sm:tw-gap-6 lg:tw-gap-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="tw-rounded-lg tw-bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="tw-rounded-lg tw-bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="tw-rounded-lg tw-bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="tw-rounded-lg tw-bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
