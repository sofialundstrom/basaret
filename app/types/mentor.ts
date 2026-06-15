export type Mentor = {
  name: string;
  phone: string | null;
  email: string | null;
  image: string;
  imageFocus?: "face" | "center";
  program?: string | null;
};
