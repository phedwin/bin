// Define interfaces for GitHub user and commit data
interface github__user {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string | null;
    company: string | null;
}

interface Commit {
    sha: string;
    commit: {
        author: {
            name: string;
        };
        message: string;
    };
}

