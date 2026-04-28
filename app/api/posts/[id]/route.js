export async function GET(request, { params }) {
  const { id } = await params;

  const posts = [
    { id: 1, title: "First Post", content: "This is first post content" },
    { id: 2, title: "Second Post", content: "This is second post content" },
    { id: 3, title: "Third Post", content: "This is third post content" },
  ];

  const post = posts.find(p => String(p.id) === id);

  if (!post) {
    return Response.json({ message: "Post not found" }, { status: 404 });
  }

  return Response.json(post);
}