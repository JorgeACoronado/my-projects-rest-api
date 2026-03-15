export function getTraceId(c) {
  return c.get('traceId') || crypto.randomUUID()
}

export function buildErrorPayLoad(c, code, message, details = []) {
  return {
    error: {
      code,
      message,
      details,
      trace_id: getTraceId(c),
    },
  }
}

export function sendError(c, status, code, message, details = []) {
  return c.json(buildErrorPayLoad(c, code, message, details), status)
}