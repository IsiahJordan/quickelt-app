
export type AccountProps = {
  username?: string;
  email?: string;
  password?:string;
};

export type QuizProps = {
  page?: number;
  limit?: number;
  quizId?: string;
};

export type UploadProps = {
  imageUrl: string;
}
