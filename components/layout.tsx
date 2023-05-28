interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      {/* <header className="container sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-4 pl-6">
            <div className="flex items-center space-x-4">
            <img src="usericon.png" className="w-10"/>
            <a href="#" className="hover:text-slate-600 cursor-pointer">
              BU
            </a>
            </div>
          </nav>
        </div>
      </header> */}
      <div className="mt-10">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
