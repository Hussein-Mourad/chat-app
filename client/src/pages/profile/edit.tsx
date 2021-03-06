import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Footer from "components/Footer";
import LoadingScreen from "components/LoadingScreen";
import NavBar from "components/NavBar";
import ProfileEdit from "components/ProfileEdit";
import useAuthentication from "hooks/useAuthentication";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Edit() {
  const { user: serverUser } = useAuthentication();
  const [user, setUser] = useState(serverUser);

  if (!serverUser) return <LoadingScreen />;
  return (
    <div className="container p-3 mx-auto md:p-5">
      <Head>
        <title>Auth app | Edit</title>

        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src *;
   img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *;
   style-src  'self' 'unsafe-inline' *"
        />
      </Head>
      <NavBar user={user || serverUser} />
      <div className="flex flex-col max-w-3xl mx-auto mt-8">
        <Link href="/profile" passHref>
          <button className="flex items-center text-base text-blue-400 focus:outline-none">
            <ChevronLeftIcon className="mr-1" /> Back
          </button>
        </Link>
        <ProfileEdit user={user || serverUser} setUser={setUser} />
        <Footer className="flex mt-2" />
      </div>
    </div>
  );
}
