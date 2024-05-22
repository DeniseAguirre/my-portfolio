export default function Footer() {
  return (
    <div className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <div className="flex lg:flex-1">
          <a
            href="#home"
            className="-m-1.5 p-1.5 border-2 border-gray-900 hover:text-indigo-600"
          >
            <span className="sr-only">Denise Aguirre</span>
            <h1 className="p-2 font-bold text-2xl">Den_</h1>
          </a>
        </div>
        {/* <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {navigation.map((item) => (
            <li key={item.name + item.href}>
              <a
                key={item.name + "footer"}
                href={item.href}
                className="text-md font-semibold leading-6 text-gray-900 cursor-pointer footer-link"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <p className="text-center font-normal">&copy; 2024 Denise Aguirre</p>
    </div>
  );
}
