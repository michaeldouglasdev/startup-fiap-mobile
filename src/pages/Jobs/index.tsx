import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { Background } from '../../components/Background';
import { Job as JobModel } from '../../models/Job';
import api from '../../services/api';
import Job from './components/job.component';
import { Container, List, Title } from './styles';

const JobsPage:React.FC = () => {

  const [jobs, setJobs] = useState<JobModel []>([]);

  useEffect(() => {
    const getJobs = async () => {
      const response = await api.get('/jobs')
      setJobs(response.data.items);
      console.log("response", response)
    }

    getJobs();
    console.log("jobs", jobs)
  }, []);

  return (
    <Background>
      <Container>
        <Title>Vagas</Title>

        { jobs &&
          <FlatList data={jobs} renderItem={({item}) => <Job data={item} /> } contentContainerStyle={{padding: 30}} showsVerticalScrollIndicator={false} />
        }
      </Container>

    </Background>
  )
}

export default JobsPage;