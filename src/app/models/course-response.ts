export interface CourseResponse {
    id: number;
    courseName: string;
    courseDescription: string | null;
    courseCode: string;
    durationInWeeks: number;
  }