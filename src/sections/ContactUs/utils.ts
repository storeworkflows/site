
export const required = (value: string) => (value ? undefined : 'Required')

export const email = (value: string) => {
    const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return value
        .toLowerCase()
        .match(
            mailformat
        ) ?  undefined : "Mast be email"
}

export const composeValidators = (...validators: any[]) => (value: string) =>
    validators.reduce((error, validator) => error || validator(value), undefined)


