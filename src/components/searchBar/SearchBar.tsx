import { useTranslation } from "react-i18next"
import searchIcon from '../../images/search.svg'

type Props = {
    searchItem: string,
    setSearchItem: any
}

export default function SearchBar({ searchItem, setSearchItem }: Props) {
    const { t } = useTranslation()

    return (
        <div className="h-[52px] min-w-[668px] bg-white md:block hidden rounded-xl py-1 ">
            <div className="flex justify-between items-center px-2 pt-1">
                <div>
                    <input
                        className="pl-1 focus:outline-none text-sm bold items-center"
                        placeholder={t("SearchPlaceholder")}
                        type="text"
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                </div>
                <div onClick={() => alert("function")} className="border-2 p-2 rounded-xl">
                    <img src={searchIcon} alt="search icon" />
                </div>
            </div>

        </div>
    )
}