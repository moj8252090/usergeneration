import Avatar from "./components/general/Avatar";
import Box from "./components/general/Box";
import UserGeneration from "./components/UserGeneration/UserGeneration";
import { getRandomUser } from "./helpers/apies";
import { useState, useEffect } from "react";
import SnackbarProvider from "react-simple-snackbar";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [isUserGenerated, setIsUserGenerated] = useState(false);
  const [isEditUser, setIsEditUser] = useState(false);

  useEffect(() => {
    getRandomUser().then(({ data }) => {
      setLoading(false);

      /**
       * storing user result from API call
       */
      const user = data.results[0];

      /**
       * Formatting the data from API to the shape we need
       */
      const body = {
        vorname: user?.name?.first || "",
        nachname: user?.name?.last || "",
        email: user?.email || "",
        strasse: user?.location?.street?.name || "",
        hsnr: user?.location?.street?.number || "",
        plz: user?.location?.postcode || "",
        ort: user?.location?.city || "",
        avatar: user?.picture?.large,
      };

      setUser(body);
    });
    return;
  }, []);

  return (
    <SnackbarProvider>
      <div className="content-wrapper">
        <Box className="m-auto">
          <Avatar loading={loading} src={user?.avatar} />

          <UserGeneration
            loading={loading}
            setIsUserGenerated={setIsUserGenerated}
            isUserGenerated={isUserGenerated}
            user={user}
            setUser={setUser}
            isEditUser={isEditUser}
            setIsEditUser={setIsEditUser}
          />
        </Box>
      </div>
    </SnackbarProvider>
  );
}

export default App;
