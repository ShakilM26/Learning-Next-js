export default async function PostDetail({params}) {
    const {id} = await params;

    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return <h1>Post Not Found</h1>
    }
    const post = await res.json();

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}