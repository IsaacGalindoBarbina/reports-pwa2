export type Entity<ID extends number | string> = {
    id : ID;
}

export type TPagination = {
    orderBy?: string;
    page?: number;
    offset?: number;
    limit?: number;
    order?: string;
    filter?: string;

}

export type JSON = {
    [x : string]: any;
};

export type JSONArray = JSON[];
export type TStatus = Entity<number> & {
    description?: string;
};

export enum Error {
    MISSING_FIELDS = 'missingFields',
    RECORD_NOT_REGISTERED = 'RecordingRegistered',
    RECORD_NOT_FOUND = 'RecordNotUpdated',
    NO_DATA_FOUND = 'NotDataFound',
    CREDENTIALS_MISMATCH = 'CredentialMisMatch',
    UNAUTHORIZED = 'Unauthorized'
}