export type Notification = {
    type: 'error' | 'info' | 'successful',
    title: string,
    body: string,
    id: number
}
