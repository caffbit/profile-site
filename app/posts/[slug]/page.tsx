import { getPostData, getAllPostIds } from '../../../lib/posts';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => ({
    slug: path.params.id
  }));
}

export default async function Post(props: { params: { slug: string } }) {
  const postData = await getPostData(props.params.slug);
  return (
    <article className="prose lg:prose-xl">
      <h1>{postData.title}</h1>
      <div>
        {postData.date}
      </div>
      <ReactMarkdown>
        {postData.content}
      </ReactMarkdown>
    </article>
  );
}
