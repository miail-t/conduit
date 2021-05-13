export type Notification = {
    type: 'error' | 'info' | 'successful',
    title: string,
    description: string,
    id: number
}
