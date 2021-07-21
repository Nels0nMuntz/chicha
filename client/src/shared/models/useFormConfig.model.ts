export interface IUseFormField {
    name: string
    type: 'text' | 'password'
    label: string
    id: string
    error?: string
    initialValue: string
};

export interface IUseFormConfig {
    fields: Array<IUseFormField>,
};