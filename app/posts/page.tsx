import Link from 'next/link';

export default async function PostsPage() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });

    const posts = await res.json();

    return (
        <div>
            <h1>All Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>

                    <Link href={`/posts/${post.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    )
}