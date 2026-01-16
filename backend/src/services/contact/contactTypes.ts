/**
 * @summary
 * Type definitions for Contact entity.
 *
 * @module services/contact/contactTypes
 */

/**
 * @interface ContactEntity
 * @description Represents a contact submission entity
 *
 * @property {number} id - Unique contact identifier
 * @property {string} name - Contact name
 * @property {string} email - Contact email
 * @property {string|null} phone - Contact phone (optional)
 * @property {string} dateCreated - ISO 8601 timestamp of creation
 */
export interface ContactEntity {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  dateCreated: string;
}

/**
 * @interface ContactCreateRequest
 * @description Request payload for creating a contact submission
 *
 * @property {string} name - Contact name (required)
 * @property {string} email - Contact email (required)
 * @property {string|null} phone - Contact phone (optional)
 */
export interface ContactCreateRequest {
  name: string;
  email: string;
  phone: string | null;
}

/**
 * @interface ContactCreateResponse
 * @description Response structure for contact submission
 *
 * @property {string} message - Confirmation message
 */
export interface ContactCreateResponse {
  message: string;
}
