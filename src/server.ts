import config from 'config';
import app from './app';

const port = config.get('app.port') || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
