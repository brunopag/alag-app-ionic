export class Notification {

    constructor (
        public _id ?: string,
        public titulo_es ?: string,
        public titulo_en ?: string,
        public content_es ?: string,
        public content_en ?: string,
        public congreso ?: string,
        public read ?: boolean,
        public fechaNotification ?: string
    ) { }

}
