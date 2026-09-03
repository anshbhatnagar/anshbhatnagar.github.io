import { getCollection } from "astro:content"; /** type CollectionEntry can be added here if draft section is uncommented */

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

export function toPreviewProps(data: typeof allPublications[number]["data"]) {
  const base = {
    title: data.title,
    description: data.description,
    imageUrl: data.imageUrl,
    altText: data.altText,
    text: data.text,
    inProgress: data.inProgress,
    publishDate: data.publishDate,
  };

  if (data.link) {
    return { ...base, link: data.link };
  }

  return base;
}

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