const genericResponse = (statusCode, res, body) => {
    body = body || ''
    res.status(statusCode);
    return {
        statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json, charset=utf-8'
        },
        data: body
    }
}

const genericError = (statusCode, res, error) => {
    const body = error ? { error } : null;
    return genericResponse(statusCode, res, body)
}

const response = {
    ok: (res,body = null )=> genericResponse(200, res, body),
    created: (res,body = null) => genericResponse(201, res, body),
    noContent: (res) => genericResponse(204, res, null),
    badRequest: (res,error) => genericError(400, res, error),
    notFound: (res,error) => genericResponse(404, res, error),
    internalServerError:(res, error) =>genericError(500, res,error)
}

module.exports = {
    response
}
