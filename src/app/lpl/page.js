export default function Page() {
  return (
    <div className="bg-gray-900 h-[100vh] scroll-my-1">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-gray-800 shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://i.imgur.com/rDfBLN1.jpeg"
                  className="w-32 h-32 bg-gray-600 rounded-full mb-4 shrink-0 object-contain"
                />
                <h1 className="text-xl font-bold text-white">PeiLinLi</h1>
                <p className="text-gray-400">Student</p>
              </div>
              <hr className="my-6 border-t border-gray-700" />
              <div className="flex flex-col">
                <span className="text-gray-400 uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul className="text-gray-300">
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Node.js</li>
                  <li className="mb-2">HTML/CSS</li>
                  <li className="mb-2">SQL</li>
                  <li className="mb-2">Python</li>
                  <li className="mb-2">C</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">About Me</h2>
              <p className="text-gray-300">
                Hello!！我是 李姵琳<br />
                就讀高科大資訊管理系大三<br />
                我相信每一分努力都是未來成功的基石，因此我專注於每個細節，願意花時間準備和改進。我堅持不懈，因為我深知知識的累積不是一蹴而就，而是一步步的積累。我會繼續保持這樣的態度，迎接更多挑戰，並用堅定的信念去追求我的目標。
              </p>

              <h2 className="text-xl font-bold text-white mt-6 mb-4">經驗</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-300 font-bold">
                    高級前端開發人員
                  </span>
                  <p>
                    <span className="text-gray-400 mr-2">於 CodeGreen</span>
                    <span className="text-gray-400">2020 - 2022</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-400">
                  擔任高級前端開發吉祥物
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-300 font-bold">前端開發人員</span>
                  <p>
                    <span className="text-gray-400 mr-2">
                      於 Hashgreen Labs
                    </span>
                    <span className="text-gray-400">2018 - 2020</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-400">
                  在 Hashgreen Labs 中參與了多個開源項目的開發，並使用
                  Playwright 進行測試自動化，撰寫社群貢獻文件，
                  提高了項目開發效率。
                </p>
              </div>

              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-300 font-bold">產品開發人員</span>
                  <p>
                    <span className="text-gray-400 mr-2">於 XYZ Tech</span>
                    <span className="text-gray-400">2015 - 2018</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-400">
                  負責 吃飯
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
