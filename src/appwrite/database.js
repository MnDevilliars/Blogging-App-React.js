import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class DatabaseService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userID }) {
        title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
        if(content.length > 255){
            content = content.slice(0,255);
        }

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            )
        } catch (error) {
            console.log("Appwrite service database :: createPost :: Error ", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
        if(content.length > 255){
            content = content.slice(0,255);
        }

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service database :: updatePost :: Error ", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service database :: deletePost :: Error ", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("Appwrite service database :: getPost :: Error ", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service database :: getPosts :: Error ", error);
            return false
        }
    }

    // FILE UPLOAD SERVICES

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service database :: uploadFile :: Error ", error);
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileID
            )
            return true;
        } catch (error) {
            console.log("Appwrite service database :: deleteFile :: Error ", error);
            return false;
        }
    }

    getFilePreview(fileID){
        return  this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileID
        )
    }
}

const databaseService = new DatabaseService()

export default databaseService;