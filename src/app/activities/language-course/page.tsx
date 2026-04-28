export default function languageCoursePage() {
  return (
    <main className="min-h-screen bg-[#FDF1DD] dark:bg-[#1a1a1a]">

      {/* HERO SECTION */}
      <div
        className="h-[220px] md:h-[320px] lg:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('./language-course/germany-bg.jpg')",
        }}
      >
        <div className="bg-black/40 w-full h-full flex items-center justify-center">

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white text-center px-4">
            🇩🇪 German Language Conversation
          </h1>

        </div>
      </div>


      {/* CONTENT */}
      <section className="py-12 md:py-20 px-4 md:px-6">

        <div className="max-w-4xl mx-auto">

          {/* INTRO */}
          <p className="text-[#5C4A3A] dark:text-gray-300 mb-8 md:mb-10 text-sm md:text-lg leading-relaxed">
            Kala Baru is not only a coffee shop — it is also a place where people 
            connect, learn, and practice languages together. Our German Language 
            Conversation group is a relaxed and friendly gathering where everyone 
            can practice speaking German while enjoying coffee.
          </p>


          {/* IMAGE */}
          <img
            src="./language-course/conversation.jpg"
            className="rounded-xl mb-8 md:mb-10 w-full h-[200px] md:h-[320px] object-cover shadow-md"
          />


          {/* ABOUT */}
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#3A2A1F] dark:text-white">
            About the German Conversation Group
          </h2>

          <p className="text-[#5C4A3A] dark:text-gray-300 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
            The German Conversation group is an informal meetup where participants 
            practice speaking German in a supportive environment. The goal is not 
            perfection, but communication. Whether you are learning German for 
            study, work, travel, or personal interest, this is a great opportunity 
            to improve your speaking skills and meet new people.
          </p>


          {/* WHAT WE DO */}
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#3A2A1F] dark:text-white">
            What Happens During the Session
          </h2>

          <ul className="list-disc ml-5 md:ml-6 text-[#5C4A3A] dark:text-gray-300 mb-6 md:mb-8 space-y-2 text-sm md:text-base">
            <li>Casual German conversation practice</li>
            <li>Small group discussions</li>
            <li>Vocabulary and speaking exercises</li>
            <li>Board games or activities in German</li>
            <li>Sharing experiences about Germany and culture</li>
          </ul>


          {/* WHO CAN JOIN */}
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#3A2A1F] dark:text-white">
            Who Can Join
          </h2>

          <p className="text-[#5C4A3A] dark:text-gray-300 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
            Everyone is welcome! You do not need to be fluent in German. 
            Beginners, intermediate learners, and advanced speakers can all 
            participate. The most important thing is curiosity and willingness 
            to practice speaking.
          </p>


          {/* WHEN */}
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-[#3A2A1F] dark:text-white">
            When & Where
          </h2>

          <p className="text-[#5C4A3A] dark:text-gray-300 mb-8 text-sm md:text-base leading-relaxed">
            The German Conversation sessions take place at Kala Baru Coffee Shop. 
            Check our community group or social media for the latest schedule.
          </p>


          {/* COMMUNITY BUTTON */}
          <div className="mt-6 md:mt-8">

            <p className="text-[#5C4A3A] dark:text-gray-300 mb-4 text-sm md:text-base">
              Stay updated about upcoming sessions and community activities.
            </p>

            <a
              href="https://chat.whatsapp.com/BlrrqX4Fbc51ql1RrAnP1W"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg hover:scale-105 transition-transform duration-200 font-medium shadow-md text-sm md:text-base"
            >
              💬 Join WhatsApp Community
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}