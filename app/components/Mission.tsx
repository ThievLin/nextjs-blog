import { FaEye, FaVolumeUp } from "react-icons/fa";

const Mission = () => {
  return (
    <div className="noto-serif-khmer flex flex-col lg:flex-row justify-center w-[90%] mx-auto space-y-6 lg:space-y-0 lg:space-x-6 p-6 lg:p-24">
      {/* First Card */}
      <div className="flex-1 space-x-6 p-6 border rounded-lg shadow-lg bg-white space-y-4">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto lg:mx-0">
          <FaEye className="text-blue-500 text-3xl" />
        </div>
        <div className="text-gray-700">
          <h2 className="font-normal text-md">
            ចក្ខុវិស័យនៃគោលនយោបាយនេះគឺ៖
            <ul className="list-disc pl-6 font-semibold space-y-2 mt-2">
              <li>កសាងទំនុកចិត្តប្រជាពលរដ្ឋតាមរយៈឌីជីថល</li>
              <li>ដាក់ប្រទេសកម្ពុជានៅលើផែនទីពិភពលោក</li>
            </ul>
          </h2>
        </div>
      </div>

      {/* Second Card */}
      <div className="flex-1 space-x-6 p-6 border rounded-lg shadow-lg bg-white space-y-4">
        <div className="flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mx-auto lg:mx-0">
          <FaVolumeUp className="text-yellow-500 text-3xl" />
        </div>
        <div className="text-gray-700">
          <p className="font-normal text-md">
            គោលនយោបាយនេះមានគោលបំណង <span className="font-semibold">“កសាងរដ្ឋាភិបាលឆ្លាត ដោយឈរលើមូលដ្ឋាននៃការប្រើប្រាស់ហេដ្ឋារចនាសម្ព័ន្ធនិងបច្ចេកវិទ្យាឌីជីថលជាប្រព័ន្ធអេកូឡូស៊ី សម្រាប់ការធ្វើទំនើបកម្មប្រព័ន្ធអភិបាលកិច្ចនិងការកែទម្រង់លើគ្រប់វិស័យ ប្រកបដោយតម្លាភាពនិងភាពជឿទុកចិត្ត សំដៅបង្កើតបរិយាកាសអំណោយផលដល់ការអភិវឌ្ឍសេដ្ឋកិច្ចនិងសង្គមឌីជីថលប្រកបដោយបរិយាបន្ន។”</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
