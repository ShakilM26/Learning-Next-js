// 🧩 API Route তৈরি

export async function GET() {
    const posts = [
        {id: 1, title: 'Johnny Blaze', time: new Date().toLocaleTimeString()},
        {id: 2, title: 'Matt Murdock', time: new Date().toLocaleTimeString()},
        {id: 3, title: 'Marc Specter', time: new Date().toLocaleTimeString()},
    ];
    return Response.json(posts);
}

// time use করেছি যাতে বুঝতে পারি data কখন generate হচ্ছে