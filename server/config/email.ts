import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export async function gmailEmail() {
    return nodemailer.createTransport({
        service: "gmail",
        secure: false,
        auth: {
            user: process.env.NODEMAIL_USER,
            pass: process.env.NODEMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
}

export async function testEmail() {
    let testAccount = await nodemailer.createTestAccount();

    let transport = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    return transport;
}
