import { MenuProps } from "@/types";

export default function Menu({ visible, resetCallback, menuUnlockCallback, menuLockCallback }: MenuProps) {
  return (
    <div
      id="menu"
      className={`fixed left-1/4 w-1/2 h-[100px] bg-slate-800/80 rounded-2xl transition-all duration-300
        ${visible ? 'bottom-4' : '-bottom-full'}`}
    >
      <div
        className="w-full h-full flex items-center justify-center"
        // lift up the prop. how do we do this? hmmmm?
      >
        <button
          className="w-1/4 h-[50px] border-2 border-teal-500 rounded-2xl"
          // lift up the prop. how do we do this? hmmmm?
        >
        </button>
      </div>
    </div>
  )
}