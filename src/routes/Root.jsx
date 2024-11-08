import { Link, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <main className="max-w-3xl flex flex-col items-start gap-4 p-16 mx-auto antialiased">
      <nav className="w-full flex items-center">
        <Link className="font-semibold" to="/">
          Ausath Ikram
        </Link>
        <div className="grow text-right space-x-4">
          <Link
            className="underline underline-offset-2 decoration-zinc-400 hover:decoration-black"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="underline underline-offset-2 decoration-zinc-400 hover:decoration-black"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
      <Outlet />
      <footer className="space-x-4">
        <a
          className="text-blue-500 hover:text-blue-600"
          href="https://github.com/ausathdzil"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="text-blue-500 hover:text-blue-600"
          href="https://linkedin/com/in/ausathdzil"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </footer>
    </main>
  );
}
