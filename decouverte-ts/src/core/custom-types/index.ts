export type StringOrNull = string | null

export type StringDisplay = (message: string) => void

export type RequestString = (message: string) => StringOrNull;