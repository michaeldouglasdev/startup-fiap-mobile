import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 12px;
`

export const Card = styled.View`
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
  background-color: white;
  padding: 12px 12px;
  justify-content: center;
`

export const TitleCompany = styled.Text`
  font-size: 16px;
  color: #565656;
  text-align: center;
`

export const Bold = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #123123;
  text-align: center;
`

export const Light = styled.Text`
  font-size: 16px;
  color: #afafaf;
  text-align: center;
`