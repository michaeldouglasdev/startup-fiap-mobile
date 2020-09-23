import { Exam } from "./Exam";
import { Company } from './Company';

export interface Job {
  _id: number;
  requiredSkills: string[];
  desirableSkills: string[];
  exams: Exam[];
  company: Company;
  title: string;
  city: string;
  state: string;
  address: string;
  anotherInfo: string;
  description: string;
  salary: number;
  hiring: string;
  lastUpdateDate: string;
  registerDate: string;
  cadidateUsers: string[];
}