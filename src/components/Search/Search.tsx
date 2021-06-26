import styled from 'styled-components';
import { SearchProps } from '../../types';

const SearchStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  height: 2.1rem;
  & input {
    border-radius: 5px;
    border: 1px solid var(--secondary);
    background-color: var(--card-bg);
    color: var(--highlight);
    padding: 0.5rem;
    font-size: 1.2rem;
    outline: none;
    transition: var(--transition);
    &:focus {
      border: 1px solid var(--headline);
      box-shadow: var(--boxShadow);
    }
  }
`;

export default function Search({ query, handleChange }: SearchProps) {
  return (
    <SearchStyles data-testid="search">
      <label htmlFor="query">
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => handleChange(e)}
          placeholder="Coin Name"
          data-testid="input"
        />
      </label>
    </SearchStyles>
  );
}
