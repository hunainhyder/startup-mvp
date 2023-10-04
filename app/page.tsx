import { AiOutlineHome } from 'react-icons/ai'
import { BiMessageSquareDetail, BiLogOut } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineInventory2 } from 'react-icons/md'
import { BsCashStack, BsListTask } from 'react-icons/bs'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
  {name: "Home", icon: AiOutlineHome},
  {name: "Profile", icon: CgProfile},
  {name: "Inventory", icon: MdOutlineInventory2},
  {name: "Orders", icon: BsListTask},
  {name: "Earnings", icon: BsCashStack},
  {name: "Messages", icon: BiMessageSquareDetail},
  {name: "Log Out", icon: BiLogOut},
]

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-screen-lg w-full h-full flex reactive">
        <section className="fixed w-72 flex flex-col h-screen space-y-4 my-4">
          <Link href={"/"} className='p-2 text-2xl'>Wholesalio</Link>
          {NAVIGATION_ITEMS.map((item) => (
          <Link 
            className="hover:bg-white/10 transition-duration-200 text-2xl flex items-center justify-start w-fit space-x-2 rounded-3xl p-4"
            href={`/${item.name.toLowerCase()}`}
            key={item.name}
          >
            <div>
              <item.icon />
            </div>
            <div>
              {item.name}
            </div>
          </Link>))}
        </section>
        <main></main>
        <section></section>
      </div>
    </div>
  )
}