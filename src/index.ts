import { from } from 'rxjs';
import axios from 'axios';

const queryText = 'rxjs'; 

from(axios.get(`https://api.github.com/search/repositories?q=${queryText}`))
  .subscribe(response => {
    console.log(response.data);
  });

  const gitLabQueryText = 'rxjs'; 

  from(axios.get(`https://gitlab.com/api/v4/projects?search=${gitLabQueryText}`))
    .subscribe(response => {
      console.log(response.data);
    });
  
