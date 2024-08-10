import * as React from "react";
import { FaRegStar } from "react-icons/fa";

interface FolderCardProps {
    title: string;
    description: string;
    starCount: number;
    latestCommitMessage: string;
    latestCommitUrl: string;
    latestCommitDate: string;
}

const MAX_DESCRIPTION_LENGTH = 100;

export default function FolderCard({
    title,
    description,
    starCount,
    latestCommitMessage,
    latestCommitUrl,
    latestCommitDate,
}: FolderCardProps) {
    const trimmedDescription =
        description.length > MAX_DESCRIPTION_LENGTH
            ? description.slice(0, MAX_DESCRIPTION_LENGTH) + "..."
            : description;
    return (
        <div className="bg-white rounded-lg px-6 py-4 flex-col-start gap-0 set-wf-full">
            <div>
                <h2 className="mb-1 text-xl font-bold">{title}</h2>
                <p>{trimmedDescription}</p>
            </div>
            <div className="set-flex-row justify-between items-center w-full">
                <div className="flex-row-start gap-5">
                    <span className="flex-row-start gap-2">
                        <FaRegStar className="text-yellow-400" />
                        <span>{starCount}</span>
                    </span>
                </div>
                <div className="mt-4">
                    <h3 className="font-bold">Last Commit:</h3>
                    <p>{latestCommitMessage}</p>
                    <p className="text-sm text-gray-500">{latestCommitDate}</p>
                    <a
                        href={latestCommitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View Commit
                    </a>
                </div>
            </div>
        </div>
    );
}
