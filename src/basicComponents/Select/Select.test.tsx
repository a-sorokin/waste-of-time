import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Select } from '@/basicComponents/Select/Select';

vi.mock('./Select.module.scss', () => ({
  default: {
    select: 'select',
    selectElement: 'selectElement',
  },
}));

describe('Select component', () => {
  const elements = ['Option 1', 'Option 2', 'Option 3'];

  it('renders with label and options', () => {
    render(<Select label="Test Label" elements={elements} />);
    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();

    elements.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('calls onChange when a new option is selected', () => {
    const handleChange = vi.fn();
    render(<Select label="Change Test" elements={elements} onChange={handleChange} />);
    const selectElement = screen.getByRole('combobox');

    fireEvent.change(selectElement, { target: { value: 'Option 2' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('Option 2');
  });

  it('applies the disabled attribute correctly', () => {
    render(<Select label="Disabled Test" elements={elements} disabled />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
  });

  it('applies custom class names', () => {
    render(
      <Select
        label="Custom Classes"
        elements={elements}
        className="custom-class"
        labelClassName="custom-label"
        selectClassName="custom-select"
      />,
    );

    const wrapper = screen.getByText('Custom Classes').parentElement;
    const selectElement = screen.getByRole('combobox');
    const labelElement = screen.getByText('Custom Classes');

    expect(wrapper).toHaveClass('custom-class');
    expect(selectElement).toHaveClass('custom-select');
    expect(labelElement).toHaveClass('custom-label');
  });

  it('renders empty options when elements array is empty', () => {
    render(<Select label="Empty Options" elements={[]} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement.children.length).toBe(0);
  });
});
