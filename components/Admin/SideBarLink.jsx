import Link from 'next/link'
import React from 'react'

const SideBarLink = ({ name, handleChangePage, children, href, path }) => {
      const unActive = "text-dark-blue font-semibold"
      const onActive = "text-sky-600 font-semibold"

      return (
            <Link href={href}>
                  <li onClick={handleChangePage} className="flex items-center gap-4 pl-12 cursor-pointer border-">
                        <div className={href == path ? onActive : unActive}>{children}</div>
                        <span className={href == path ? onActive : unActive}>{name}</span>
                  </li>
            </Link>

      )
}

export default SideBarLink