export default function Loading() {
  return (
    <div className="mx-auto max-w-fit rounded-md bg-white p-6 shadow-md dark:bg-[#657287]">
      <div className="animate-pulse *:rounded-lg *:bg-gray-300 dark:*:bg-[#9FADC2]">
        <div className="mb-6 h-48 w-[300px] md:h-52"></div>
        <div className="mb-4 h-4 w-[290px]"></div>
        <div className="mb-4 h-4 w-[220px]"></div>
        <div className="mb-4 h-4 w-[200px]"></div>
      </div>
    </div>
  );
}
