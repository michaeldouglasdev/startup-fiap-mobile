import React, { useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';

import { HBox, VDivider, VSeparator } from '../../../components/Positions';
import { Job as JobModel } from '../../../models/Job';
import { CurrencyFormat } from '../../../util/currency-format.util';
import { Container, Title, Salary, Localization, DateJob } from './job.styles';
import { useNavigation } from '@react-navigation/native';

export interface JobProps {
  data: JobModel;  
}
const Job:React.FC<JobProps> = ({data}) => {

  const navigation = useNavigation();

  useEffect(() => {
    console.log("job", data)
  }, []);

  const formatedDate = useMemo(() => {
    return format(new Date(data.registerDate), 'dd/MM/yyyy')
  }, [data.registerDate]);

  return (
    <Container onPress={() => navigation.navigate('Job', {job: data})}>
      <>
      <Title>{data.title}</Title>
      <Salary>{CurrencyFormat(data.salary)}</Salary>

      <VSeparator />
      <Text numberOfLines={5}>{data.description}</Text>
      <VDivider />
      <HBox alignItems="center" justifyContent="space-between">
        <HBox alignItems="center">
          <IconEvil name="location" color='#aaa' size={20} />
          <Localization>{`${data.city} - ${data.state}`}</Localization>
        </HBox>
        <HBox alignItems="center">
          <IconEvil name="clock" color="#aaa" size={20} />
          <DateJob>{formatedDate}</DateJob>
        </HBox>
      </HBox>
      </>
    </Container>
  )
}

export default Job;