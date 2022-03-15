
export interface IPostData {
    data: IData
}

interface IData {
    "name": string, // Name of the task.
    "notes": string, // Free-form textual information associated with the task
    "projects": string[], // Array of project ids.
    "approval_status"?: "approved" | "changes_requested" | "pending" | "rejected" //Reflects the approval status of this task.
    "assignee"?: string | null, // Ids of a user.
    "completed"?: boolean, // True if the task is currently marked complete, false if not.
    "due_at"?: string | null, // The UTC date and time on which this task is due, or null if the task has no due time.
    "due_on"?: string, // The localized date on which this task is due, or null if the task has no due date.
    "followers"?: string[], // An array of strings identifying users.
    "html_notes"?: string, // The notes of the text with formatting as HTML
    "start_on"?: string | null, // The day on which work begins for the task , or null. Date format YYYY-MM-DD.
    "workspace"?: string // Id of a workspace.
}