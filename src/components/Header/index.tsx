import Image from 'next/image';

import { SignInButton } from '../SignInButton';
import { ActiveLink } from '../ActiveLink';

import logoImg from '../../../public/images/logo.svg';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src={logoImg} alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
