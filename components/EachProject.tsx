interface IProject {
    title: string;
    description: string;
    url?: string;
}

const EachProject: React.FC<{ project: IProject }> = ({ project }) => {
    return (
        <div>
            <h1 className="text-2xl font-semibold">{project.title}</h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">{project.description}</p>
            {project.url && (
                <a href={project.url} className="mt-4 inline-block text-sm font-medium text-sky-600 hover:underline">Zobacz projekt</a>
            )}
            
        </div>
    )
}

export default EachProject