import { request, gql } from "graphql-request";

import { Experience, Project } from "@/app/_types";

const url = process.env.HYGRAPH_API_URL || "";

interface ExperienceResult {
  experiences: Experience[];
}

interface ProjectsResult {
  projects: Project[];
}

export async function getExperiences(): Promise<ExperienceResult> {
  const query = gql`
    query Experiences {
      experiences {
        id
        period
        metadata
        description
        company
        url
      }
    }
  `;

  try {
    const result = await request<ExperienceResult>(url, query);

    return result;
  } catch (error) {
    console.error("Failed to fetch experiences:", error);

    throw new Error("Error fetching experiences");
  }
}

export async function getProjects(): Promise<ProjectsResult> {
  const query = gql`
    query Projects {
      projects(first: 100) {
        company
        description
        id
        image {
          id
          url
        }
        isFeatured
        metadata
        period
        title
        url
        isShown
      }
    }
  `;

  try {
    const result = await request<ProjectsResult>(url, query);

    return result;
  } catch (error) {
    console.error("Failed to fetch projects:", error);

    throw new Error("Error fetching projects");
  }
}
