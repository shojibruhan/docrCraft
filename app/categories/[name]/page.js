import ContentDisplay from "@/components/ContentDisplay";
import { getDocments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-utils";

const CategoryPage = ({ params: { name } }) => {
  const docs = getDocments();
  const matchDocuments = getDocumentsByCategory(docs, name);

  return <ContentDisplay id={matchDocuments[0].id} />;
};

export default CategoryPage;
