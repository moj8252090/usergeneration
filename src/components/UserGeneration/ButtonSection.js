import { useFormContext } from "react-hook-form";
import EditableState from "./ButtonState/EditableState";
import GeneratedUser from "./ButtonState/GeneratedUser";
import UserGenerationState from "./ButtonState/UserGenerationState";
import { useSnackbar } from "react-simple-snackbar";
import DangerIcon from "../../assets/images/danger.svg";

/**
 * Designs of snackbar
 */
const snackbarOptions = {
  position: "top-center",
  style: {
    top: 0,
    backgroundColor: "#FF0018",
    padding: "5px 20px",
    boxShadow: "0px 0px 48px #22222214",
    borderRadius: "0px 0px 30px 30px",
    font: "16px",
    color: "#FFFFFF",
    minWidth: "632px",
    maxWidth: "100%",
    minHeight: "96px",
  },
};

/**
 * @param isUserGenerated useState from parent scope to see if user is clicked on generate user button
 * @param setIsUserGenerated useState from parent scope to handle changes in isUserGenerated
 * @param setIsEditUser useState from parent scope to handle changes in isEditUser
 * @param isEditUser useState from parent scope to see if user is editing a form
 * @param setUser useState from parent scope to handle changes in user
 * @param user useState from parent scope to keep the user data
 * @param loading useState from parent scope to see the loading state of our API call
 * @returns JSX Element
 */
function ButtonSection({
  isUserGenerated,
  setIsUserGenerated,
  setIsEditUser,
  isEditUser,
  setUser,
  user,
  loading,
}) {
  const [openSnackbar, closeSnackbar] = useSnackbar(snackbarOptions);

  /**
   * Destructuring data we need form useFormContext to sync our states
   */
  const {
    formState: { isValid },
    getValues,
    reset,
  } = useFormContext();

  /**
   * This is called when user clicks on "User generieren" button
   */
  const generateUser = () => {
    window.localStorage.removeItem("generated-user");
    setIsUserGenerated(true);
  };

  /**
   * This is called when user clicks on "Bearbeiten" button
   */
  const handleEdit = () => {
    setIsEditUser(true);
  };

  /**
   * This is called when user clicks on "Speichern" button
   */
  const handleEditForm = () => {
    if (isValid) {
      const newUser = getValues();
      setUser({ ...user, ...newUser });
      reset({ ...user, ...newUser });
      setIsEditUser(false);
    } else {
      openSnackbar(() => (
        <div className="snackbar-inner">
          <img width={24} height="auto" src={DangerIcon} alt="" />
          Bitte korrigieren Sie die markierten Eingabefelder.
        </div>
      ));
      setTimeout(closeSnackbar, 2000);
    }
  };

  /**
   * This is called when user clicks on "User anlegen" button
   */
  const handleSave = () => {
    window.localStorage.setItem("generated-user", JSON.stringify(user));
  };

  return (
    <>
      {isEditUser ? (
        <EditableState
          onSave={handleEditForm}
          onCancel={() => {
            reset();
            setIsEditUser(false);
          }}
        />
      ) : isUserGenerated ? (
        <GeneratedUser onEdit={handleEdit} onSave={handleSave} />
      ) : (
        <UserGenerationState loading={loading} onGenerate={generateUser} />
      )}
    </>
  );
}

export default ButtonSection;
