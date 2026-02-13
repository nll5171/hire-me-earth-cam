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
