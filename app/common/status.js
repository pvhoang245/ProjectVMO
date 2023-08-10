function statusError(statusCode) {
    switch (statusCode) {
        case 200:
            return 'Ok'
        case 400:
            return 'Bad Request';
        case 403:
            return 'Forbidden';
        case 404:
            return 'Not Found';
        case 500:
            return 'Internal Server Error';
    }
}

module.exports = statusError;