const status = (request, response) => {
  response.status(200).json({ message: "tudo ok!" });
};

export default status;
