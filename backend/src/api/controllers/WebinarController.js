import BaseController from "../../shared/base/BaseController.js";
import fs from "fs/promises";
class WebinarController extends BaseController {
  constructor(service, cloudService) {
    super(service);
    this.cloudService = cloudService;
  }

  createWebinar = async (req, res, next) => {
    try {
      const filePath = req.file?.path;

      if (!filePath)
        return res.status(400).json({ message: "Image is required" });

      const uploaded = await this.cloudService.upload(filePath);

      const webinarData = {
        ...req.body,
        img: uploaded.url,
        publicId: uploaded.publicId,
      };

      await fs.unlink(filePath);

      const createdWebinar = await this.service.execute(webinarData);

      res.status(201).json({ success: true, data: createdWebinar });
    } catch (error) {
      next(error);
    }
  };

  registerAttendee = async (req, res, next) => {
    const { name, email } = req.body;
    const { id } = req.params;

    try {
      const webinar = await this.service.registerAttendees(id, {
        name,
        email,
      });

      res
        .status(200)
        .json({ success: true, message: "success", data: webinar });
    } catch (error) {
      next(error);
    }
  };
}
export default WebinarController;
