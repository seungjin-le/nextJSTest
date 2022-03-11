import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './NavBar.module.css'

export default function NavBar() {
  const router = useRouter();
  return(
    <nav>
      <Link href="/">
        <a className={ router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={ router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx>
        {`
          nav {
          background: tomato;
          }
          a {
            text-decoration: none;
          }
          .active {
          color: blue;
          }
        `}
      </style>
    </nav>
  )
}

// css.modules
//<nav>
//       <Link href="/">
//         <a className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>Home</a>
//       </Link>
//       <Link href="/about">
//         <a className={[
//           styles.link,
//           router.pathname === '/about' ? styles.active : ''
//         ].join(' ')}>About</a>
//       </Link>
//     </nav>

// style jsx
//<nav>
//       <Link href="/">
//         <a className={ router.pathname === '/' ? 'active' : ''}>Home</a>
//       </Link>
//       <Link href="/about">
//         <a className={ router.pathname === '/about' ? 'active' : ''}>About</a>
//       </Link>
//       <style jsx>
//         {`
//           nav {
//           background: tomato;
//           }
//           a {
//             text-decoration: none;
//           }
//           .active {
//           color: blue;
//           }
//         `}
//       </style>
//     </nav>
