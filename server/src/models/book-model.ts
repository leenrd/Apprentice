import mongoose from "mongoose";
import { BookType, BorrowType } from "../utils/types";

const BorrowSchema = new mongoose.Schema<BorrowType>({
  bookId: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  borrowedAt: {
    type: Date,
    required: true,
  },
  returnedAt: {
    type: Date,
    required: true,
  },
});

const BookSchema = new mongoose.Schema<BookType>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  subject: {
    type: Number,
    required: true,
  },
  borrowedDate: {
    type: Date,
    required: true,
  },
  returnedDate: {
    type: Date,
    required: true,
  },
  borrowedLogs: [BorrowSchema],
});

const Book = mongoose.model<BookType>("Book", BookSchema);

export default Book;
