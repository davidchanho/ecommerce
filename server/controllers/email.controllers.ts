import { Request, Response } from "express";
import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";

export default {
    send: async (req: Request, res: Response) => {
        const email = req.body.email;

        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        var options = {
            viewEngine: {
                extname: ".handlebars",
                layoutsDir: "views",
                defaultLayout: "email",
            },
            viewPath: "views",
            extName: ".handlebars",
        };

        transporter.use("compile", hbs(options));

        var mail = {
            from: "from@domain.com",
            to: "to@domain.com",
            subject: "Test",
            template: "email",
            context: {
                name: "Name",
            },
        };

        transporter.sendMail(mail, (err: any, data) => {
            if (err) {
                res.json({
                    msg: "fail",
                });
            }

            res.json({
                msg: nodemailer.getTestMessageUrl(data),
            });
        });
    },
};
