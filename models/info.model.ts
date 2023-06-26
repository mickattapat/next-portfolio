interface ProfileModel {
  profileLogo: any,
  bio: string
  firstName:string
  lastName:string
  initials:string
  position:string
  hobbies:HobbiesModel[]
  miniBio: MiniBio[]
}

interface MiniBio {
    emoji: any,
    text: string,
    link: boolean
}
interface HobbiesModel {
  label: string;
  emoji: string;
}


// About
type AboutModel = {
  bio: string,
  skills: any,
  hobbies: any[]
}