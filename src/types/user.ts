export type User = {
  id: string;
  name: string;
  email: string;
  role: "REQUESTER" | "PROVIDER";
  avatar: string;
};