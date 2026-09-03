import { type CollectionEntry, getCollection } from "astro:content";

/** filter out draft posts based on the environment 
export async function getAllImagePosts(): Promise<CollectionEntry<"academicPublications">[]> {
	return await getCollection("academicPublications", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}*/

/**  filter out draft posts based on the environment 
export async function getAllSideProjects(): Promise<CollectionEntry<"sideProjects">[]> {
	return await getCollection("sideProjects", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
} */

export async function getAllPublications() {
  const publications = await getCollection("academicPublications");
  return publications
    // .filter((p) => !p.data.inProgress) // optional filter
    .sort(
      (a, b) =>
        new Date(b.data.publishDate).getTime() -
        new Date(a.data.publishDate).getTime()
    );
}