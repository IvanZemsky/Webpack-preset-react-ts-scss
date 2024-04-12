import styles from './App.module.scss'

const App = () => {
  return (
    <p className={styles.greeting}>
      Hello World!
      <br />
      Эта конфигурация Webpack предназначена для разработки проектов на React с использованием TypeScript и SCSS
    </p>
  )
}

export default App
