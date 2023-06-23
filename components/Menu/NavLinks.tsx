import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  {
    name: "Today's tasks",
    path: '/today',
  },
  {
    name: 'All tasks',
    path: '/',
  },
  {
    name: 'Important tasks',
    path: '/important',
  },
  {
    name: 'Completed tasks',
    path: '/completed',
  },
  {
    name: 'Uncompleted tasks',
    path: '/uncompleted',
  },
]

const NavLinks: React.FC<{ classActive: string }> = ({ classActive }) => {
  const pathname = usePathname()
  return (
    <nav>
      <ul className="grid gap-2">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200 ${
                pathname === link.path ? classActive : null
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavLinks
