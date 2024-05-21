// This file is auto-generated by @hey-api/openapi-ts

export const $UUID = {
    type: 'string',
    description: `Stringified UUIDv4.
See [RFC 4112](https://tools.ietf.org/html/rfc4122)`
} as const;

export const $Project = {
    properties: {
        shared_with_client: {
            type: 'boolean'
        },
        updated_by: {
            '$ref': '#/components/schemas/UUID'
        },
        last_updated: {
            type: 'string'
        },
        date_created: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        id: {
            '$ref': '#/components/schemas/UUID'
        }
    },
    required: ['shared_with_client', 'updated_by', 'last_updated', 'date_created', 'name', 'id'],
    type: 'object'
} as const;

export const $ApiInternalError = {
    properties: {
        message: {
            type: 'string'
        }
    },
    required: ['message'],
    type: 'object'
} as const;

export const $ApiResponseListMeta = {
    properties: {
        total: {
            type: 'number',
            format: 'double'
        }
    },
    required: ['total'],
    type: 'object',
    additionalProperties: false
} as const;

export const $ApiResponseList_Project_ = {
    properties: {
        data: {
            items: {
                '$ref': '#/components/schemas/Project'
            },
            type: 'array'
        },
        errors: {
            items: {
                '$ref': '#/components/schemas/ApiInternalError'
            },
            type: 'array'
        },
        meta: {
            '$ref': '#/components/schemas/ApiResponseListMeta'
        }
    },
    required: ['data', 'errors'],
    type: 'object',
    additionalProperties: false
} as const;

export const $ApiResponse_Project_ = {
    properties: {
        data: {
            '$ref': '#/components/schemas/Project'
        },
        errors: {
            items: {
                '$ref': '#/components/schemas/ApiInternalError'
            },
            type: 'array'
        },
        meta: {
            type: 'number',
            enum: [
                null
            ],
            nullable: true
        }
    },
    required: ['data', 'errors'],
    type: 'object',
    additionalProperties: false
} as const;

export const $ProjectCreateParams = {
    properties: {
        name: {
            type: 'string'
        }
    },
    required: ['name'],
    type: 'object',
    additionalProperties: false
} as const;