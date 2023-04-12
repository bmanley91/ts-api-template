import config from 'config';
import app from './app';
import { logInfo } from './infrastructure/util/logger';

const port = config.get('app.port') || 3000;

app.listen(port, () => {
    logInfo(`Server is running on port ${port}`);
});
