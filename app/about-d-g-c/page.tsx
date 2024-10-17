import { Roles } from "../components/Roles";

const Page = () => {
  return (
    <>
      <div className="noto-serif-khmer container mx-auto p-16 bg-slate-50">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">គោលដៅជាយុទ្ធសាស្រ្ត និងយុទ្ធសាស្ត្រ</h1>
        <p className="text-center text-base font-light mb-8">ដើម្បីសម្រេចបាននូវចក្ខុវិស័យនិងគោលបំណងខាងលើ រដ្ឋាភិបាលដាក់ចេញគោលដៅជាយុទ្ធសាស្ត្រចំនួន៤និងយុទ្ធសាស្ត្រចំនួន១០ ដូចខាងក្រោម៖</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-md font-semibold mb-2">គោលដៅជាយុទ្ធសាស្ត្រទី១គឺ ការលើកកម្ពស់ការអភិវឌ្ឍហេដ្ឋារចនាសម្ព័ន្ធរដ្ឋាភិបាលឌីជីថល</h2>
            <p className="text-base font-light">ដែលមានយុទ្ធសាស្ត្រចំនួន៤ ដូចខាងក្រោម៖</p>
            <ul className="list-disc list-inside mt-2 font-light space-y-2">
              <li>យុទ្ធសាស្ត្រទី១៖ ការរៀបចំនិងការកែលម្អហេដ្ឋារចនាសម្ព័ន្ធតភ្ជាប់ឌីជីថល</li>
              <li>យុទ្ធសាស្ត្រទី២៖ ការរៀបចំនិងការកែលម្អហេដ្ឋារចនាសម្ព័ន្ធប្រព័ន្ធទូទាត់សងប្រាក់ឌីជីថលសម្រាប់សេវាសាធារណៈ</li>
              <li>យុទ្ធសាស្ត្រទី៣៖ ការរៀបចំនិងការពង្រឹងហេដ្ឋារចនាសម្ព័ន្ធសន្តិសុខឌីជីថល</li>
              <li>យុទ្ធសាស្ត្រទី៤៖ ការអភិវឌ្ឍហេដ្ឋារចនាសម្ព័ន្ធសេវាប្រៃសណីយ៍។</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-md font-semibold mb-2">គោលដៅជាយុទ្ធសាស្ត្រទី២គឺ ការកសាងអភិបាលកិច្ចនិងសេវាសាធារណៈឌីជីថល</h2>
            <p className="text-base font-light">ដែលមានយុទ្ធសាស្ត្រចំនួន២ ដូចខាងក្រោម៖</p>
            <ul className="list-disc list-inside mt-2 font-light space-y-2">
              <li>យុទ្ធសាស្ត្រទី៥៖ ការរៀបចំអភិបាលកិច្ចរដ្ឋាភិបាលឌីជីថល ដូចជា ការរៀបចំនិងកែលម្អគោលនយោបាយ ការរៀបចំនិងកែលម្អក្របខណ្ឌច្បាប់និងលិខិតបទដ្ឋានគតិយុត្តពាក់ព័ន្ធ និងការរៀបចំស្តង់ដានិងនិម្មាបនកម្មរដ្ឋាភិបាលឌីជីថល។</li>
              <li>យុទ្ធសាស្ត្រទី៦៖ ការធ្វើបរិវត្តកម្មរដ្ឋាភិបាលឌីជីថលនិងសេវាសាធារណៈ ដូចជា ការធ្វើឱ្យប្រសើរសេវាពីរដ្ឋាភិបាលទៅរដ្ឋាភិបាល(G2G) ការធ្វើឱ្យប្រសើរសេវាសាធារណៈពីរដ្ឋាភិបាលដើម្បីប្រជាពលរដ្ឋ (G4C) និងការធ្វើឱ្យប្រសើរ​សេវាសាធារណៈពីរដ្ឋាភិបាលទៅធុរកិច្ច(G2B)។</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-md font-semibold mb-2">គោលដៅជាយុទ្ធសាស្ត្រទី៣គឺ ការកសាងសមត្ថភាពនិងនវានុវត្តន៍ឌីជីថល</h2>
            <p className="text-base font-light">ដែលមានយុទ្ធសាស្ត្រចំនួន២ ដូចខាងក្រោម៖</p>
            <ul className="list-disc list-inside mt-2 font-light space-y-2">
              <li>យុទ្ធសាស្ត្រទី៧៖ ការកសាងមូលធនមនុស្សឌីជីថល។</li>
              <li>យុទ្ធសាស្ត្រទី៨៖ ការលើកកម្ពស់ការស្រាវជ្រាវនិងនវានុវត្តន៍ឌីជីថល។</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-md font-semibold mb-2">គោលដៅជាយុទ្ធសាស្ត្រទី៤គឺ ការលើកកម្ពស់កិច្ចសហការនិងភាពជាដៃគូរវាងរដ្ឋនិងឯកជន</h2>
            <p className="text-base font-light">ដែលមានយុទ្ធសាស្ត្រចំនួន២ ដូចខាងក្រោម៖</p>
            <ul className="list-disc list-inside mt-2 font-light space-y-2">
              <li>យុទ្ធសាស្ត្រទី៩៖ ការរៀបចំកិច្ចសហការជាមួយក្រុមហ៊ុនបច្ចេកវិទ្យាឌីជីថល។</li>
              <li>យុទ្ធសាស្ត្រទី១០៖ ការលើកកម្ពស់ធុរកិច្ចថ្មីឌីជីថល។</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-base font-semibold p-12">រូបភាពរួមនៃការរៀបចំគោលយោបាយរដ្ឋាភិបាលឌីជីថលកម្ពុជា ២០២២-២០៣៥</p>
        <img src="https://dgc.gov.kh/_next/image?url=%2Fstatic%2Fimages%2Fpolicy-digital-economy-2022-2035-km.jpg&w=828&q=75" className="m-auto rounded-lg" alt="" />
      </div>
      <Roles />
    </>
  );
};

export default Page;
