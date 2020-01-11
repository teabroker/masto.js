import { Emoji } from './emoji';
import { StatusVisibility } from './status';

export interface Account {
  /** The ID of the account */
  id: string;
  /** The username of the account */
  username: string;
  /** Equals username for local users, includes `@domain` for remote ones */
  acct: string;
  /** The account's display name */
  display_name: string;
  /** Boolean for when the account cannot be followed without waiting for approval first */
  locked: boolean;
  /** Boolean to indicate that the account performs automated actions */
  bot?: boolean | null;
  /** The time the account was created */
  created_at: string;
  /** The number of followers for the account */
  followers_count: number;
  /** The number of accounts the given account is following */
  following_count: number;
  /** The number of statuses the account has made */
  statuses_count: number;
  /** Biography of user */
  note: string;
  /** URL of the user's profile page (can be remote) */
  url: string;
  /** URL to the avatar image */
  avatar: string;
  /** URL to the avatar static image (gif) */
  avatar_static: string;
  /** URL to the header image */
  header: string;
  /** URL to the header static image (gif) */
  header_static: string;
  /** Array of Emoji in account username and note */
  emojis: Emoji[];
  /** If the owner decided to switch accounts, new account is in this attribute */
  moved?: boolean | null;
  /** Array of profile metadata field, each element has 'name' and 'value' */
  fields?: AccountField[] | null;
}

export interface AccountField {
  /** (2.4 or later) Label of profile metadata field. */
  name?: string | null;
  /** (2.4 or later) Value of profile metadata field. */
  value?: string | null;
  /** date time*/
  verified_at?: string | null;
}

export interface AccountIdentityProof {
  /** Name of provider (such as "Keybase") */
  provider: string;
  /** Username in the provider */
  provider_username: string;
  /** The time the proof was updated */
  updated_at: string;
  /** URL of proof */
  proof_url: string;
  /** URL of profile on the provider */
  profile_url: string;
}

export interface AccountCredentials extends Account {
  source: AccountSource;
}

export interface AccountSource {
  /** Selected preference: Default privacy of new toots */
  privacy?: StatusVisibility | null;
  /** Selected preference: Mark media as sensitive by default? */
  sensitive?: boolean | null;
  /** User's default language */
  language: string | null;
  /** Plain-text version of the account's `note` */
  note: string;
  /** Plain-text version of the account's field */
  fields: AccountField;
}
