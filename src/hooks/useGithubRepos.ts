import { readonly, ref, watchEffect } from "vue";
import { octokitClient } from "../utils/octokit";

const getRepos = async (org: string) => {
    const res = await octokitClient.repos.listForOrg({ org });

    const data = res.data.map((d) => ({
        ...d,

        topics: d.topics ?? [],
        stargazers_count: d.stargazers_count ?? 0,
    }));

    return { reposData: data };
};

type ReturnDataType = Awaited<ReturnType<typeof getRepos>>;

type DataType = Partial<ReturnDataType> & {
    status: "loading" | "found" | "notFound";
};

export type ReposDataItem = ReturnDataType["reposData"][number];

const getCache = (): DataType => {
    const strCache = sessionStorage.getItem("github-repo-data");
    if (strCache == null) return { status: "loading" };
    const res = JSON.parse(strCache) as DataType;
    return { ...res, status: "found" };
};

const useGithubRepos = (org: string) => {
    const data = ref<DataType>(getCache());

    watchEffect(() => {
        (async () => {
            try {
                const res = await getRepos(org);
                data.value = { ...res, status: "found" };
                sessionStorage.setItem("github-repo-data", JSON.stringify(res));
            } catch (error) {
                if (data.value.status == "loading") {
                    console.error(error);
                    data.value = { status: "notFound" };
                }
            }
        })();
    });

    const readonlyData = readonly(data);
    return { reposData: readonlyData };
};

export { useGithubRepos };
