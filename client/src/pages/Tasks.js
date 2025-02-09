import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
import { Box } from '@mui/system';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page/Page';
import TasksList from '../components/TasksList/TasksList';
import SearchBar from '../components/SearchBar/SearchBar';
import { getAllTasks, setTasks, subscribeOnTask, getFilteredTasks } from '../store/ac/tasksAC';
import TagsCloud from '../components/TagCloud/TagCloud';
import { BASE_URL_API } from '../config/constants';
import Loader from '../components/Loader/Loader';
// ----------------------------------------------------------------------

export default function Tasks() {
  const [filterName, setFilterName] = useState('');
  const [tags, setTags] = useState([]);
  const [filterUsed, setFilterUsed] = useState(false);
  const tasks = useSelector((state) => state.tasks);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getAllTasks());
    return () => {
      dispatch(setTasks([]));
    };
  }, [dispatch]);

  useEffect(() => {
    if (filterUsed) {
      dispatch(getFilteredTasks(filterName));
    }
  }, [filterUsed, dispatch, filterName]);

  const subscribeOnTaskToggle = useCallback(
    (taskId) => {
      dispatch(subscribeOnTask(taskId));
    },
    [dispatch],
  );

  const filterHandler = useCallback((event) => {
    setFilterUsed(true);
    setFilterName(event.target.value);
  }, []);

  const fetchTags = useCallback(async () => {
    try {
      const response = await axios(`${BASE_URL_API}/tasks/categories`);
      const { tags: newTags } = await response.data;
      setTags(newTags);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  return (
    <Page title={t('pages.goals.head')}>
      <Container maxWidth="xl">
        <Typography align="center" variant="h4" sx={{ mb: 5 }}>
          {t('pages.goals.title')}
        </Typography>
        <Box sx={{ maxWidth: '50%', ml: 'auto', mr: 'auto', textAlign: 'center' }}>
          <TagsCloud tags={tags} />
        </Box>
        <SearchBar filterName={filterName} onFilterName={filterHandler} />

        {isLoading > 0 ? (
          <Loader />
        ) : tasks.length > 0 ? (
          <TasksList tasks={tasks} subscribeOnTaskToggle={subscribeOnTaskToggle} buttonName="Добавить" />
        ) : (
          <Container>
            <Typography align="center" variant="h6">
              {t('pages.profile.tabs.notasks')}
            </Typography>
          </Container>
        )}
      </Container>
    </Page>
  );
}
