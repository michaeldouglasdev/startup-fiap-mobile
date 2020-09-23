import React, { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import { format } from 'date-fns';
import { HBox, HSeparator, VBox, VDivider, VSeparator } from '../../components/Positions';
import { Job } from '../../models/Job';
import api from '../../services/api';
import { Bold, Card, Container, Light, TitleCompany } from './styles';
import {Company} from '../../models/Company';
import { CurrencyFormat } from '../../util/currency-format.util';

interface JobPagePros {
  job: Job;
}

const JobPage: React.FC<JobPagePros> = (props) => {
  console.log("props", props)
  const {job} = props.route.params;
  const [company, setCompany] = useState<Company | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: job.title
    });

    const getCompany = async () => {
      const response = await api.get(`/companies/${job.company}`)
      setCompany(response.data);
      console.log("respieni compoanu", response)
    }
    getCompany();
  }, [props.navigation]);

  const formatedDate = useMemo(() => {
    return format(new Date(job.registerDate), 'dd/MM/yyyy')
  }, [job.registerDate]);

  const getEmail = useMemo(() => {
    return `https://www.${company?.name.split(" ").join("").toLowerCase()}.com`
  }, []);

  return (
    <Container>
      {
        company &&
          <VBox>
            <Card>
              <Bold>{company.name}</Bold>
              <Light>{getEmail}</Light>

              <VSeparator />
              <VSeparator />

              <Bold>Descrição da Empresa</Bold>
              <Light>{company.description}</Light>
            </Card>

            <VSeparator />
            <VSeparator />

            <Card>
              <Bold>Vaga</Bold>
              <VSeparator />
              <VSeparator />

              <HBox justifyContent="space-between">
                <HBox>
                  <Bold>Contratação: </Bold>
                  <HSeparator />
                  <Light>{job.hiring}</Light>
                </HBox>
                
                <HBox>
                  <Bold>Salário: </Bold>
                  <HSeparator />
                  <Light>{CurrencyFormat(job.salary)}</Light>
                </HBox>
              </HBox>

              <VSeparator />
              <VDivider />
              <VSeparator />

              <HBox>
                <Bold>Endereço: </Bold>
                <HSeparator />
                <Light>{job.address.toUpperCase()}</Light>
              </HBox>

              <VSeparator />

              <HBox alignItems="center" justifyContent="space-between">
                <HBox alignItems="center">
                  <IconEvil name="location" color='#aaa' size={20} />
                  <Light>{`${job.city} - ${job.state}`}</Light>
                </HBox>
                <HBox alignItems="center">
                  <IconEvil name="clock" color="#aaa" size={20} />
                  <Light>{formatedDate}</Light>
                </HBox>
              </HBox>

              <VSeparator />
              <VDivider />
              <VSeparator />

              <Bold>Benefícios: </Bold>
              <HBox alignItems="center">
                <IconIonicons name="car-outline" color="#aaa" size={20} />
                <HSeparator />
                <Light>Vale Estacionamento</Light>
              </HBox>

              <HBox alignItems="center">
                <IconMaterialCommunityIcons name="shield-account-outline" color="#aaa" size={20} />
                <HSeparator />
                <Light>Seguro de Vida</Light>
              </HBox>

              <HBox alignItems="center">
                <IconMaterialCommunityIcons name="tooth-outline" color="#aaa" size={20} />
                <HSeparator />
                <Light>Plano Odontológico</Light>
              </HBox>
              
              <HBox alignItems="center">
                <IconAntDesign name="medicinebox" color="#aaa" size={20} />
                <HSeparator />
                <Light>Plano de Saúde</Light>
              </HBox>
              
              <HBox alignItems="center">
                <IconMaterialCommunityIcons name="silverware" color="#aaa" size={20} />
                <HSeparator />
                <Light>Vale Refeição</Light>
              </HBox>
              
              <VSeparator />
              <VDivider />
              <VSeparator />

              <HBox justifyContent="flex-end">
                <Light>{`${job.cadidateUsers.length} candidaturas`}</Light>
              </HBox>
            </Card>
          </VBox>
      }

    </Container>
  )
}


export default JobPage;