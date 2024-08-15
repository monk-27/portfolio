"use client";
import Heading from "@/components/ui/designs/Heading";
import Paragraph from "@/components/ui/designs/Paragraph";
import { GitBranchIcon, LockIcon, StarIcon, UnlockIcon } from "@/utils/icons";
import Link from "next/link";
import * as React from "react";

interface FolderCardProps {
    title: string;
    description: string;
    starCount: number;
    forkCount: number;
    isPrivate: boolean;
    language: string;
    latestCommitMessage: string;
    latestCommitUrl: string;
    latestCommitDate: string;
}

interface CardFooterProps {
    starCount: number;
    forkCount: number;
    language: string;
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
        <div className="rounded-3xl p-3 flex-col-between-start gap-5 w-full bg-gray-900">
            <div className="flex-col-start-start w-full gap-3">
                <div className="flex-row-between-start w-full gap-0">
                    <Heading level={6}>{title}</Heading>
                    <div className="flex-row-start-start gap-2">
                        {isPrivate ? (
                            <p className="px-3 py-1 rounded-full bg-primary text-white flex-row-center-center gap-2 text-sm">
                                <LockIcon className="inline" />
                                <span>Private</span>
                            </p>
                        ) : (
                            <p className="px-3 py-1 rounded-full bg-primary text-white flex-row-center-center gap-2 text-sm">
                                <UnlockIcon className="text-gray-200 inline" />
                                <span>Public</span>
                            </p>
                        )}
                    </div>
                </div>
                <Paragraph>{trimmedDescription}</Paragraph>
            </div>
            <CardFooter
                starCount={starCount}
                forkCount={forkCount}
                language={language}
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
        <div className="flex-row-between-center w-full">
            <div className="flex-col-start-start gap-4 h-full">
                <div className="flex-row-start-center gap-2 w-full text-gray-200">
                    <span className="flex-row-start-start gap-1">
                        <StarIcon className="text-secondary" />
                        <span>{starCount}</span>
                    </span>
                    <span className="flex-row-start-start gap-1">
                        <GitBranchIcon className="text-secondary" />
                        <span>{forkCount}</span>
                    </span>
                </div>
                <div className="font-bold flex-row-start-end gap-1">
                    {language ? (
                        <span className="bg-secondary bg-opacity-60 text-xs px-2 py-1 rounded-md">
                            {language}
                        </span>
                    ) : (
                        <div>Language data not available</div>
                    )}
                </div>
            </div>
            <div className="flex-col-end-end gap-3 w-full h-full">
                <Heading level={0} className="text-gray-200">
                    Last Commit
                </Heading>
                <div className="flex-col-end-end gap-0">
                    <Paragraph>
                        {latestCommitMessage.length >
                        MAX_COMMIT_DESCRIPTION_LENGTH
                            ? latestCommitMessage.slice(
                                  0,
                                  MAX_COMMIT_DESCRIPTION_LENGTH
                              ) + "..."
                            : latestCommitMessage}
                    </Paragraph>
                    <Paragraph className="text-sm">
                        {latestCommitDate}
                    </Paragraph>
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
        </div>
    );
}
