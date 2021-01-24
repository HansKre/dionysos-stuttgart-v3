import MealCategory from '../components/MealCategory';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { data } from '../data/speisekarte';

// Preconfigured styles for the accordion
import 'react-accessible-accordion/dist/fancy-example.css';

const Speisekarte = () => {

  const fillMealCategories = () => {
    if (data && data.categories) {
      const mappedJSX = data.categories.map((mealCategory, index) => {
        return (
          <AccordionItem key={index + 'jumbotron'}>
            <AccordionItemHeading className='accordionHeader' key={index + 'heading'}>
              <AccordionItemButton key={index + 'button'}>
                {mealCategory.category}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel key={index + 'panel'}>
              <MealCategory mealCategory={mealCategory} />
              <p>Alle Preise in € und inklusive 7% Mehrwertsteuer.</p>
            </AccordionItemPanel>
          </AccordionItem>
        )
      })
      return mappedJSX;
    } else {
      return <br />
    }
  }

  return (
    <StyledBackground backgroundImg={backgroundImg} id='speisekarte'>
      <StyledJumbotron>
        <h1>Unsere Speisekarte</h1>
        <p>Finden Sie hier Informationen zu unseren leckeren Speisen. Die Zusatzstoffe- und Allergenekennzeichnung befindet sich auf der letzten Seite.</p>
      </StyledJumbotron>
      <StyledJumbotron>
        <Accordion allowZeroExpanded={true}>
          {fillMealCategories()}
          <AccordionItem>
            <AccordionItemHeading className='accordionHeader'>
              <AccordionItemButton>
                Zusatzstoffe- und Allergenekennzeichnung
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <h4>Zusatzstoffe</h4>
              <ol>
                {data && data.zusatzstoffe && data.zusatzstoffe.map((entry, index) => {
                  return (
                    <li key={index}>{entry}</li>
                  );
                })}
              </ol>
              <h4>Allergene</h4>
              <ol type='a'>
                {data && data.allergene && data.allergene.map((entry, index) => {
                  return (
                    <li key={index}>{entry}</li>
                  );
                })}
              </ol>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </StyledJumbotron>
    </StyledBackground>
  )
}

export default Speisekarte;