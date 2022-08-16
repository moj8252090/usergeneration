import * as yup from 'yup';

/**
 * Validation of user generation form
 */
const UserGenerationSchema = yup.object().shape(
  {vorname: yup.string().min(3).max(255).required(),
    nachname: yup.string().min(3).max(255).required(),
    email: yup.string().email().min(3).max(255).required(),
    strasse: yup.string().min(3).max(255).required(),
    hsnr: yup.string().min(3).max(255).required(),
    plz: yup.string().min(3).max(255).required(),
    ort: yup.string().min(3).max(255).required()}
);

export default UserGenerationSchema;