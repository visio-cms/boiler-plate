import { ChevronDownIcon, Subtitles } from 'lucide-react';

export default function ContactForm({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <div className="isolate tw-bg-white tw-px-6 tw-py-24 sm:tw-py-32 lg:tw-px-8 tw-relative tw-overflow-hidden">
      <div
        className="tw-absolute tw-inset-x-0 top-[-10rem] tw--z-10 tw-transform-gpu tw-overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="tw-relative tw-left-1/2 tw--z-10 aspect-[1155/678] w-[36.125rem] tw-max-w-none tw--translate-x-1/2 rotate-[30deg] tw-bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] tw-opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="tw-mx-auto tw-max-w-2xl tw-text-center">
        <h2 className="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900 sm:tw-text-4xl">{title}</h2>
        <p className="tw-mt-2 tw-text-lg tw-leading-8 tw-text-gray-600">{subTitle}</p>
      </div>
      <form action="#" method="POST" className="tw-mx-auto tw-mt-16 tw-max-w-xl sm:tw-mt-20">
        <div className="tw-grid tw-grid-cols-1 tw-gap-x-8 tw-gap-y-6 sm:tw-grid-cols-2">
          <div>
            <label htmlFor="first-name" className="tw-block tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">
              First name
            </label>
            <div className="tw-mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="tw-block tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">
              Last name
            </label>
            <div className="tw-mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
              />
            </div>
          </div>
          <div className="sm:tw-col-span-2">
            <label htmlFor="company" className="tw-block tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">
              Company
            </label>
            <div className="tw-mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
              />
            </div>
          </div>
          <div className="sm:tw-col-span-2">
            <label htmlFor="email" className="tw-block tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">
              Email
            </label>
            <div className="tw-mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
              />
            </div>
          </div>
          <div className="sm:tw-col-span-2">
            <label
              htmlFor="phone-number"
              className="tw-block tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900"
            >
              Phone number
            </label>
            <div className="tw-relative tw-mt-2.5">
              <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center">
                <label htmlFor="country" className="tw-sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="tw-h-full tw-rounded-md tw-border-0 tw-bg-transparent tw-bg-none tw-py-0 tw-pl-4 tw-pr-9 tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="tw-pointer-events-none tw-absolute tw-right-3 tw-top-0 tw-h-full tw-w-5 tw-text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-pl-20 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
              />
            </div>
          </div>
          <div className="sm:tw-col-span-2">
            <label htmlFor="message" className="tw-block tw-text-sm tw-font-semibold tw-leading-6 tw-text-gray-900">
              Message
            </label>
            <div className="tw-mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-px-3.5 tw-py-2 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="tw-mt-10">
          <button
            type="submit"
            className="tw-block tw-w-full tw-rounded-md tw-bg-indigo-600 tw-px-3.5 tw-py-2.5 tw-text-center tw-text-sm tw-font-semibold tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let us talk
          </button>
        </div>
      </form>
    </div>
  );
}
