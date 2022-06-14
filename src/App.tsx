import './App.css'
import Rating from './components/Rating'

const styles = {
  container: { backgroundColor: '#232323' },
}

function App() {
  const onSubmit = (rating: number | null) => {
    console.log(rating)
  }
  return (
    <div className='container' style={styles.container}>
      <Rating
        title={'How did we do?'}
        text={
          'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
        }
        onSubmit={onSubmit}
        from 'http://127.0.0.1:5500/assets/index.3cd92b9c.css'/>
    </div>
  )
}

export default App
