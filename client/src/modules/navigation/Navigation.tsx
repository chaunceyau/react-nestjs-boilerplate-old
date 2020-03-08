import * as React from 'react'

import { Link } from '@reach/router'
import { useAuth } from '../context/auth-context'

export interface INavigationProps {
  user: any
}

export function Navigation(props: INavigationProps) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand text-white">
          Boilerplate.io
        </Link>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              {props.user ? (
                <Link to="/account" className="nav-link">
                  My Account
                </Link>
              ) : (
                <Link to="/auth/login" className="nav-link">
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {props.user ? (
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              ) : (
                <Link to="/auth/register" className="nav-link">
                  Register
                </Link>
              )}
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <DropDownNav user={props.user} />
          </div>
        </div>
      </nav>
    </div>
  )
}

function DropDownNav(props: { user: any }) {
  const [open, setOpen] = React.useState(false)
  const { logout } = useAuth()
  return (
    <div className={`dropdown ${open && 'show'} dropleft`}>
      <button
        id="dropdown_menu"
        type="button"
        aria-expanded="false"
        data-toggle="dropdown_menu"
        onClick={() => setOpen(!open)}
        className="btn"
      >
        <img
          src={require('../../assets/user-circle.svg')}
          alt="User Dropdown Icon"
          style={{ height: 20, width: 20 }}
        />
      </button>
      <div
        className={`dropdown-menu ${open && 'show'}`}
        aria-labelledby="dropdown_menu"
      >
        {props.user ? (
          <>
            <Link
              className="dropdown-item"
              to="/account"
              onClick={() => setOpen(false)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span className="mr-4">My Account</span>
                {/* <span className="badge badge-danger badge-pill">14</span> */}
              </div>
            </Link>
            <button
              className="dropdown-item"
              onClick={() => {
                logout()
                setOpen(false)
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            className="dropdown-item"
            to="/auth/login"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  )
}
