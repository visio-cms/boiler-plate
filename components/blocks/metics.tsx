type MetricsT = {
  figure: string | undefined;
  caption: string | undefined;
  key: string | undefined;
};
export default function Metrics({ metrics }: { metrics: MetricsT[] }) {
  return (
    <div className="tw-bg-white tw-py-24 sm:tw-py-32">
      <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
        <dl className="tw-flex tw-flex-wrap tw-gap-2 tw-justify-center tw-text-center">
          {metrics.map((stat) => (
            <div key={stat?.key || ''} className="tw-mx-auto tw-flex tw-max-w-xs tw-flex-col tw-gap-y-4">
              <dt className="tw-text-base tw-leading-7 tw-text-gray-600">{stat?.caption || ''}</dt>
              <dd className="tw-order-first tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-gray-900 sm:tw-text-5xl">
                {stat?.figure || ''}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
