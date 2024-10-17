export interface objectType {
    id: string,
    name: string,
    age: number
}

export interface AppState {
    data: string;
    items: objectType[];
}