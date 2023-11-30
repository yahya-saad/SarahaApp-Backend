import nodemailer from "nodemailer";

export const sendMail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  let info = await transporter.sendMail({
    from: `"SarahaApp" ${process.env.EMAIL} `,
    to,
    subject,
    html,
  });

  return info.accepted.length > 0 ? true : false;
};
