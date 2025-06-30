import "../styles/styles.css";

export default function Skills() {
  return (
    <section id="skills" className="max-6-wl mx-auto px-4 py-15">
      <h2 className="text-3xl font-bold mb-10 text-center">
        My <span className="text-pink-300">Skills</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="glassmorphism p-8 rounded-3xl">
          <div className="space-y-4">
            <div className="font-semibold">
              <div className="flex justify-between mb-1">
                <span>HTML / CSS</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                <div className="bg-pink-500 h-2 rounded-full w-[95%]"></div>
              </div>
              <div className="flex justify-between mb-1">
                <span>Javascript, React</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
                <div className="bg-pink-500 h-2 rounded-full w-[90%]"></div>
              </div>
              <div className="flex justify-between mb-1">
                <span>PHP, Laravel</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 ">
                <div className="bg-pink-500 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
