import { AddressResponse } from "./address-response";
import { CourseResponse } from "./course-response";

export interface CustomStudentResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    courses: CourseResponse[];
    address: AddressResponse | null;
  }