export default function FlagBadge({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className="flag"
      style={dark ? { background: "#3a3a3a", color: "#e8c373", borderColor: "#555" } : undefined}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 21V4M4 4h13l-2 4 2 4H4" />
      </svg>
      {children}
    </span>
  );
}
