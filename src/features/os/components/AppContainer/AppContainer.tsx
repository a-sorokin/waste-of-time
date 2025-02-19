import { FC, ReactNode, useRef } from 'react';
import Draggable from 'react-draggable';

type Props = {
  children: ReactNode;
};

export const AppContainer: FC<Props> = ({ children }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>{children}</div>
    </Draggable>
  );
};
