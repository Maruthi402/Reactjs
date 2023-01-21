import styles from './style.module.css';

const FormA = ()=>{
    return(
        <div className={styles.todoform}>
            <form>
                <input className={styles.todoinput}type="text"  placeholder="Add Todo Item"/>
                <button className ={styles.todobutton} type="submit">Submit</button>
            </form>
       

        </div>
    )
}
export default FormA