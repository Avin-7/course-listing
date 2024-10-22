/* eslint-disable no-useless-catch */
import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf.js";

export class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appWriteUrl);
    this.client.setProject(conf.appWriteProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async uploadData({
    name,
    description,
    platform,
    author,
    price,
    category,
    link,
    image,
    uploaded,
    duration,
    keywords,
  }) {
    try {
      return await this.database.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        ID.unique(),
        {
          name: name,
          description: description,
          platform: platform,
          author: author,
          price: price,
          category: category,
          link: link,
          image: image,
          uploaded: uploaded,
          duration: duration,
          keywords: keywords,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error " + error);
    }
  }

  async getData() {
    try {
      return await this.database.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId
      );
    } catch (error) {
      console.log("Appwrite service :: getData :: error " + error);
      return false;
    }
  }
  //file upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile:: error " + error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error " + error);
      return false;
    }
  }

  getFilePreiview(fileId) {
    return this.bucket.getFilePreview(conf.appWriteBucketId, fileId);
  }
}

const service = new Service();
export default service;
