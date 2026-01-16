/**
 * @summary
 * Type definitions for Email service.
 *
 * @module services/email/emailTypes
 */

/**
 * @interface EmailRecipient
 * @description Email recipient information
 *
 * @property {string} name - Recipient name
 * @property {string} email - Recipient email address
 */
export interface EmailRecipient {
  name: string;
  email: string;
}

/**
 * @interface EmailTemplate
 * @description Email template structure
 *
 * @property {string} subject - Email subject line
 * @property {string} htmlBody - HTML email body
 * @property {string} textBody - Plain text email body (fallback)
 */
export interface EmailTemplate {
  subject: string;
  htmlBody: string;
  textBody: string;
}

/**
 * @interface ConfirmationEmailParams
 * @description Parameters for confirmation email
 *
 * @property {string} recipientName - Name of the person who submitted contact
 * @property {string} recipientEmail - Email address to send confirmation to
 */
export interface ConfirmationEmailParams {
  recipientName: string;
  recipientEmail: string;
}

/**
 * @interface EmailSendResult
 * @description Result of email sending operation
 *
 * @property {boolean} success - Whether email was sent successfully
 * @property {string} message - Result message
 * @property {string} [messageId] - Email message ID (if successful)
 */
export interface EmailSendResult {
  success: boolean;
  message: string;
  messageId?: string;
}
