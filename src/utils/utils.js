import * as Yup from "yup";

export const combineSchemas = (...schemas) => {
  return schemas.reduce(
    (combinedSchema, schema) => combinedSchema.concat(schema),
    Yup.object()
  );
};

export const  flattenFormData = (data) => {
  return Object.values(data).reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {});
}