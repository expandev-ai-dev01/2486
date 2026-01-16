/**
 * @summary
 * In-memory store instance for Contact entity.
 * Provides singleton pattern for data storage without database.
 *
 * @module instances/contact/contactStore
 */

/**
 * Contact record structure
 */
export interface ContactRecord {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  dateCreated: string;
}

/**
 * In-memory store for Contact records
 */
class ContactStore {
  private records: Map<number, ContactRecord> = new Map();
  private currentId: number = 0;

  /**
   * Get next available ID
   */
  getNextId(): number {
    this.currentId += 1;
    return this.currentId;
  }

  /**
   * Get all records
   */
  getAll(): ContactRecord[] {
    return Array.from(this.records.values());
  }

  /**
   * Get record by ID
   */
  getById(id: number): ContactRecord | undefined {
    return this.records.get(id);
  }

  /**
   * Add new record
   */
  add(record: ContactRecord): ContactRecord {
    this.records.set(record.id, record);
    return record;
  }

  /**
   * Get total count of records
   */
  count(): number {
    return this.records.size;
  }

  /**
   * Clear all records (useful for testing)
   */
  clear(): void {
    this.records.clear();
    this.currentId = 0;
  }
}

/**
 * Singleton instance of ContactStore
 */
export const contactStore = new ContactStore();
