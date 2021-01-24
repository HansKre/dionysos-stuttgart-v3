import { nanoid } from 'nanoid';

const MealCategory = ({ mealCategory }) => {

  const stylez = {
    width: '100%',
  }

  return (
    <>
      {
        mealCategory.categoryDetails
          ? (
            <h4 key={nanoid()}>
              {mealCategory.categoryDetails}
            </h4>
          )
          : ''
      }
      <table style={stylez}>
        <tbody>
          {
            mealCategory.categoryMeals.map(meal => {
              return (
                <tr key={nanoid()} style={stylez}>
                  <td className='meal' key={nanoid()} dangerouslySetInnerHTML={{ __html: meal.meal }} />
                  <td className='price' key={nanoid()}>{meal.price}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default MealCategory;