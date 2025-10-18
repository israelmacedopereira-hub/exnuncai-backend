const Joi = require('joi');

const historicoItem = Joi.object({
  data: Joi.string().isoDate().optional(),
  descricao: Joi.string().optional()
});

const createSchema = Joi.object({
  clienteId: Joi.string().trim().required(),
  numero: Joi.string().trim().required(),
  tipo: Joi.string().trim().required(),
  status: Joi.string().trim().required(),
  historico: Joi.array().items(historicoItem).optional()
});

const updateSchema = Joi.object({
  clienteId: Joi.string().trim().optional(),
  numero: Joi.string().trim().optional(),
  tipo: Joi.string().trim().optional(),
  status: Joi.string().trim().optional(),
  historico: Joi.array().items(historicoItem).optional()
});

function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (error) {
      const errors = error.details.map(d => ({ message: d.message, path: d.path }));
      return res.status(400).json({ errors });
    }
    req.body = value;
    next();
  };
}

module.exports = {
  validateCreate: validate(createSchema),
  validateUpdate: validate(updateSchema)
};