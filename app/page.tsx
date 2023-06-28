import { info } from "@/models/info.mock";
import Profile from "@/view/Profile";

export default function Home() {
  return (
    <>
      <Profile
        bio={info.bio}
        profileLogo={info.profileLogo}
        firstName={info.firstName}
        lastName={info.lastName}
        initials={info.initials}
        position={info.position}
        miniBio={info.miniBio}
      />
    </>
  );
}
