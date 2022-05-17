import Head from 'next/head';
import { client } from '../utils/projects';

export default function Home({ projects }) {
    return (
        <div>
            <Head>
                <title>Emma Egstad</title>
                <meta
                    name="description"
                    content="Hello! My name is Emma, and I'm a full-stack web developer located in Tulsa, OK."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section>
                {projects.length > 0 && (
                    <ul>
                        {projects.map((project) => (
                            <li key={project._id}>
                                <p>{project?.title}</p>
                                <p>
                                    {project?.description[0].children[0].text}
                                </p>
                                <p>{project?.github}</p>
                                <p>{project?.site}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
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
