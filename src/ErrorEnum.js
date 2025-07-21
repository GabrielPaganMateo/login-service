class ErrorEnum {

    static FAILURE = 'Network Failure'
    static ERROR = 'Server Error' 
    static INVALID = 'Invalid Credentials'

    static isError(error) {
        return [ErrorEnum.FAILURE, ErrorEnum.ERROR, ErrorEnum.INVALID].includes(error);
    }

    static getError(error) {
        return [ErrorEnum.FAILURE, ErrorEnum.ERROR, ErrorEnum.INVALID].find((ee) => {if (error === ee) {return ee}})
    }
}

export default ErrorEnum;