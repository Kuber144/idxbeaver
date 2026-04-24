export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#d97706" />
      <path
        d="M8 10h16M8 16h16M8 22h10"
        stroke="#09090b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="23" cy="22" r="3" fill="#09090b" />
    </svg>
  )
}
