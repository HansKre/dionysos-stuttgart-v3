import React from 'react';

const MealCategory = ({ mealCategory }) => {

  return (
    <>
      {/* <h2 key={mealCategory.category}>{mealCategory.category}</h2> */}
      {
        mealCategory.categoryDetails
          ? (
            <h4 key={mealCategory.categoryDetails}>
              {mealCategory.categoryDetails}
            </h4>
          )
          : ''
      }
      <table>
        <tbody>
          {/* <tr className='firstRow'>
            <td className='meal'></td>
            <td className='price'>€</td>
          </tr> */}
          {
            mealCategory.categoryMeals.map((meal, index) => {
              return (
                <tr key={index}>
                  <td className='meal' key={(index + 1) * 500} dangerouslySetInnerHTML={{ __html: meal.meal }} />
                  <td className='price' key={(index + 2) * 700}>{meal.price}</td>
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