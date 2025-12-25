
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
