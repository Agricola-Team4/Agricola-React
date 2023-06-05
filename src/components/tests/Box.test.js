import { render, screen } from '@testing-library/react';
import RoundBox from '../RoundBox';

describe('Box', () => {
  const ratio = 'basis-1/5';
  const round = '1';

  it('renders round box', () => {
    const { container } = render(<RoundBox ratio={ratio} round={round} />);

    expect(screen.getByText(round)).toBeInTheDocument();
    expect(container.firstChild.classList.contains(ratio)).toBe(true);
  });
});
