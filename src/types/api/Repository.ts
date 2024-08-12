interface CommitNode {
    message: string;
    committedDate: string;
    url: string;
    author: {
        name: string;
        email: string;
    };
}

interface RefNode {
    target: {
        history: {
            edges: Array<{ node: CommitNode }>;
        };
    };
}

interface LanguageEdge {
    node: {
        name: string;
    };
}

interface Repository {
    name: string;
    description: string;
    forkCount: number;
    isPrivate: boolean;
    stargazers: {
        totalCount: number;
    };
    languages: {
        edges: LanguageEdge[];
    };
    refs: {
        edges: Array<{ node: RefNode }>;
    };
}

interface User {
    repositories: {
        nodes: Repository[];
    };
}

interface GetAllReposResponse {
    user: User;
}
