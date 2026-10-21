import React from "react";
import ThemeToggle from "./ThemeToggle";

/**
 * Top bar header – wraps the ThemeToggle on the right side.
 */
export default function Header({ isDark, onToggle }) {
  return (
    <header className="w-full max-w-[1720px] mx-auto flex items-center justify-end shrink-0 pb-2.5 lg:pb-3">
      <ThemeToggle isDark={isDark} onToggle={onToggle} />
    </header>
  );
}
