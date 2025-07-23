export const registerDTO = ({ name, email }) => {
  if (!name || !email) throw new Error("Name and Email are required");

  return {
    name,
    email,
  };
};
