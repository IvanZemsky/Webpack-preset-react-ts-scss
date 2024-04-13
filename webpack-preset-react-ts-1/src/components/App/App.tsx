import styles from "./App.module.scss";
import samoyed from '@/samoyed.jpg'

const App = () => {
   return (
      <div className={styles.greeting}>
         <div className={styles.content}>
            <p className={styles.helloWorld}>Hello World!</p>
            <p className={styles.text}>
               Эта конфигурация Webpack предназначена для разработки проектов на
               React с использованием TypeScript и SCSS
            </p>
            <img src={samoyed} alt="" />
         </div>
      </div>
   );
};

export default App;
