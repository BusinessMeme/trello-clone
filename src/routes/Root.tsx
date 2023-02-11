import cls from './Root.module.css';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

export default function Root() {
    return (
        <div className={cls.root}>
            <RegistrationForm />          
        </div>
    )
}