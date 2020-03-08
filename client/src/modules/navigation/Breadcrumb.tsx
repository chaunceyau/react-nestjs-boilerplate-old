import * as React from 'react'

import { Link, useLocation } from '@reach/router'

export interface IBreadcrumbProps {}

function useBreadcrumb(pathname: string): string[] {
  const potential_crumbs: string[] = pathname.split('/')

  // function convertBreadcrumbToPageTitle(): { title: string, to?: string }[] {
  // const KNOWN_CRUMBS = ['projects', 'dashboard', 'settings', 'new request']
  //   const crumbs = potential_crumbs.filter(crumb => KNOWN_CRUMBS.includes(crumb.toLowerCase()))

  //   return crumbs.map(crumb => {
  //     switch (crumb) {
  //       case "settings":
  //         return { title: "Project Settings" }
  //       case "projects":
  //         return { title: "Projects", to: '/projects/' }
  //       default:
  //         return { title: crumb }
  //     }
  //   })
  // }

  return potential_crumbs.filter((crumb) => crumb.length > 0)
}

export function Breadcrumb(props: IBreadcrumbProps) {
  const location = useLocation()
  const breadcrumbs = useBreadcrumb(location.pathname)
  return (
    <nav className="col-12" aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Admin</Link>
        </li>
        {breadcrumbs.map((crumb, index) => {
          return (
            <li
              className={`breadcrumb-item ${index === breadcrumbs.length &&
                'text-red'}`}
              key={crumb}
            >
              <Link
                to={`/${breadcrumbs
                  .slice(0, index + 1)
                  .toString()
                  .replace(',', '/')}`}
              >
                {crumb}
              </Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
