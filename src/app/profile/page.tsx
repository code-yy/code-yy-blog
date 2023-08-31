import { NextPage } from "next/types";
import { Head, MainLayout } from "@/component/Layout";
import { Profile } from "@/component/Page/Profile";

const ProfilePage: NextPage = () => {
  return (
    <>
      <Head />
      <MainLayout>
        <Profile />
      </MainLayout>
    </>
  );
};

export default ProfilePage;
