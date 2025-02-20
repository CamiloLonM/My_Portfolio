/**
 * Represents a User.
 * This class encapsulates all the properties and behaviors related to a user.
 */
class User {
  id: string;
  gender: string;
  avatar: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  lastActiveAt: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: string;

  /**
   * Creates an instance of User.
   * @param {Object} params - An object containing the user's properties.
   * @param {string} params.id - The unique identifier for the user.
   * @param {string} params.gender - The gender of the user.
   * @param {string} params.avatar - The URL or path to the user's avatar image.
   * @param {string} params.country - The country where the user resides.
   * @param {string} params.email - The email address of the user.
   * @param {string} params.firstName - The first name of the user.
   * @param {string} params.lastName - The last name of the user.
   * @param {string} params.password - The password of the user (usually hashed).
   * @param {Date} params.lastActiveAt - The timestamp when the user was last active.
   * @param {string} params.status - The current status of the user (e.g., active, inactive).
   * @param {Date} params.createdAt - The timestamp when the user was created.
   * @param {Date} params.updatedAt - The timestamp when the user was last updated.
   * @param {string} params.updatedBy - The identifier of the user or system that last updated this user.
   */
  constructor({
    id,
    gender,
    avatar,
    country,
    email,
    firstName,
    lastName,
    password,
    lastActiveAt,
    status,
    createdAt,
    updatedAt,
    updatedBy,
  }: {
    id: string;
    gender: string;
    avatar: string;
    country: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    lastActiveAt: Date;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    updatedBy: string;
  }) {
    /**
     * @property {string} id - The unique identifier for the user.
     */
    this.id = id;

    /**
     * @property {string} gender - The gender of the user.
     */
    this.gender = gender;

    /**
     * @property {string} avatar - The URL or path to the user's avatar image.
     */
    this.avatar = avatar;

    /**
     * @property {string} country - The country where the user resides.
     */
    this.country = country;

    /**
     * @property {string} email - The email address of the user.
     */
    this.email = email;

    /**
     * @property {string} firstName - The first name of the user.
     */
    this.firstName = firstName;

    /**
     * @property {string} lastName - The last name of the user.
     */
    this.lastName = lastName;

    /**
     * @property {string} password - The password of the user (usually hashed).
     */
    this.password = password;

    /**
     * @property {Date} lastActiveAt - The timestamp when the user was last active.
     */
    this.lastActiveAt = lastActiveAt;

    /**
     * @property {string} status - The current status of the user (e.g., active, inactive).
     */
    this.status = status;

    /**
     * @property {Date} createdAt - The timestamp when the user was created.
     */
    this.createdAt = createdAt;

    /**
     * @property {Date} updatedAt - The timestamp when the user was last updated.
     */
    this.updatedAt = updatedAt;

    /**
     * @property {string} updatedBy - The identifier of the user or system that last updated this user.
     */
    this.updatedBy = updatedBy;
  }
}

export default User;
