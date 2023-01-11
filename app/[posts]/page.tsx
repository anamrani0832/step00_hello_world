export default function GiveName({ params }: { params: { posts: string } }) {
  return <div>Name from url {params.posts}.</div>;
}
