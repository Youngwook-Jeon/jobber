import path from 'path';

import { IEmailLocals, winstonLogger } from '@youngwook-jeon/jobber-shared';
import nodemailer from 'nodemailer';
import { config } from '@notifications/config';
import Email from 'email-templates';

const log = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'mailTransportHelper', 'debug');

async function emailTemplates(template: string, receiver: string, locals: IEmailLocals): Promise<void> {
  try {
    const transporter = nodemailer.createTransport({
      service: 'naverworks',
      host: 'smtp.naver.com',
      port: 587,
      auth: {
        user: config.SENDER_EMAIL,
        pass: config.SENDER_EMAIL_PASSWORD
      }
    });
    const email = new Email({
      message: {
        from: `Jobber App <${config.SENDER_EMAIL}>`
      },
      send: true,
      preview: false,
      transport: transporter,
      views: {
        options: {
          extension: 'ejs'
        }
      },
      juice: true,
      juiceResources: {
        preserveImportant: true,
        webResources: {
          relativeTo: path.join(__dirname, '../build')
        }
      }
    });

    await email.send({
      template: path.join(__dirname, '..', 'src/emails', template),
      message: { to: receiver, from: config.SENDER_EMAIL },
      locals
    });
  } catch (error) {
    log.error(error);
  }
}

export { emailTemplates };
