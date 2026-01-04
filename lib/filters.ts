export type GoalStatus = "near_goal" | "midway" | "just_started" | "fully_funded" | "all";

export interface ProjectFilters {
  categories: string[];
  collections: string[];
  goalStatus: GoalStatus;
}

export interface ProgressUpdate {
  date: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  coverImage: string;
  category: string;
  collection: string;
  donateUrl: string;
  goalAmount: number;
  raisedAmount: number;
  status: string;
  location: string;
  shortDescription: string;
  daysLeft: number | null;
  // Detail fields
  about?: string;
  overview?: string;
  whyMatters?: string;
  impact?: string[];
  impactNote?: string; // Optional note text after impact list
  tags?: string[];
  progressUpdates?: ProgressUpdate[];
}

export function calculateGoalStatus(
  raisedAmount: number,
  goalAmount: number
): Omit<GoalStatus, "all"> {
  const percentage = (raisedAmount / goalAmount) * 100;
  
  if (percentage >= 100) {
    return "fully_funded";
  } else if (percentage >= 80) {
    return "near_goal";
  } else if (percentage >= 30) {
    return "midway";
  } else {
    return "just_started";
  }
}

export function filterProjects(
  projects: Project[],
  filters: ProjectFilters
): Project[] {
  return projects.filter((project) => {
    // Category filter
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(project.category)
    ) {
      return false;
    }

    // Collection filter
    if (
      filters.collections.length > 0 &&
      !filters.collections.includes(project.collection)
    ) {
      return false;
    }

    // Goal status filter
    if (filters.goalStatus !== "all") {
      if (filters.goalStatus === "midway") {
        // For "Urgently Need", check if project has "Urgent" tag
        const hasUrgentTag = project.tags?.some(tag => tag.toLowerCase() === "urgent") ?? false;
        if (!hasUrgentTag) {
          return false;
        }
      } else {
        // For other statuses, use percentage-based calculation
        const projectStatus = calculateGoalStatus(
          project.raisedAmount,
          project.goalAmount
        );
        if (projectStatus !== filters.goalStatus) {
          return false;
        }
      }
    }

    return true;
  });
}

export function getAllCollections(projects: Project[]): string[] {
  const collections = new Set(projects.map((p) => p.collection));
  return Array.from(collections).sort();
}
