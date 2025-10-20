export interface IResumen {
  id: string;
  title: string;
  descriptcion: string;
  sourceType: "link" | "file";
  source: string;
  summary: string;
  questions: string[];
  citations: string[];
  userNotes: string;
}
