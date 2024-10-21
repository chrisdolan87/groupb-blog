// app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';

interface Post {
    id: number;
    title: string;
    content: string;
    image: string;
}

async function getPosts(): Promise<Post[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}

const Blog = async () => {
    const posts = await getPosts();

    return (
        <div>
            <h1>Blog Posts</h1>
            
            {posts.map((post) => (
                <div className='postTile' key={post.id}>
                    <Link href={`/blog/${post.id}`}>
                        <h2 className='postLink'>{post.title}</h2>
                    </Link>

                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;
