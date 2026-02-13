export type review = {
    id: number;
    user_id: number;
    message: string;
    status: number;
};

export type statusCounts = {
    '0': number;
    '1': number;
    all: number;
};

export interface SetMaking {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (value: any): void;
}
