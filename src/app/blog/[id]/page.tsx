// app/blog/[id]/page.tsx
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Post {
    id: number;
    title: string;
    content: string;
    image: string;
}

async function getPost(id: number): Promise<Post | undefined> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    const posts = await res.json();
    return posts.find((post: Post) => post.id === id);
}

interface PostPageProps {
    params: {
        id: string;
    };
}

const PostPage = async ({ params }: PostPageProps) => {
    const post = await getPost(Number(params.id));

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1>{post.title}</h1>

            <Image className='postImage'
                src={post.image} 
                alt={post.title} 
                width={600} 
                height={400} 
                priority
            />

            <p>{post.content}</p>            
        </div>
    );
};

export default PostPage;
