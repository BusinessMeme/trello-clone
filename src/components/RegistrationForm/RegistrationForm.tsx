import cls from './RegistrationForm.module.css';

export default function RegistrationForm() {
    return (
        <>
            <form className={ cls.registarion }>
                <label className={ cls.label }>
                    Username:
                    <input type="text" name="username" className={ cls.input } />
                </label>
                <label className={ cls.label }>
                    Password:
                    <input type="password" name="password" className={ cls.input }/>
                </label>
                <input type="submit" name="submit" className={ cls.submitBtn }/>
            </form>
        </>
    )
}