import { readonly, ref, watchEffect } from "vue";
import { octokitClient } from "../utils/octokit";

const getRepos = async (org: string) => {
    const res = await octokitClient.repos.listForOrg({ org });
    const data = res.data;
    return data;
};

const getCache = () => {
    const strCache = sessionStorage.getItem("github-repo-data");
    if (strCache == null) return [];
    return JSON.parse(strCache) as DataType;
};

type DataType = Awaited<ReturnType<typeof getRepos>>;

const useGithubRepos = (org: string) => {
    const data = ref<DataType>(getCache());

    watchEffect(() => {
        (async () => {
            data.value = await getRepos(org);
            sessionStorage.setItem(
                "github-repo-data",
                JSON.stringify(data.value)
            );
        })();
    });

    const readonlyData = readonly(data);

    return { data: readonlyData };
};

export { useGithubRepos };
