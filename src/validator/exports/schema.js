const Joi = require('joi');

const ExportNotesPayloadSchema = Joi.object({
  targetEmail: Joi.string().email({ tlds: true }),
});

module.exports = ExportNotesPayloadSchema;
