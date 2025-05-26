export function VideoTitle({ title, limitHeight, limitSize }) {
  return (
    <h1
      className={`max-w-md font-semibold leading-6 text-gray-100 group-hover:text-gray-200 ${
        limitSize ? "text-base" : "text-lg"
      } ${limitHeight ? "max-h-12 w-full overflow-hidden" : ""}`}
    >
      {title}
    </h1>
  );
}

export function VideoDescription({ description }) {
  return (
    <p className="mt-2 h-5 max-w-md overflow-hidden text-sm leading-6 text-gray-600">
      {description}
    </p>
  );
}
