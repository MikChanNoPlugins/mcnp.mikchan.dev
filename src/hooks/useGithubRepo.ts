import { readonly, ref, watchEffect } from "vue";
import { octokitClient } from "../utils/octokit";

const collectData = async (owner: string, repo: string) => {
    const repoData = await octokitClient.repos.get({ owner, repo });
    const releaseData = await octokitClient.repos.listReleases({ owner, repo });
    const readmeData = await octokitClient.repos.getReadme({
        owner,
        repo,
        mediaType: {
            format: "html",
        },
    });
    return {
        repoData,
        releaseData,
        readme: readmeData.data.toString(),
        notFound: false,
    };
};

type DataType = Partial<Awaited<ReturnType<typeof collectData>>> & {
    notFound: boolean;
};

const getCache = (owner: string, repo: string): DataType => {
    const strData = sessionStorage.getItem(`repo-data[${owner}/${repo}]`);
    if (strData == null) return { notFound: false };
    return JSON.parse(strData) as DataType;
};

const useGithubRepo = (owner: string, repo: string) => {
    const repoData = ref(getCache(owner, repo));

    watchEffect(() => {
        (async () => {
            try {
                const tmpData = await collectData(owner, repo);
                repoData.value = tmpData;
                sessionStorage.setItem(
                    `repo-data[${owner}/${repo}]`,
                    JSON.stringify(tmpData)
                );
            } catch (error) {
                console.error("Error:", error);
                repoData.value = { notFound: true };
            }
        })();
    });

    const readonlyRepoData = readonly(repoData);
    return { data: readonlyRepoData };
};

export { useGithubRepo };
