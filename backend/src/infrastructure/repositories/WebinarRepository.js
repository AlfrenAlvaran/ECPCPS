import BaseRepository from "../../shared/base/BaseRepository.js";
import WebinarModel from "../database/models/WebinarModel.js";

class WebinarRepository extends BaseRepository {
  constructor() {
    super(WebinarModel);
  }

  async addAttendee(id, attendee) {
    return await WebinarModel.findByIdAndUpdate(
      id,
      {
        $push: { attendees: attendee },
      },
      { new: true }
    );
  }
}

export default WebinarRepository;
