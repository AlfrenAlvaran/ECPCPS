import { cloudinary } from "../config/cloudinary.js";

class CloudinaryService {
  async upload(filePath, folder = "webinars", options = {}) {
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder,
        ...options,
      });

      return {
        url: result.secure_url,
        publicId: result.public_id,
        resourceType: result.resource_type,
        originalFilename: result.original_filename,
      };
    } catch (error) {
     
      throw new Error("Failed to upload to Cloudinary: " + error.message);
    }
  }

  async delete(publicId) {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      if (result.result !== "ok") {
        throw new Error("Failed to delete image from Cloudinary");
      }
      return result;
    } catch (error) {
      console.error("Cloudinary delete error:", error);
      throw new Error("Failed to delete from Cloudinary: " + error.message);
    }
  }
}

export default CloudinaryService;
