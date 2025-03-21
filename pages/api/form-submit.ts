import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { fullName, email, businessType, numProducts } = req.body;

      if (!fullName || !email || !businessType || !numProducts) {
        return res.status(400).json({ message: "All fields are required" });
      }

      console.log("Form Data Received:", {
        fullName,
        email,
        businessType,
        numProducts,
      });

      return res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error handling form submission:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}