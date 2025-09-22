import ContentDisplay from "@/components/ContentDisplay";
import { getDocments } from "@/lib/doc";
import { getDocumentsByTags } from "@/utils/doc-utils";
const TagPage = ({ params: { name } }) => {
  const docs = getDocments();
  const matchDocuments = getDocumentsByTags(docs, name);
  return <ContentDisplay id={matchDocuments[0].id} />;
};

export default TagPage;
