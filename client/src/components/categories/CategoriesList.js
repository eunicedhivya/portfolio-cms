import '../categories/CategoriesList.css';


function CategoriesList() {
  return (
    <div className='categoriesList'>
        <button className='category'>Interactive</button>
        <button className='category'>Projects</button>
        <button className='category'>UI/UX</button>
        <button className='category'>Illustrations</button>
    </div>
  )
}

export default CategoriesList;