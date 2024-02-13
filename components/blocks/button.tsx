export default function ButtonBlock({ text }: { text: string }) {
  return (
    <a
      href="#"
      className="tw-inline-block tw-rounded-md tw-border tw-border-transparent tw-bg-indigo-600 tw-px-8 tw-py-3 tw-text-center tw-font-medium tw-text-white hover:tw-bg-indigo-700"
    >
      {text}
    </a>
  );
}