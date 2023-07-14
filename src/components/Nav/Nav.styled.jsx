import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Item = styled.li`
  text-align: center;
`;

export const Link = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--white-color);
`;
