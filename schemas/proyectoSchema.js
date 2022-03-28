const joi = require('joi');
//creamos un schema para cada campo  nos ayuda a reutilizar el codigo en creaciones o actualizaciones
//siempre se empieza con el tipo de capo
const id = joi.number().integer();
const name = joi.string().min(3).max(30).messages({
  'string.base': `" nombre "debe ser un tipo de 'texto'`,
  'string.empty': `"nombre "no puede ser un campo vacío`,
  'string.min': `"nombre" debe tener una longitud mínima de {#limit}`,
  'string.max': `"nombre" debe tener una longitud máxima de {#limit}`
});
const description = joi.string();
const image = joi.string().uri();
const link = joi.string().uri();

//creamos schema para la creacion
const createProyectoSchema = joi.object({
  name: name.required(),
  description: description.required(),
  image: image.required(),
  link: link.required()
})

//creamos schema para la actualizacion
const UpdateProyectotSchema = joi.object({
  name: name,
  description: description,
  image: image,
  link: link
})

//creamos schema para la mostrar
const getProyectoSchema = joi.object({
  id: id.required(),
})

module.exports = {createProyectoSchema, UpdateProyectotSchema, getProyectoSchema}
