import { getDocmentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocmentContent(id);
  console.log(documentContent);
  return (
    <article className="prose dark:porse-invert">
      <h1>{documentContent.title}</h1>
      <div>
        <span>Published On: {documentContent.date}</span> by{" "}
        <Link
          href={`/authors/${documentContent.author}`}
          className="text-green-600 font-semibold"
        >
          {documentContent.author}
        </Link>{" "}
        under the{" "}
        <Link
          href={`/categories/${documentContent.category}`}
          className="text-green-600 font-semibold"
        >
          {documentContent.category}
        </Link>{" "}
        category.
      </div>
      <div>
        {documentContent.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      />
    </article>
  );
};

export default ContentDisplay;
