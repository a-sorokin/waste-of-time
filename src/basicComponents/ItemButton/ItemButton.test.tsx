import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ItemButton } from '@/basicComponents/ItemButton/ItemButton';

vi.mock('./ItemButton.module.scss', () => ({
  default: {
    itemBtn: 'itemBtn',
  },
}));

describe('ItemButton component', () => {
  it('renders correctly with title and hint', () => {
    render(<ItemButton title="Test Title" hint="Test Hint" onClick={() => {}} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('title', 'Test Title');
    expect(screen.getByText('Test Hint')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<ItemButton title="Clickable" hint="Hint" onClick={handleClick} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('stops event propagation on click', () => {
    const handleClick = vi.fn();
    const parentClick = vi.fn();
    const Parent = () => (
      <div onClick={parentClick}>
        <ItemButton title="Stop Propagation" hint="Hint" onClick={handleClick} />
      </div>
    );
    render(<Parent />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(parentClick).not.toHaveBeenCalled();
  });

  it('applies custom className correctly', () => {
    render(<ItemButton title="Custom Class" hint="Hint" onClick={() => {}} className="custom-class" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('itemBtn');
    expect(buttonElement).toHaveClass('custom-class');
  });
});
