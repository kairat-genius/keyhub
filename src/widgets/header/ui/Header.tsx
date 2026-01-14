const Header = () => {
  return (
    <header className="relative full">
          <div className="mx-auto p-4 max-w-screen-2xl flex items-center justify-between">
            <div className="flex-1">
              <a className="" href="/">
                <span className="text-xl font-bold tracking-tight ">
                  keyhub
                </span>
              </a>
            </div>
            <nav className="hidden items-center gap-12 md:flex">
              <a
                className="mt-1 text-lg tracking-wide text-black transition-colors hover:text-gray-700 hover:underline"
                href="/keys"
              >
                Keys
              </a>
              <a
                className="mt-1 text-lg tracking-wide text-black transition-colors hover:text-gray-700 hover:underline"
                href="/about-us"
              >
                About us
              </a>
            </nav>
            <div className="flex flex-1 items-center justify-end gap-2">
              <div className="hidden md:flex">
                <button
                  data-slot="dropdown-menu-trigger"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 size-9 group focus:ring-none rounded-full bg-violet-400 text-white hover:bg-violet-500 hover:text-white focus:outline-none focus-visible:ring-0"
                  data-testid="user-menu-button"
                  type="button"
                  id="radix-_r_0_"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                >
                  <span className="text-sm font-medium">Y</span>
                  <span className="sr-only">User menu</span>
                </button>
              </div>
            </div>
          </div>
    </header>
  );
};

export default Header;
