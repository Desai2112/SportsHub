import multer, { StorageEngine } from 'multer';
import { Request } from 'express';
import { FileFilterCallback } from 'multer';

interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

const storage: StorageEngine = multer.diskStorage({
  destination: function (req: Request, file: File, cb: (error: (Error | null), destination: string) => void): void {
    cb(null, './public/temp');
  },
  filename: function (req: Request, file: File, cb: (error: (Error | null), filename: string) => void): void {
    cb(null, file.originalname);
  }
});

export const upload = multer({ storage: storage });
