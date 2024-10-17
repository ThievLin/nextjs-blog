import Mission from "./components/Mission";
import SliderComponent from './components/Slider';
export default function Home() {
  return (
    <>
    <div
      className="relative w-full h-[500px] bg-cover bg-center text-black"
      style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/digital-technology-background-with-hexagon-frame-white-tone_53876-117507.jpg?w=360)' }}
    >
      <div className="flex items-center justify-start w-full h-full px-16 noto-serif-khmer text-blue-950">
        <div className="flex w-full items-center justify-between space-x-6">
          <div className="w-9/12 max-w-full">
            <p className="text-xl mb-6">
              គណៈកម្មាធិការរដ្ឋាភិបាលឌីជីថល ដែលសរសេរជាអក្សរកាត់ថា គ.រ.ឌ. ត្រូវបានរៀបចំឡើង ដើម្បីធានានូវប្រសិទ្ធភាព និងប្រសិទ្ធផលនៃការបំពេញមុខងារសេនាធិការជូនក្រុមប្រឹក្សាជាតិសេដ្ឋកិច្ច និងសង្គមឌីជីថល​(ក.ស.ឌ.) លើការងារបច្ចេកទេស និងគោលនយោបាយនៅក្នុងការដឹកនាំ សម្របសម្រួល និងជំរុញការកសាងរដ្ឋាភិបាលឌីជីថលនៅក្នុងព្រះរាជាណាចក្រកម្ពុជា។
            </p>
            <button className="bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition​ text-gray-200 hover:text-gray-100">
              អានបន្ថែម
            </button>
          </div>

          {/* Image Section - 4/12 width */}
          <div className="w-3/12 hidden md:block">
            <img
              src="https://dgc.gov.kh/static/images/slide-image.svg"
              alt="Feature Image"
              className="w-[300px] h-full object-cover m-auto"
            />
          </div>
        </div>
      </div>
    </div>
    
    <Mission />
    <SliderComponent />
    </>
  );
}
