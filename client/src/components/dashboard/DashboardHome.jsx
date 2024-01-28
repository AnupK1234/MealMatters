import {
  MdHandshake,
  MdMapsHomeWork,
  MdPeople,
  MdShoppingCart,
} from "react-icons/md";

const DashboardHome = () => {
  return (
    <main className="h-full w-full py-8 px-16 flex flex-col overflow-y-auto ">
      <h2 className="text-start text-4xl font-semibold py-4">Dashboard</h2>
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-12 mt-4">
        <div className="w-full aspect-video rounded-lg bg-white shadow-md p-2 flex items-center justify-center">
          <div className="flex gap-1 items-center justify-center">
            <MdPeople size={80} className="p-4 bg-sky-300/20 rounded-full" />
            <p className="text-2xl font-semibold">
              Students <span className="font-bold text-sky-600">{"79"}</span>
            </p>
          </div>
        </div>

        <div className="w-full aspect-video rounded-lg bg-white shadow-md p-2 flex items-center justify-center">
          <div className="flex gap-1 items-center justify-center">
            <MdHandshake size={80} className="p-4 bg-sky-300/20 rounded-full" />
            <p className="text-2xl font-semibold">
              Donors <span className="font-bold text-sky-600">{"20"}</span>
            </p>
          </div>
        </div>

        <div className="w-full aspect-video rounded-lg bg-white shadow-md p-2 flex items-center justify-center">
          <div className="flex gap-1 items-center justify-center">
            <MdMapsHomeWork
              size={80}
              className="p-4 bg-sky-300/20 rounded-full"
            />
            <p className="text-2xl font-semibold">
              Cities <span className="font-bold text-sky-600">{"20"}</span>
            </p>
          </div>
        </div>

        <div className="w-full aspect-video rounded-lg bg-white shadow-md p-2 flex items-center justify-center">
          <div className="flex gap-1 items-center justify-center">
            <MdShoppingCart
              size={80}
              className="p-4 bg-sky-300/20 rounded-full"
            />
            <p className="text-2xl font-semibold">
              Menus <span className="font-bold text-sky-600">{"18"}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardHome;
