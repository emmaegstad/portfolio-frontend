import { client } from '../lib/projects';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import Layout from '../components/Layout';

export default function Projects({ projects }) {
    return (
        <>
            {projects.length > 0 && (
                <ul>
                    {projects.map((project) => (
                        <li key={project._id}>
                            <p>{project?.title}</p>
                            <PortableText value={project?.description} />
                            <p>{project?.github}</p>
                            <p>{project?.site}</p>
                        </li>
                    ))}
                </ul>
            )}
            <Link href="/">
                <a>Go Back Home</a>
            </Link>
        </>
    );
}

export async function getStaticProps() {
    const projects = await client.fetch(`*[_type == "project"]`);

    return {
        props: {
            projects,
        },
    };
}
