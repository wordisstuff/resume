import { useTheme } from '../context/themeContext';

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="text-xl px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}
