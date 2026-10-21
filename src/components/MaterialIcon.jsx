import React from "react";

/**
 * Simple wrapper for Google Material Symbols Outlined icons.
 */
export default function MaterialIcon({ name, className = "" }) {
  return (
    <span className={"material-symbols-outlined " + className}>{name}</span>
  );
}
