import styled, { css } from 'styled-components/native';

export interface RootProps {
  bgColor?: boolean;
}

interface BoxProps {
  hAlign?: string;
  vAlign?: string;
  expanded?: true;
}

export interface VBoxProps extends BoxProps {
  bgColor?: boolean;
  bgDark?: boolean;
  vGrow?: boolean;
  noGutter?: boolean;
  overflow?: string;
}

export interface HBoxProps extends BoxProps {
  wrap?: boolean;
  double?: boolean;
  justifyContent?: string;
  alignItems?: string;
}

export interface HBoxSeparatorProps {
  small?: boolean;
}

export interface VSeparatorProps {
  small?: boolean;
}

export const Root = styled.View`
  background-color: ${(props: RootProps) => props.bgColor ?
    '#efefef' : '#fff'};
  flex: 1;
  position: relative;
`;

export const Root2 = styled.View`
  background-color: ${(props: RootProps) => props.bgColor ? '#efefef' : '#fff'};
`;

export const VBox = styled.View`
  padding-horizontal: ${(props: VBoxProps ) => props.noGutter ? '0' : '8'};
  ${(props: VBoxProps) => props.vGrow ? 'flexGrow: 1' : null};
  justify-content: ${(props: VBoxProps) => props.vAlign ? props.vAlign : 'flex-start'};
  align-items: ${(props: VBoxProps) => props.hAlign ? props.hAlign : 'stretch'};
  ${(props: VBoxProps ) =>
    props.expanded &&
    css`
      padding-vertical: 8;
      flex: 1;
    `
  }
`;

export const VSeparator = styled.View`
  height: ${({ small }:  VSeparatorProps) => small ? '4' : '8'};
`;


export const HBox = styled.View<HBoxProps>`
  flex-direction: row;
  justify-content: ${(props: HBoxProps) => props.justifyContent || 'flex-start'};
  align-items: ${({alignItems}) => alignItems || 'stretch'}
`;

export const HSeparator = styled.View`
  width: 4px;
`
export const VDivider = styled.View`
  height: 1;
  background: #efefef;
  margin-top: 4;
  margin-bottom: 4;
`
