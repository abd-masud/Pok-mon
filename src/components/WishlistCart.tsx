import useCount from "@/reactQueryHooks/useCount";

export const Counter = () => {
  const { count, AddToCard} = useCount();

  return (
    <main className="flex justify-center">
      <div className="p-10 border-2 border-black/30 bg-white shadow-xl m-40">
        <div className="mb-10">Count : {count}</div>

        <div>
          <button
            className="bg-lime-700 hover:bg-lime-600 px-5 py-2 rounded text-white transition mr-2"
            onClick={() => AddToCard()}
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  );
};