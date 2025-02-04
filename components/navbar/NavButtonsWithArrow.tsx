export default function NavButtonsWithArrow({ title }: { title: string }) {
  return (
    <li className="btn btn-ghost relative group flex items-center gap-1 py-1 px-3 rounded-3xl">
      <p>{title}</p>
      <i className="fa-solid fa-chevron-down opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs"></i>
    </li>
  );
}
