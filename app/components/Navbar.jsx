import Image from 'next/image';
import Link from 'next/link';
import Logo from './dojo-logo.png';

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Dojo Helpdesk logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h2>Dojo Helpdesk</h2>
      <Link href='/'>Dashboard</Link>
      <Link href='/tickets'>Tickets</Link>
    </nav>
  );
}
