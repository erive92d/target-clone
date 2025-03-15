import CategoriesDrop from "./CategoriesDrop";
import DealsDrop from "./DealsDrop";

export default function NavButtonsWithArrow({ title }: { title: string }) {

  function buttonFunction(titleGv: string) {
    if (titleGv === "Categories") {
      return <CategoriesDrop />
    } else if (titleGv === "Deals") {
      return <DealsDrop />
    } else {
      return title
    }

  }

  return (
    <li className="btn btn-ghost relative group  py-1 px-3 rounded-3xl">
      {buttonFunction(title)}
    </li>
  );
}
