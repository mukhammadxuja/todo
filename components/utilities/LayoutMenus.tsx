import React, { ReactNode } from 'react'

const LayoutMenus: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-slate-100 h-screen w-60 xl:w-2/12 fixed dark:bg-slate-800 z-20">
      {children}
    </div>
  )
}

export default LayoutMenus
