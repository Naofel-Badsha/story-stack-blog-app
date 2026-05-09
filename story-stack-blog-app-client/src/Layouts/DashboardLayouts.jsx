import { FaBars } from "react-icons/fa"
import { Outlet } from "react-router"

const DashboardLayouts = () => {
  return (
    <div>
      <div className="flex">
        <div className=" bg-amber-500 w-72 min-h-[100vh]">
          SideBard
        </div>
        <div className="bg-white w-full">
          <header className="bg-white py-4 sticky top-0 left-0 right-0 shadow px-4">
            <div className="flex items-center justify-between">
              <div className="">
                <FaBars size={20} className="cursor-pointer"/>
              </div>

              <div className="">
                <img src="https://i.ibb.co.com/JFy9xXx4/imageye-imgi-23-team-2-2.webp" alt="" className="w-[40px] h-[40px] rounded-full" />
              </div>
            </div>
          </header>
          <main className="p-4">
            <Outlet />
          </main>
        </div>

      </div>

    </div>
  )
}

export default DashboardLayouts
