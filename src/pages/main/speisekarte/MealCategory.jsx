import React from 'react'
import BlockContent from '@sanity/block-content-to-react';

const MealCategory = ({ mealCategory }) => {

  // makeStyles needed only for material-ui
  const tableStyles = {
    width: '100%',
  }

  const serializers = {
    types: {
      // prevent default for block to wrap children with p-tags:
      // <p>{children}</p>
      block: ({ children }) => (
        <>{children}</>
      )
    },
    marks: {
      sup: ({ children }) => (
        <sup>{children}</sup>
      )
    }
  };

  return (
    <>
      {
        mealCategory.categoryDetails
          ? (
            <h4 key={mealCategory._id}>
              {mealCategory.categoryDetails}
            </h4>
          )
          : ''
      }
      <table style={tableStyles}>
        <tbody>
          {
            mealCategory.categoryMeals.map(meal => {
              return (
                <tr key={meal._key} style={tableStyles}>
                  <td className='meal' key={meal._key}>
                    <BlockContent blocks={meal.meal} serializers={serializers} />
                  </td>
                  <td className='price' key={meal._key}>{parseFloat(meal.price).toString().replace('.', ',').concat('0')}</td>
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