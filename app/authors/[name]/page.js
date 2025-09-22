import ContentDisplay from "@/components/ContentDisplay";
import { getDocments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-utils";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocments();
  const matchDocuments = getDocumentsByAuthor(docs, name);
  return <ContentDisplay id={matchDocuments[0].id} />;
};

export default AuthorPage;
