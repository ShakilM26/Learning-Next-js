// 🧩 Posts Page (No Cache)

export default async function PostsPage() {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
});
    const posts = await res.json();

    return (
        <div>
            <h1>Posts (No Cache)</h1>

            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>Time: {post.time}</p>
                </div>
            ))}
        </div>
    );
}