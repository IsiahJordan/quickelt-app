
export type AccountProps = {
  username?: string;
  email?: string;
  password?:string;
};

export type QuizProps = {
  page?: number;
  limit?: number;
  quizId?: string;
  name?: string;
  metadata?: {
    author: string;
    duration: number;
    description: string;
  };
};

export type UploadProps = {
  imageUrl: string;
};

export type QuestionProps = {
  id?: string;
  quizId?: string;
  description?: string;
  options?: [string, string, string, string];
  answer?: number;
  imageUrl?: string;
};
