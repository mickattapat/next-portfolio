import { info } from "@/models/info.mock";
import Profile from "@/view/Profile";

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Profile
        bio={info.bio}
        profileLogo={info.profileLogo}
        firstName={info.firstName}
        lastName={info.lastName}
        initials={info.initials}
        position={info.position}
        hobbies={info.hobbies}
        miniBio={info.miniBio}
      />
    </>
  );
}
