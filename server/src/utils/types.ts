export type StudentType = {
  _id: string;
  username: string;
  password: string;
  borrowedBooks: string[];
};

export type AdminType = {
  _id: string;
  username: string;
  password: string;
};

export type BookType = {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  year: number;
  subject: number;
  borrowedBy: string;
  borrowedDate: Date;
  returnedDate: Date;
  borrowedLogs: string[];
};
