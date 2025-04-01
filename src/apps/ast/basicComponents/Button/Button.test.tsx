import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '@/basicComponents/Button/Button';

describe('Button component', () => {
  it('renders correctly with default props', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders children and hint correctly', () => {
    render(
      <Button onClick={() => {}} hint="Hint text">
        Button Text
      </Button>,
    );
    expect(screen.getByText('Button Text')).toBeInTheDocument();
    expect(screen.getByText('Hint text')).toBeInTheDocument();
  });

  it('handles custom className correctly', () => {
    render(
      <Button onClick={() => {}} className="custom-class">
        Styled Button
      </Button>,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('custom-class');
  });

  it('sets title and tabindex attributes correctly', () => {
    render(
      <Button onClick={() => {}} title="Button Title">
        Accessible Button
      </Button>,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveAttribute('title', 'Button Title');
    expect(buttonElement).toHaveAttribute('tabIndex', '-1');
  });
});
