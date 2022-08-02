import { readonly, ref, watchEffect } from "vue";
import { octokitClient } from "../utils/octokit";

const collectData = async (owner: string, repo: string) => {
    const repoData = await octokitClient.repos.get({ owner, repo });
    return { repoData };
};

type DataType = Partial<Awaited<ReturnType<typeof collectData>>>;

const getCache = (owner: string, repo: string): DataType => {
    const strData = sessionStorage.getItem(`repo-data[${owner}/${repo}]`);
    if (strData == null) return {};
    return JSON.parse(strData) as DataType;
};

const useGithubRepo = (owner: string, repo: string) => {
    const repoData = ref(getCache(owner, repo));

    watchEffect(() => {
        (async () => {
            const tmpData = await collectData(owner, repo);
            repoData.value = tmpData;
            sessionStorage.setItem(
                `repo-data[${owner}/${repo}]`,
                JSON.stringify(tmpData)
            );
        })();
    });

    const readonlyRepoData = readonly(repoData);
    return { repoData: readonlyRepoData };
};

export { useGithubRepo };
