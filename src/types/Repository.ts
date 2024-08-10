interface CommitNode {
    message: string;
    committedDate: string;
    url: string;
    author: {
        name: string;
        email: string;
    };
}

interface GetLatestCommitResponse {
    repository: {
        ref: {
            target: {
                history: {
                    edges: {
                        node: CommitNode;
                    }[];
                };
            };
        };
    };
}
