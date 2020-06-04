import React from 'react';
import NavLink from './navlink';
import QRCode from 'qrcode.react';
//const QRC = React.memo(QRCode);

// Component Start
export default function PublicNav(props) {
  const { open, setOpen, inHeader} = props;

  return (
    <nav
      className={
        inHeader
          ? ''
          : 'mobile:hidden py-8 profile-card bg-white m-0 shadow-md overflow-hidden w-3/12'
      }
      style={inHeader ? null : { height: '700px' }}
    >
      <div
        className={inHeader ? 'mainNav pt-20' : ''}
        style={inHeader && open ? { transform: 'translateX(0)' } : null}
      >
        <div className="px-6">
          <ul className="mt-8">
            <NavLink to="/" onClick={inHeader ? () => setOpen(!open) : null}>
              <li className="flex pl-6">
                <svg
                  className="mr-4"
                  width="22"
                  height="21"
                  viewBox="0 0 22 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8079 9.87311L11.7517 0.821543L11.1446 0.214512C11.0063 0.0771135 10.8193 0 10.6243 0C10.4294 0 10.2423 0.0771135 10.104 0.214512L0.440722 9.87311C0.298998 10.0143 0.186991 10.1824 0.111313 10.3676C0.0356348 10.5528 -0.00218116 10.7512 9.71477e-05 10.9512C0.00947215 11.7762 0.696191 12.4348 1.52119 12.4348H2.51728V20.0684H18.7313V12.4348H19.7485C20.1493 12.4348 20.5267 12.2778 20.8103 11.9942C20.9499 11.855 21.0605 11.6895 21.1358 11.5072C21.211 11.325 21.2493 11.1296 21.2485 10.9325C21.2485 10.534 21.0915 10.1567 20.8079 9.87311ZM11.9368 18.3809H9.31182V13.5997H11.9368V18.3809ZM17.0438 10.7473V18.3809H13.4368V13.0372C13.4368 12.5192 13.0173 12.0997 12.4993 12.0997H8.74932C8.23135 12.0997 7.81182 12.5192 7.81182 13.0372V18.3809H4.20478V10.7473H1.95478L10.6267 2.08248L11.1681 2.62389L19.2962 10.7473H17.0438Z"
                    fill="#1A202C"
                  />
                </svg>
                <span className="uppercase">Home</span>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
