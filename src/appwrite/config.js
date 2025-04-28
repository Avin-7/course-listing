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

  async uploadData(formData) {
    try {
      return await this.database.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        ID.unique(),
        formData
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error " + error);
    }
  }

  async getCourses() {
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
  async getWishlistedCourses(numbers) {
    try {
      return await this.database.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        [Query.equal("$id", numbers)]
      );
    } catch (error) {
      console.log("Appwrite service :: getData :: error " + error);
      return false;
    }
  }
  async updateWishlistStatus(id, status) {
    try {
      return await this.database.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        id,
        { wishlisted: status }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error " + error);
    }
  }

  async getCourse(id) {
    try {
      return await this.database.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        id
      );
    } catch (error) {
      console.log("Appwrite service :: getData :: error " + error);
      return false;
    }
  }

  async getCourseByTopic(val) {
    try {
      return await this.database.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        [Query.equal("topic", val)]
      );
    } catch (error) {
      console.log("Appwrite service :: getCourseByTopic :: error " + error);
      return false;
    }
  }
  async getCourseByCategory(val) {
    console.log(val);
    try {
      return await this.database.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        [Query.equal("category", val)]
      );
    } catch (error) {
      console.log("Appwrite service :: getCourseByCategory :: error " + error);
      return false;
    }
  }
  async getCourseByPlatform(val) {
    console.log(val);
    try {
      return await this.database.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        [Query.equal("platform", val)]
      );
    } catch (error) {
      console.log("Appwrite service :: getCourseByPlatform :: error " + error);
      return false;
    }
  }
  async getCourseByPrice(val) {
    console.log(val);
    try {
      return await this.database.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        [Query.lessThanEqual("price", val)]
      );
    } catch (error) {
      console.log("Appwrite service :: getCourseByPrice :: error " + error);
      return false;
    }
  }
  async getCourseByRating(val) {
    console.log(val);
    try {
      return await this.database.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        [Query.greaterThanEqual("ratings", val)]
      );
    } catch (error) {
      console.log("Appwrite service :: getCourseByRating :: error " + error);
      return false;
    }
  }
  async createWishlist({ userId, wishlist }) {
    try {
      return await this.database.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteWishlistCollectionId,
        ID.unique(),
        { userId: userId, wishlist: wishlist }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error " + error);
    }
  }

  async checkWishlistExists(userId) {
    try {
      const res = await this.database.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteWishlistCollectionId,
        [Query.equal("userId", userId)]
      );
      return res;
    } catch (error) {
      console.log("Appwrite service :: checkWishlistExists :: error " + error);
    }
  }

  async getWishlists(userId) {
    try {
      return await this.database.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteWishlistCollectionId,
        [Query.equal("userId", userId)]
      );
    } catch (error) {
      console.log("Appwrite service :: getData :: error " + error);
    }
  }

  async updateWishlist(id, userId, wishlist) {
    if (id) {
      try {
        return await this.database.updateDocument(
          conf.appWriteDatabaseId,
          conf.appWriteWishlistCollectionId,
          id,
          { userId: userId, wishlist: wishlist }
        );
      } catch (error) {
        console.log("Appwrite service :: updatePost :: error " + error);
      }
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
