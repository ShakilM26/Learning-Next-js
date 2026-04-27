export async function GET() {
    const posts = [
        {id: 1, title: 'First Post', content: 'Noboni was my first love'},
        {id: 2, title: 'Second Post', content: 'Shimla was a bitch'},
        {id: 3, title: 'Third Post', content: 'I am looking for good girl'}
    ];

    return Response.json(posts);
}