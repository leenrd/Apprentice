export enum UserRoles {
  ADMIN,
  STUDENT,
}

export type UserType = {
  _id: string;
  username: string;
  password: string;
  role: UserRoles;
};

export type BookType = {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  subject: number;
  borrowedDate: Date;
  returnedDate: Date;
};

export type BorrowType = {
  _id: string;
  bookId: string;
  studentId: string;
  borrowedAt: Date;
  returnedAt: Date | null; // null if not returned yet
  borrowLog: string[];
  notes: string;
};
