export default function validateCreateWebinarDto({ title, data, link }) {
  if (!title || typeof title !== "string") {
    throw new Error("Title is required and must be a string");
  }

  if (!title || typeof link !== "string") {
    throw new Error("link is required and must be a string");
  }

  return {
    title: title.trim(),
    link: link.trim(),
  };
}
