const baseUrl =
  process.env.NODE_ENV === "production" ? process.env.Purl : process.env.durl;
export default baseUrl;
