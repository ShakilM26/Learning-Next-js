export default async function PostDetail({ params }) {
    const { id } = await params;

    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });

    const posts = await res.json();
    const post = posts.find(p => String(p.id) === id);

    if (!post) {
        return <h1>Post Not Found</h1>
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}