import { DateSchemaConstructor } from 'yup';

declare module 'yup' {
    // eslint-disable-next-line no-shadow
    interface DateSchema {
        // eslint-disable-next-line no-unused-vars
        format(format: string): DateSchema;
    }
}

const date: DateSchemaConstructor;
export default date;
