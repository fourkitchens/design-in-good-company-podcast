import Image from "next/image";
import cover from '../app/assets/cover.png';
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-8 items-center justify-center p-8">
      <Image src={cover} alt="Design in Good Company podcast logo" width={400} height={400} />
      <h1 className="font-bold text-3xl">Design in Good Company podcast</h1>
      <ul>
        <li><a className="underline hover:text-whippedCream-dark" href="https://open.spotify.com/show/5z9oaV1GOIe4PBDM3NhATK?si=lPT55lU_S9yQHjKjFxHS6A">Listen on Spotify</a></li>
        <li><a className="underline hover:text-whippedCream-dark" href="https://podcasts.apple.com/us/podcast/design-in-good-company/id1741974684">Listen on Apply Podcasts</a></li>
        <li><a className="underline hover:text-whippedCream-dark" href="https://www.linkedin.com/groups/13009894/">Join our LinkedIn Community</a></li>
      </ul>
      <p className="text-sm">Made with ❤️ by <a className="underline hover:text-whippedCream-dark" href="https://www.fourkitchens.com/">Four Kitchens</a></p>
    </main>
  );
}
