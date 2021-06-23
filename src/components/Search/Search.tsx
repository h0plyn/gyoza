interface SearchProps {
  query: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Search ({query, handleChange}: SearchProps) {
  return (
    <div
    style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
      height: '2.1rem',
    }}
  >
    <input
      style={{
        borderRadius: '5px',
        border: '1px solid var(--secondary)',
        backgroundColor: 'var(--card-bg)',
        color: 'var(--tertiary)',
        padding: '.5rem',
        fontSize: '1.2rem',
      }}
      type="text"
      name="query"
      value={query}
      onChange={(e) => handleChange(e)}
      placeholder="Coin Name"
    />
  </div>
  )
}
