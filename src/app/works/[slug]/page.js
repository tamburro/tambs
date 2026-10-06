import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/utlits/fackData/projectData';
import ProjectPage from './ProjectPage';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};

    const title = `${project.title} — Pedro Tambs`;
    const description = project.tagline_en || project.tagline;
    const images = [project.pageSrc || project.src];

    return {
        title,
        description,
        openGraph: { title, description, images, type: 'article' },
        twitter: { card: 'summary_large_image', title, description, images },
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    if (!getProjectBySlug(slug)) notFound();
    return <ProjectPage slug={slug} />;
}
