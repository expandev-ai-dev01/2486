/**
 * @summary
 * Email service for sending confirmation emails.
 * Simulates email sending in development (logs to console).
 * In production, this would integrate with email service provider (SendGrid, AWS SES, etc.).
 *
 * @module services/email/emailService
 */

import { ConfirmationEmailParams, EmailSendResult } from './emailTypes';
import { generateConfirmationEmailTemplate } from './emailTemplates';

/**
 * @summary
 * Sends confirmation email to contact form submitter.
 * Currently simulates email sending by logging to console.
 * In production, replace with actual email service integration.
 *
 * @function sendConfirmationEmail
 * @module services/email
 *
 * @param {ConfirmationEmailParams} params - Email parameters
 * @param {string} params.recipientName - Name of the person who submitted contact
 * @param {string} params.recipientEmail - Email address to send confirmation to
 *
 * @returns {Promise<EmailSendResult>} Result of email sending operation
 *
 * @example
 * const result = await sendConfirmationEmail({
 *   recipientName: 'João Silva',
 *   recipientEmail: 'joao@example.com'
 * });
 * // Returns: { success: true, message: 'Email sent successfully', messageId: '...' }
 */
export async function sendConfirmationEmail(
  params: ConfirmationEmailParams
): Promise<EmailSendResult> {
  const { recipientName, recipientEmail } = params;

  try {
    // Generate email template
    const template = generateConfirmationEmailTemplate(recipientName);

    /**
     * @rule {be-email-simulation}
     * In development, simulate email sending by logging to console.
     * In production, replace this with actual email service integration:
     * - SendGrid: https://sendgrid.com/
     * - AWS SES: https://aws.amazon.com/ses/
     * - Nodemailer with SMTP: https://nodemailer.com/
     */
    if (process.env.NODE_ENV === 'production') {
      // TODO: Integrate with actual email service provider
      // Example with SendGrid:
      // const sgMail = require('@sendgrid/mail');
      // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      // const msg = {
      //   to: recipientEmail,
      //   from: 'noreply@hortela.com',
      //   subject: template.subject,
      //   text: template.textBody,
      //   html: template.htmlBody,
      // };
      // await sgMail.send(msg);

      console.log('📧 [PRODUCTION] Email would be sent via email service provider');
      console.log(`   To: ${recipientEmail}`);
      console.log(`   Subject: ${template.subject}`);
    } else {
      // Development mode: log email to console
      console.log('\n📧 ========== CONFIRMATION EMAIL ==========');
      console.log(`From: HORTelã - Produtos Naturais <noreply@hortela.com>`);
      console.log(`To: ${recipientName} <${recipientEmail}>`);
      console.log(`Subject: ${template.subject}`);
      console.log('\n--- HTML BODY ---');
      console.log(template.htmlBody);
      console.log('\n--- TEXT BODY ---');
      console.log(template.textBody);
      console.log('========================================\n');
    }

    // Simulate successful email sending
    const messageId = `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    return {
      success: true,
      message: 'Confirmation email sent successfully',
      messageId,
    };
  } catch (error: any) {
    console.error('❌ Error sending confirmation email:', error);

    return {
      success: false,
      message: `Failed to send confirmation email: ${error.message}`,
    };
  }
}
