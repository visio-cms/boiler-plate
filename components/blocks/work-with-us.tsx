import { ImageT } from 'visio-cms';

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
];
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
];

export default function WorkWithUs({ backgroundImage, date }: { backgroundImage: ImageT; date: string }) {
  return (
    <div className="tw-relative isolate tw-overflow-hidden tw-bg-gray-900 tw-py-24 sm:tw-py-32">
      <img
        src={
          backgroundImage?.url ||
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'
        }
        alt=""
        className="tw-absolute tw-inset-0 tw--z-10 tw-h-full tw-w-full tw-object-cover tw-object-right md:tw-object-center"
      />
      <div
        className="tw-hidden sm:tw-absolute sm:tw--top-10 sm:tw-right-1/2 sm:tw--z-10 sm:tw-mr-10 sm:tw-block sm:tw-transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] tw-bg-gradient-to-tr from-[#ff4694] to-[#776fff] tw-opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="tw-absolute tw--top-52 tw-left-1/2 tw--z-10 tw--translate-x-1/2 tw-transform-gpu blur-3xl sm:top-[-28rem] sm:tw-ml-16 sm:tw-translate-x-0 sm:tw-transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] tw-bg-gradient-to-tr from-[#ff4694] to-[#776fff] tw-opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="tw-mx-auto tw-max-w-7xl tw-px-6 lg:tw-px-8">
        <div className="tw-mx-auto tw-max-w-2xl lg:tw-mx-0">
          <h2 className="tw-text-4xl tw-font-bold tw-tracking-tight tw-text-white sm:tw-text-6xl">Work with us</h2>
          <p className="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
          <p className="tw-mt-6 tw-text-lg tw-leading-8 tw-text-gray-300"> {new Date(date).toDateString()}</p>
        </div>
        <div className="tw-mx-auto tw-mt-10 tw-max-w-2xl lg:tw-mx-0 lg:tw-max-w-none">
          <div className="tw-grid tw-grid-cols-1 tw-gap-x-8 tw-gap-y-6 tw-text-base tw-font-semibold tw-leading-7 tw-text-white sm:tw-grid-cols-2 md:tw-flex lg:tw-gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="tw-mt-16 tw-grid tw-grid-cols-1 tw-gap-8 sm:tw-mt-20 sm:tw-grid-cols-2 lg:tw-grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="tw-flex tw-flex-col-reverse">
                <dt className="tw-text-base tw-leading-7 tw-text-gray-300">{stat.name}</dt>
                <dd className="tw-text-2xl tw-font-bold tw-leading-9 tw-tracking-tight tw-text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
