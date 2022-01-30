/* eslint-disable react/jsx-no-comment-textnodes */

import Link from 'next/link';
import { SiDiscord, SiGithub } from 'react-icons/si';

export default function Home() {
  return (
    <div className="flex items-center flex-col">
      <section className="my-12 w-2/6">
        <div className="flex gap-x-4 my-2 text-lg content-none">
          <Link href="https://github.com/almeidx">
            <a className="hover:opacity-70 duration-150">
              <SiGithub />
            </a>
          </Link>

          <Link href="https://discord.com/users/385132696135008259">
            <a className="hover:opacity-70 duration-150">
              <SiDiscord />
            </a>
          </Link>
        </div>
        <h1 className="text-2xl font-medium">Almeida</h1>
        <p className="opacity-75">College student and hobbyist developer.</p>
      </section>

      <div className="w-2/6">
        <p className="text-gray-500">// TODO: Fill up this page</p>
      </div>
    </div>
  );
}
