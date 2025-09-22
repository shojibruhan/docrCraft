import ContentDisplay from "@/components/ContentDisplay";

const page = ({ params: { subContentId } }) => {
  return <ContentDisplay id={subContentId} />;
};

export default page;
