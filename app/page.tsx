import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Blog</h1>
        <ul className="list-none p-0 m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-4" key={id}>
              <Link href={`/posts/${id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {title}
              </Link>
              <br />
              <small className="text-gray-500">
                {date}
              </small>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
