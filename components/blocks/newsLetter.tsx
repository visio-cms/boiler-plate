import { CalendarDaysIcon, HandIcon } from 'lucide-react';

export default function NewsLetter() {
  return (
    <div className="tw-relative isolate tw-overflow-hidden tw-bg-gray-900 tw-py-16 sm:tw-py-24 lg:tw-py-32">
      <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
        <div className="tw-mx-auto tw-grid tw-max-w-2xl tw-grid-cols-1 tw-gap-x-8 tw-gap-y-16 lg:tw-max-w-none lg:tw-grid-cols-2">
          <div className="tw-max-w-xl lg:tw-max-w-lg">
            <h2 className="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="tw-mt-4 tw-text-lg tw-leading-8 tw-text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
              dolore.
            </p>
            <div className="tw-mt-6 tw-flex tw-max-w-md tw-gap-x-4">
              <label htmlFor="email-address" className="tw-sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="tw-min-w-0 tw-flex-auto tw-rounded-md tw-border-0 bg-white/5 tw-px-3.5 tw-py-2 tw-text-white tw-shadow-sm tw-ring-1 tw-ring-inset ring-white/10 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-500 sm:tw-text-sm sm:tw-leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="tw-flex-none tw-rounded-md tw-bg-indigo-500 tw-px-3.5 tw-py-2.5 tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="tw-grid tw-grid-cols-1 tw-gap-x-8 tw-gap-y-10 sm:tw-grid-cols-2 lg:tw-pt-2">
            <div className="tw-flex tw-flex-col tw-items-start">
              <div className="tw-rounded-md bg-white/5 tw-p-2 tw-ring-1 ring-white/10">
                <CalendarDaysIcon className="tw-h-6 tw-w-6 tw-text-white" aria-hidden="true" />
              </div>
              <dt className="tw-mt-4 tw-font-semibold tw-text-white">Weekly articles</dt>
              <dd className="tw-mt-2 tw-leading-7 tw-text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
              </dd>
            </div>
            <div className="tw-flex tw-flex-col tw-items-start">
              <div className="tw-rounded-md bg-white/5 tw-p-2 tw-ring-1 ring-white/10">
                <HandIcon className="tw-h-6 tw-w-6 tw-text-white" aria-hidden="true" />
              </div>
              <dt className="tw-mt-4 tw-font-semibold tw-text-white">No spam</dt>
              <dd className="tw-mt-2 tw-leading-7 tw-text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="tw-absolute tw-left-1/2 tw-top-0 tw--z-10 tw--translate-x-1/2 blur-3xl xl:tw--top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] tw-bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] tw-opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
