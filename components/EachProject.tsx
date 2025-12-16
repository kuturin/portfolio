"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export interface IProject {
    title: string;
    description: string;
    url?: string;
    niedostepny?: boolean;
    screenshots?: string[];
}

interface EachProjectProps {
    project: IProject;
}

const EachProject = ({ project }: EachProjectProps) => {
    const [lightbox, setLightbox] = useState<number | null>(null)
    const shots = project.screenshots ?? []

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setLightbox(null)
        }
        if (lightbox !== null) {
            document.addEventListener("keydown", onKey)
        }
        return () => document.removeEventListener("keydown", onKey)
    }, [lightbox])

    return (
        <div>
            <h1 className="text-2xl font-semibold">{project.title}</h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">{project.description}</p>

            {shots.length > 0 && (
                <div className="mt-4">
                    <div className="flex flex-wrap gap-3">
                        {shots.map((src, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => setLightbox(idx)}
                                className="relative h-16 w-24 focus:outline-none"
                                aria-label={`Pokaż ${project.title} screenshot ${idx + 1}`}
                            >
                                    <Image
                                    src={src}
                                    alt={`${project.title} screenshot ${idx+1}`}
                                    fill
                                        sizes="96px"
                                        quality={100}
                                        loading="lazy"
                                    className="object-cover rounded border dark:border-zinc-800 transition-transform duration-200 ease-out hover:scale-150 hover:z-10"
                                />
                            </button>
                        ))}
                    </div>
                    <p className="mt-2 text-xs text-zinc-500">Najedź myszką, aby powiększyć miniatury.</p>
                </div>
            )}

            {project.url && !project.niedostepny && (
                <a href={project.url} className="mt-4 inline-block text-sm font-medium text-sky-600 hover:underline">Zobacz projekt</a>
            )}
            {project.niedostepny && (
                <p className="mt-4 text-sm font-medium text-red-600">Szczegóły projektu nie są jeszcze publicznie dostępne</p>
            )}

            {lightbox !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="relative w-full h-full max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={shots[lightbox] as string}
                            alt={`${project.title} pełny zrzut ekranu`}
                            fill
                            sizes="(max-width: 1024px) 90vw, 1024px"
                            className="object-contain"
                        />
                        <button
                            type="button"
                            onClick={() => setLightbox(null)}
                            className="absolute top-3 right-3 rounded bg-white/90 px-3 py-1 text-sm text-zinc-900 hover:bg-white"
                            aria-label="Zamknij"
                        >
                            Zamknij
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EachProject