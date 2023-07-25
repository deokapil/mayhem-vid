import Title from "@/components/Title";
import VideoList from "@/components/VideoList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="my-10 py-10 md:px-20 px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="flex lg:gap-10 gap-6 flex-col">
            <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium leading-relaxed">
              Watch Mayhem games Live
              <br />
              cheers!
            </h1>
          </div>
        </div>
      </div>
      <div className="my-2 py-10 md:px-20 px-8">
        <VideoList />
      </div>
      <div className="my-20 py-10 md:px-20 px-8"></div>
    </main>
  );
}
