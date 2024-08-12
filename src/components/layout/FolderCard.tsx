import { GitBranchIcon, LockIcon, StarIcon, UnlockIcon } from "@/utils/icons";
import Link from "next/link";
import * as React from "react";

interface FolderCardProps {
    title: string;
    description: string;
    starCount: number;
    forkCount: number;
    isPrivate: boolean;
    language: string; // Updated to string
    latestCommitMessage: string;
    latestCommitUrl: string;
    latestCommitDate: string;
}

interface CardFooterProps {
    starCount: number;
    forkCount: number;
    language: string; // Updated to string
    isPrivate: boolean;
    latestCommitMessage: string;
    latestCommitUrl: string;
    latestCommitDate: string;
}

const MAX_DESCRIPTION_LENGTH = 100;
const MAX_COMMIT_DESCRIPTION_LENGTH = 10;

export default function FolderCard({
    title,
    description,
    starCount,
    forkCount,
    isPrivate,
    language,
    latestCommitMessage,
    latestCommitUrl,
    latestCommitDate,
}: FolderCardProps) {
    const trimmedDescription =
        description.length > MAX_DESCRIPTION_LENGTH
            ? description.slice(0, MAX_DESCRIPTION_LENGTH) + "..."
            : description;

    return (
        <div className="bg-white rounded-lg px-6 py-4 set-flex-col items-start justify-between gap-2 set-wf-full">
            <div className="set-flex-col items-stretch justify-start w-full gap-3">
                <div className="set-flex-row justify-between items-start w-full gap-0">
                    <h2 className="text-xl font-bold">{title} </h2>
                    <div className="flex-row-start gap-2">
                        {isPrivate ? (
                            <p className="px-3 py-1 rounded-full bg-color-light text-gray-200 flex-row-center gap-2 text-sm">
                                <LockIcon className="text-gray-200 inline" />
                                <span>Private</span>
                            </p>
                        ) : (
                            <p className="px-3 py-1 rounded-full bg-color-light text-gray-200 flex-row-center gap-2 text-sm">
                                <UnlockIcon className="text-gray-200 inline" />
                                <span>Public</span>
                            </p>
                        )}
                    </div>
                </div>
                <p>{trimmedDescription}</p>
            </div>
            <CardFooter
                starCount={starCount}
                forkCount={forkCount}
                language={language} // Pass the single language
                isPrivate={isPrivate}
                latestCommitMessage={latestCommitMessage}
                latestCommitUrl={latestCommitUrl}
                latestCommitDate={latestCommitDate}
            />
        </div>
    );
}

function CardFooter({
    starCount,
    forkCount,
    language,
    isPrivate,
    latestCommitMessage,
    latestCommitUrl,
    latestCommitDate,
}: CardFooterProps) {
    return (
        <div className="set-flex-row justify-between items-center w-full">
            <div className="set-flex-col items-start justify-start gap-5 h-full">
                <div className="set-flex-row justify-start items-center gap-3 w-full">
                    <span className="flex-row-start gap-1">
                        <StarIcon className="text-yellow-400" />
                        <span>{starCount}</span>
                    </span>
                    <span className="flex-row-start gap-1">
                        <GitBranchIcon className="text-gray-500" />
                        <span>{forkCount}</span>
                    </span>
                </div>
                <div className="font-bold set-flex-row justify-start items-end gap-1">
                    {language ? (
                        <span className="bg-gray-100 text-xs px-2 py-1 rounded-md">
                            {language}
                        </span>
                    ) : (
                        <div>Language data not available</div>
                    )}
                </div>
            </div>
            <div className="set-flex-col justify-end items-end w-full h-full">
                <h3 className="font-bold">Last Commit</h3>
                <p>
                    {latestCommitMessage.length > MAX_COMMIT_DESCRIPTION_LENGTH
                        ? latestCommitMessage.slice(
                              0,
                              MAX_COMMIT_DESCRIPTION_LENGTH
                          ) + "..."
                        : latestCommitMessage}
                </p>
                <p className="text-sm">{latestCommitDate}</p>
                {!isPrivate && (
                    <Link
                        href={latestCommitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View Repository
                    </Link>
                )}
            </div>
        </div>
    );
}
