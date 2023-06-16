import * as admin from 'firebase-admin';
import { Injectable } from '@nestjs/common';


@Injectable()
export class FirebaseService {
  private static initialized = false;
  constructor() {
    if (!FirebaseService.initialized) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
      storageBucket: "norcentro-4ef27.appspot.com",
    })
    FirebaseService.initialized = true;
  }
  }

  async uploadImagesToFirebase(location: string, files: Express.Multer.File[]): Promise<object[]> {
    const uploadedUrls: object[] = [];

    for (const file of files) {
      const { originalname, buffer } = file;
      const storage = admin.storage();
      const bucket = storage.bucket();

      const uniqueFilename = `${Date.now()}-${originalname}`;
      const fileBlob = bucket.file(`${location}/imagenes/${uniqueFilename}`);

      await fileBlob.save(buffer, { contentType: file.mimetype });

      const publicUrl = await fileBlob.getSignedUrl({
        action: 'read',
        expires: Date.now() + 1000 * 60 * 60 * 24 * 90, // URL expires in 90 days
      });

      uploadedUrls.push({
        nombre_foto: uniqueFilename,
        link: publicUrl[0]
      });
    }
    return uploadedUrls
  }

  async uploadImageToFirebase(location: string, files: Express.Multer.File[]): Promise<string> {
    var uploadedUrl: string = "";

    for (const file of files) {
      const { originalname, buffer } = file;
      const storage = admin.storage();
      const bucket = storage.bucket();

      const uniqueFilename = `${Date.now()}-${originalname}`;
      const fileBlob = bucket.file(`${location}/imagenes/${uniqueFilename}`);

      await fileBlob.save(buffer, { contentType: file.mimetype });

      const publicUrl = await fileBlob.getSignedUrl({
        action: 'read',
        expires: Date.now() + 1000 * 60 * 60 * 24 * 90, // URL expires in 90 days
      });

      uploadedUrl = publicUrl[0]
    }

    return uploadedUrl
  }

}