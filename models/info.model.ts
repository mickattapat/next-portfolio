interface ProfileModel {
  profileLogo: any,
  bio: string
  firstName:string
  lastName:string
  initials:string
  position:string
  miniBio: MiniBio[]
}
interface MiniBio {
    emoji: any,
    text: string,
    link: boolean,
    isLink: string,

}
// About
type AboutModel = {
  bio: string,
  skills: any,
}