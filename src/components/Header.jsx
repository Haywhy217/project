import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <svg
                width="186"
                height="44"
                viewBox="0 0 186 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5393 31.4234C17.0788 31.4234 8.14399 35.0393 8.14399 39.5H8.07794C8.07794 35.9299 9.49613 32.506 12.0206 29.9815C14.545 27.4569 17.9688 26.0386 21.539 26.0385C23.681 26.0385 25.7354 25.1875 27.2502 23.6729C28.7649 22.1582 29.6159 20.1038 29.6159 17.9617C29.6164 15.8197 28.7658 13.7649 27.2514 12.25C25.7369 10.7349 23.6827 9.88362 21.5406 9.88312C19.3984 9.88278 17.3438 10.7334 15.8288 12.2478C14.3138 13.7622 13.4624 15.8165 13.462 17.9585C13.462 19.7264 13.1137 21.4769 12.4372 23.11C11.7606 24.7433 10.769 26.2272 9.51893 27.4772C8.26886 28.7272 6.78485 29.7187 5.15158 30.3952C3.51832 31.0716 1.7678 31.4198 0 31.4197V31.3542C4.45986 31.3542 8.07578 22.4232 8.07744 17.9619H8.0766C8.07658 15.2994 8.86603 12.6967 10.3452 10.483C11.8243 8.26925 13.9266 6.54382 16.3864 5.52495C18.8461 4.50591 21.5528 4.2392 24.1641 4.75865C26.7753 5.27793 29.174 6.55997 31.0568 8.4424C32.9394 10.325 34.2216 12.7235 34.7412 15.3349C35.2608 17.9461 34.9943 20.6527 33.9756 23.1125C32.9569 25.5724 31.2316 27.6749 29.018 29.1542C26.8043 30.6335 24.2016 31.4232 21.5393 31.4234Z"
                  fill="url(#paint0_linear_701_50)"
                />
                <path
                  d="M42.2222 21.796C42.2222 19.4907 42.721 17.4402 43.7185 15.6447C44.716 13.8271 46.1014 12.4195 47.8748 11.422C49.6703 10.4023 51.6985 9.8925 53.9595 9.8925C56.7303 9.8925 59.1022 10.624 61.075 12.087C63.0478 13.55 64.3668 15.545 65.0318 18.072H58.7808C58.3153 17.0967 57.6503 16.3541 56.7858 15.8442C55.9434 15.3344 54.9792 15.0795 53.893 15.0795C52.1418 15.0795 50.7232 15.6891 49.637 16.9082C48.5508 18.1274 48.0078 19.7567 48.0078 21.796C48.0078 23.8353 48.5508 25.4646 49.637 26.6837C50.7232 27.9029 52.1418 28.5125 53.893 28.5125C54.9792 28.5125 55.9434 28.2576 56.7858 27.7477C57.6503 27.2379 58.3153 26.4953 58.7808 25.52H65.0318C64.3668 28.047 63.0478 30.042 61.075 31.505C59.1022 32.9458 56.7303 33.6663 53.9595 33.6663C51.6985 33.6663 49.6703 33.1675 47.8748 32.17C46.1014 31.1503 44.716 29.7427 43.7185 27.9472C42.721 26.1517 42.2222 24.1013 42.2222 21.796ZM67.3831 24.19C67.3831 22.2837 67.7378 20.6101 68.4471 19.1692C69.1786 17.7284 70.1651 16.6201 71.4064 15.8442C72.6477 15.0684 74.0331 14.6805 75.5626 14.6805C76.8705 14.6805 78.0121 14.9465 78.9874 15.4785C79.9849 16.0105 80.7496 16.7087 81.2816 17.5732V14.9465H86.9674V33.5H81.2816V30.8732C80.7275 31.7377 79.9516 32.436 78.9541 32.968C77.9788 33.5 76.8372 33.766 75.5294 33.766C74.0221 33.766 72.6477 33.3781 71.4064 32.6022C70.1651 31.8042 69.1786 30.6848 68.4471 29.244C67.7378 27.781 67.3831 26.0963 67.3831 24.19ZM81.2816 24.2232C81.2816 22.8046 80.8826 21.6852 80.0846 20.865C79.3088 20.0448 78.3556 19.6347 77.2251 19.6347C76.0946 19.6347 75.1304 20.0448 74.3324 20.865C73.5566 21.663 73.1686 22.7713 73.1686 24.19C73.1686 25.6087 73.5566 26.7392 74.3324 27.5815C75.1304 28.4017 76.0946 28.8117 77.2251 28.8117C78.3556 28.8117 79.3088 28.4017 80.0846 27.5815C80.8826 26.7613 81.2816 25.6419 81.2816 24.2232ZM96.7665 18.0387C97.4315 17.0191 98.2628 16.2211 99.2603 15.6447C100.258 15.0462 101.366 14.747 102.585 14.747V20.7652H101.023C99.6039 20.7652 98.5399 21.0756 97.8305 21.6962C97.1212 22.2947 96.7665 23.3587 96.7665 24.8882V33.5H91.0808V14.9465H96.7665V18.0387ZM110.989 18.0387C111.654 17.0191 112.485 16.2211 113.482 15.6447C114.48 15.0462 115.588 14.747 116.807 14.747V20.7652H115.245C113.826 20.7652 112.762 21.0756 112.053 21.6962C111.343 22.2947 110.989 23.3587 110.989 24.8882V33.5H105.303V14.9465H110.989V18.0387ZM138.478 14.9465L126.84 42.3113H120.722L124.978 32.8682L117.43 14.9465H123.781L128.07 26.5507L132.326 14.9465H138.478ZM156.028 17.54C155.607 16.7642 154.997 16.1767 154.199 15.7777C153.424 15.3566 152.504 15.146 151.44 15.146C149.6 15.146 148.126 15.7556 147.017 16.9747C145.909 18.1717 145.355 19.7788 145.355 21.796C145.355 23.9462 145.931 25.6308 147.084 26.85C148.259 28.047 149.866 28.6455 151.905 28.6455C153.302 28.6455 154.477 28.2908 155.43 27.5815C156.405 26.8722 157.114 25.8525 157.558 24.5225H150.342V20.333H162.711V25.6197C162.29 27.0384 161.57 28.3573 160.55 29.5765C159.553 30.7957 158.278 31.7821 156.726 32.5357C155.175 33.2894 153.424 33.6663 151.473 33.6663C149.168 33.6663 147.106 33.1675 145.288 32.17C143.493 31.1503 142.085 29.7427 141.066 27.9472C140.068 26.1517 139.569 24.1013 139.569 21.796C139.569 19.4907 140.068 17.4402 141.066 15.6447C142.085 13.8271 143.493 12.4195 145.288 11.422C147.084 10.4023 149.134 9.8925 151.44 9.8925C154.233 9.8925 156.582 10.5686 158.489 11.9207C160.417 13.2729 161.692 15.146 162.312 17.54H156.028ZM174.306 33.766C172.489 33.766 170.848 33.3781 169.385 32.6022C167.944 31.8264 166.803 30.7181 165.961 29.2772C165.14 27.8364 164.73 26.1517 164.73 24.2232C164.73 22.3169 165.151 20.6433 165.994 19.2025C166.836 17.7395 167.989 16.6201 169.452 15.8442C170.915 15.0684 172.555 14.6805 174.373 14.6805C176.19 14.6805 177.831 15.0684 179.294 15.8442C180.757 16.6201 181.909 17.7395 182.752 19.2025C183.594 20.6433 184.015 22.3169 184.015 24.2232C184.015 26.1296 183.583 27.8142 182.719 29.2772C181.876 30.7181 180.712 31.8264 179.227 32.6022C177.764 33.3781 176.124 33.766 174.306 33.766ZM174.306 28.845C175.392 28.845 176.312 28.446 177.066 27.648C177.842 26.85 178.23 25.7084 178.23 24.2232C178.23 22.7381 177.853 21.5965 177.099 20.7985C176.368 20.0005 175.459 19.6015 174.373 19.6015C173.264 19.6015 172.345 20.0005 171.613 20.7985C170.882 21.5743 170.516 22.7159 170.516 24.2232C170.516 25.7084 170.87 26.85 171.58 27.648C172.311 28.446 173.22 28.845 174.306 28.845Z"
                  fill="#310406"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_701_50"
                    x1="27.895"
                    y1="9.22502"
                    x2="7.56"
                    y2="37.155"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.295" stopColor="#E73959" />
                    <stop offset="0.384" stopColor="#E73D58" />
                    <stop offset="0.477" stopColor="#E74955" />
                    <stop offset="0.571" stopColor="#E95E51" />
                    <stop offset="0.666" stopColor="#EA7B4B" />
                    <stop offset="0.761" stopColor="#EDA044" />
                    <stop offset="0.857" stopColor="#EFCE3B" />
                    <stop offset="0.868" stopColor="#F0D43A" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>

            <div className="flex items-center lg:order-2">
              <Link
                to="/"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Login
              </Link>
              <button className="text-white bg-[#F3161F] dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 md:px-2 py-2 md:text-lg">
                Download App
              </button>

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
