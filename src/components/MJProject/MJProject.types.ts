export interface MJProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt?: string;
    projectUrl?: string;
    repositoryUrl?: string;
}

export interface MJProjectSection {
    heading: string;
    body: string;
}

export interface MJProjectDetails extends MJProjectCardProps {
    role?: string;
    year?: string;
    technologies?: string[];
    sections?: MJProjectSection[];
}

export interface MJProjectPageProps {
    project: MJProjectDetails;
}