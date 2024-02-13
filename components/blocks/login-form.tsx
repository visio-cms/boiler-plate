export default function LoginForm() {
  return (
    <>
      <div className="tw-flex tw-min-h-full tw-flex-1 tw-flex-col tw-justify-center tw-px-6 tw-py-12 lg:tw-px-8">
        <div className="sm:tw-mx-auto sm:tw-w-full sm:tw-max-w-sm">
          <img
            className="tw-mx-auto tw-h-10 tw-w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="tw-mt-10 tw-text-center tw-text-2xl tw-font-bold tw-leading-9 tw-tracking-tight tw-text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="tw-mt-10 sm:tw-mx-auto sm:tw-w-full sm:tw-max-w-sm">
          <form className="tw-space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900">
                Email address
              </label>
              <div className="tw-mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                />
              </div>
            </div>

            <div>
              <div className="tw-flex tw-items-center tw-justify-between">
                <label htmlFor="password" className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900">
                  Password
                </label>
                <div className="tw-text-sm">
                  <a href="#" className="tw-font-semibold tw-text-indigo-600 hover:tw-text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="tw-mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="tw-flex tw-w-full tw-justify-center tw-rounded-md tw-bg-indigo-600 tw-px-3 tw-py-1.5 tw-text-sm tw-font-semibold tw-leading-6 tw-text-white tw-shadow-sm hover:tw-bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="tw-mt-10 tw-text-center tw-text-sm tw-text-gray-500">
            Not a member?{' '}
            <a href="#" className="tw-font-semibold tw-leading-6 tw-text-indigo-600 hover:tw-text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
