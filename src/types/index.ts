export type Event = {
    id: number;
    title: string;
    description: string;
    date: string;
    registrations: Registration[];
};

export type Registration = {
    id: number;
    fullName: string;
    email: string;
};