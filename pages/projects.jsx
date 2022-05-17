import { client } from '../utils/projects';
import Link from 'next/link';

export default function Projects({ projects }) {
    return (
        <div>
            {projects.length > 0 && (
                <ul>
                    {projects.map((project) => (
                        <li key={project._id}>
                            <p>{project?.title}</p>
                            <p>{project?.description[0].children[0].text}</p>
                            <p>{project?.github}</p>
                            <p>{project?.site}</p>
                        </li>
                    ))}
                </ul>
            )}
            <Link href="/">
                <a>Go Back Home</a>
            </Link>
        </div>
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
