import { type Account } from "./account";
import { type Report } from "./report";
import { type Status } from "./status";

interface BaseNotification<T> {
  /** The id of the notification in the database. */
  id: string;
  /** The type of event that resulted in the notification. */
  type: T;
  /** The timestamp of the notification. */
  createdAt: string;
  /** The account that performed the action that generated the notification. */
  account: Account;
}

type BaseNotificationPlain<T> = BaseNotification<T> & {
  /** Status that was the object of the notification, e.g. in mentions, reblogs, favourites, or polls. */
  status?: undefined | null;
  /** Report that was the object of the notification. Attached when type of the notification is admin.report. */
  report?: undefined | null;
};

type BaseNotificationWithStatus<T> = BaseNotification<T> & {
  /** Status that was the object of the notification, e.g. in mentions, reblogs, favourites, or polls. */
  status: Status;
  /** Report that was the object of the notification. Attached when type of the notification is admin.report. */
  report?: undefined | null;
};

type BaseNotificationWithReport<T> = BaseNotification<T> & {
  /** Status that was the object of the notification, e.g. in mentions, reblogs, favourites, or polls. */
  status?: undefined | null;
  /** Report that was the object of the notification. Attached when type of the notification is admin.report. */
  report: Report;
};

/**
 * Someone mentioned you in their status
 */
export type MentionNotification = BaseNotificationWithStatus<"mention">;

/**
 * Someone you enabled notifications for has posted a status
 */
export type StatusNotification = BaseNotificationWithStatus<"status">;

/**
 * Someone boosted one of your statuses
 */
export type ReblogNotification = BaseNotificationWithStatus<"reblog">;

/**
 * Someone followed you
 */
export type FollowNotification = BaseNotificationPlain<"follow">;

/**
 * Someone requested to follow you
 */
export type FollowRequestNotification = BaseNotificationPlain<"follow_request">;

/**
 * Someone favourited one of your statuses
 */
export type FavouriteNotification = BaseNotificationWithStatus<"favourite">;

/**
 * A poll you have voted in or created has ended
 */
export type PollNotification = BaseNotificationWithStatus<"poll">;

/**
 * A status you interacted with has been edited
 */
export type UpdateNotification = BaseNotificationWithStatus<"update">;

/**
 * Someone signed up (optionally sent to admins)
 */
export type AdminSignUpNotification = BaseNotificationPlain<"admin.sign_up">;

export type AdminReportNotification =
  BaseNotificationWithReport<"admin.report">;

/**
 * Represents a notification of an event relevant to the user.
 * @see https://docs.joinmastodon.org/entities/notification
 */
export type Notification =
  | MentionNotification
  | StatusNotification
  | ReblogNotification
  | FollowNotification
  | FollowRequestNotification
  | FavouriteNotification
  | PollNotification
  | UpdateNotification
  | AdminSignUpNotification
  | AdminReportNotification;

export type NotificationType = Notification["type"];
