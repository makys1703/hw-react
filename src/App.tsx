import { Heading } from './components/Heading';
import { Paragraph } from './components/Paragraph';
import { Button } from './components/Button';

function App() {
  return (
    <>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        rowGap: '16px'
      }}>
        <Heading>
          Поиск
        </Heading>
        <Paragraph variant='small'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Paragraph>
      </div>
      <Button text="Найти" />
    </>
  );
}

export default App;
