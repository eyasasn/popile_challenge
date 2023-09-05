import CategoryButton from '../../components/categoryButton/CategoryButton'
import Navbar from '../../components/navbar/Navbar'
import myData from '../../data/data.json'
import { useEffect, useState } from 'react'


export default function Home() {
  const [data, setData] = useState<any>()
  const categoriesArray = myData.map((item) => item.categories);
  const [activeIndex, setaActiveIndex] = useState(0)

  const handleArrayValue = () => {
    const newArray = categoriesArray.flat(1);

    const mainCategoryList = newArray.filter((value: any, index: any, array: any) => array.indexOf(value) === index);
    const missingCategory = ["Tüm Ünlüler"]

    const allCategories = missingCategory.concat(mainCategoryList)
    setData(allCategories)
  }
  useEffect(() => {
    handleArrayValue()
  }, [])

  const handleButtonClick = (i: any, index: number) => {
    setaActiveIndex(index)
  }


  return (
    <div>
      <Navbar />
      <div>
        <div className='flex  mx-auto w-full overflow-x-auto container'>
          {data &&
            data.map((i: string, index: any) => (
              <CategoryButton
                title={i.replace("-", " ").replace(/-/g, " ").replace("and", "&")}
                onClick={() => handleButtonClick(i, index)}
                className={activeIndex === index ? "py-3 px-4 whitespace-nowrap rounded-xl bg-button-active-color mx-2 ml-0 font-semibold text-white text-sm cursor-pointer" : "py-3 px-4 whitespace-nowrap rounded-xl bg-button-color mx-2 ml-0 font-semibold text-button-text-color  text-sm cursor-pointer "}
              />
            ))}

        </div>

      </div>
    </div>
  )
}