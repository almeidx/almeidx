import Link from 'next/link';
import type { IconType } from 'react-icons';
import { FaDiscord, FaGithub, FaTwitch } from 'react-icons/fa';

import Avatar from '../components/Avatar';

interface LinkInfo {
  Icon: IconType;
  colour: string;
  href: string;
  name: string;
}

const links: LinkInfo[] = [
  { Icon: FaGithub, colour: '#fff', href: 'https://github.com/almeidx', name: 'GitHub' },
  { Icon: FaDiscord, colour: '#5865f2', href: 'https://discord.com/users/385132696135008259', name: 'Discord' },
  { Icon: FaTwitch, colour: '#6441a5', href: 'https://twitch.tv/almeidx_', name: 'Twitch' },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-gray-900 min-h-screen">
      <main className="flex flex-col items-center justify-center gap-2 px-4 py-3 bg-gray-800 rounded-xl shadow-md">
        <Avatar />

        <h1 className="text-white text-4xl font-medium">Almeida</h1>
        <p className="text-gray-400 text-lg">Web developer</p>

        <div className="flex flex-row gap-4">
          {links.map(({ Icon, colour, href, name }, i) => (
            <Link href={href} key={i}>
              <a className="text-white flex items-center justify-center px-2 py-1 bg-gray-700 gap-2 rounded-lg shadow-md hover:bg-gray-600 duration-150 transition-colors">
                <Icon color={colour} />
                <p>{name}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
