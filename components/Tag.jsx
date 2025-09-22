import Link from "next/link";

const Tag = ({ tag }) => {
  return (
    <Link
      key={tag}
      href={`/tags/${tag}`}
      className="bg-gray-200 rounded-md mr-2 text-xs text-green-600 font-semibold no-underline p-1"
    >
      <span className="">{tag}</span>
    </Link>
  );
};

export default Tag;
