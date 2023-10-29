import classes from '../styles/ThemeToggle.module.css';

function ThemeToggle() {

    function handleThemeToggle() {
        const body = document.body;
        body.dataset.theme = body.dataset.theme === "light" ? "dark" : "light";
    }

    return (
        <button onClick={handleThemeToggle}>Click</button>
    )
}

export default ThemeToggle;