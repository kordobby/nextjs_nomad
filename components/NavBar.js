import Link from "next/link"
import { useRouter } from "next/router"
import styles from './NavBar.module.css';

export default function NavBar () {
    const router = useRouter();

  return (
    // <nav className = {styles.nav}>
    //   {/* 이렇게 하면 다른 컴포넌트에서도 이 className 을 쓸 수 있겠지! */}
    //   <Link href = '/'>
    //     <a style = {{ color : router.pathname === "/" ? "red":"blue"}}>home</a>
    //   </Link>
    //   <Link href = '/about'>
    //     <a style = {{ color : router.pathname === "/about" ? "red":"blue"}}>About</a>
    //   </Link>
    // </nav>

  //   <nav>
  //   <Link href = '/'>
  //     <a className = {router.pathname === '/' ? styles.active : "" }>home</a>
  //   </Link>
  //   <Link href = '/about'>
  //     <a className = {router.pathname === '/' ? styles.active : "" }>About</a>
  //   </Link>
  // </nav>

  // 도대체 니코쌤이 자기가 안좋아하는건 왜 맨날 알려줄까?ㅋㅋㅋㅋㅋㅋㅋ
  // 하지만 as a sunsaengnim moment로 다 훑어주시는거겠지... 
  // <nav>
  // <Link href = '/'>
  //   <a className = {`${styles.link} ${router.pathname === '/' ? styles.active : "" }`}>home</a>
  // </Link>
  // <Link href = '/about'>
  //   <a className = {router.pathname === '/' ? styles.active : "" }>About</a>
  // </Link>
  // </nav>

  <nav>
  <Link href = '/'>
    <a>home</a>
  </Link>
  <Link href = '/about'>
    <a>About</a>
  </Link>
  <style jsx>{`
    nav {
      background-color : tomato;
    }
    a {
      text-decoration : none;
    }`}</style>
  </nav>
  )
}