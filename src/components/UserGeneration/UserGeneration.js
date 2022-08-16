import ButtonSection from "./ButtonSection";
import TextField from "../general/TextField";
import UserGenerationSchema from "../../helpers/validations/UserGenerationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";


/**
 * 
 * @param user useState from parent scope to keep the user data
 * @param setUser useState from parent scope to handle changes in user
 * @param isUserGenerated useState from parent scope to see if user is clicked on generate user button
 * @param setIsUserGenerated useState from parent scope to handle changes in isUserGenerated
 * @param isEditUser useState from parent scope to see if user is editing a form
 * @param setIsEditUser useState from parent scope to handle changes in isEditUser
 * @param loading useState from parent scope to see the loading state of our API call
 * @returns JSX Element
 */
function UserGeneration({
  user,
  setUser,
  isUserGenerated,
  setIsUserGenerated,
  isEditUser,
  setIsEditUser,
  loading,
}) {

  /**
   * Default value of our form
   */
  const defaultValues = {
    vorname: user?.vorname || "",
    nachname: user?.nachname || "",
    email: user?.email || "",
    strasse: user?.strasse || "",
    hsnr: user?.hsnr || "",
    plz: user?.plz || "",
    ort: user?.ort || "",
  };

  /**
   * setting all useForm methods
   * 
   * resolver: sets our validation schema 
   * mode: Handles when to check the validation rule in each input
   * defaultValues: Setting our default value in page mount 
   */
  const methods = useForm({
    resolver: yupResolver(UserGenerationSchema),
    mode: "onBlur",
    defaultValues,
  });

  /**
   * Destructuring reset function from methods
   */
  const { reset } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [loading]);

  return (
    <FormProvider {...methods}>
      <form>
        <div className="row">
          <div className="col-6">
            <TextField
              readonly={!isEditUser}
              name="vorname"
              placeholder="Vorname"
            />
          </div>

          <div className="col-6">
            <TextField
              readonly={!isEditUser}
              name="nachname"
              placeholder="Nachname"
            />
          </div>

          <div className="col-12">
            <TextField
              readonly={!isEditUser}
              name="email"
              placeholder="E-Mail-Adresse"
            />
          </div>

          <div className="col-9">
            <TextField
              readonly={!isEditUser}
              name="strasse"
              placeholder="Strasse"
            />
          </div>

          <div className="col-3">
            <TextField readonly={!isEditUser} name="hsnr" placeholder="Hsnr." />
          </div>

          <div className="col-5">
            <TextField readonly={!isEditUser} name="plz" placeholder="PLZ" />
          </div>

          <div className="col-7">
            <TextField readonly={!isEditUser} name="ort" placeholder="Ort" />
          </div>

          <div className="col-12">
            <ButtonSection
              isUserGenerated={isUserGenerated}
              setIsUserGenerated={setIsUserGenerated}
              setIsEditUser={setIsEditUser}
              isEditUser={isEditUser}
              setUser={setUser}
              user={user}
              loading={loading}
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default UserGeneration;
